import { productI, assetI, productCategoryI } from '@/interfaces/index';
import {
  IntentTagVector,
  IntentTags,
  IntentTagStrength,
} from '@uniformdev/optimize-common';

export const convertIntents = (value: string[]): IntentTags | undefined => {
  if (!value.length) {
    return null;
  }

  return {
    intents: value.reduce<IntentTagVector>((previous, current) => {
      previous[current] = {
        str: 50,
      };
      return previous;
    }, {}),
  };
};

export function productsParse(productFeed): productCategoryI[] {
  const productCategoryArray: productCategoryI[] = [];
  productCategoryArray.pop();

  productFeed.data.allM_PCM_ProductFamily.results.map((c) => {
    const productArray: productI[] = [];
    productArray.pop();

    c.pCMProductFamilyToProduct.results.map((p) => {
      const assetArray: assetI[] = [];
      assetArray.pop();
      p.pCMProductToAsset.results.map((pa) => {
        pa.assetToPublicLink.results.map((publicLink) => {
          if (assetArray.length < 1) {
            const asset: assetI = {
              relativeUrl: publicLink.relativeUrl,
              versionHash: publicLink.versionHash,
              url:
                process.env.CH_BASE_URL +
                publicLink.relativeUrl +
                '?' +
                publicLink.versionHash,
            };
            assetArray.push(asset);
          }
        });
      });

      const product: productI = {
        productName: p.productName,
        productShortDescription: p.productShortDescription['en-US'],
        productLongDescription: p.productLongDescription['en-US'],
        assets: assetArray,
      };
      productArray.push(product);
    });

    var intent = c.productFamilyName.toLowerCase();
    intent = intent.replace(/ /g, '');

    var i: IntentTagVector = {
      [intent]: { str: IntentTagStrength.Normal },
    };

    const productCategory: productCategoryI = {
      id: c.id,
      productFamilyName: c.productFamilyName,
      products: productArray,
      type: 'productFamily',
      intentTag: {
        intents: i,
      },
      slug: c.slug,
    };
    productCategoryArray.push(productCategory);
  });

  return productCategoryArray;
}
