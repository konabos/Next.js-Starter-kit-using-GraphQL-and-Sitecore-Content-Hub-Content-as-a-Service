import { fetchGraphQL } from 'api';
import { productCategoryI } from '@/interfaces/index';
import { productsParse } from '../sharedFunctions';

export const getCategory = async (
  preview: boolean,
  category: string,
): Promise<{ categories: productCategoryI[] }> => {
  try {
    const categoryQuery: any = `
    query {
      allM_PCM_ProductFamily (where: {slug_eq: "${category}"}) {
        results {
          id
          productFamilyName
          productFamilyLabel
          productFamilyShortDescription
          slug
          pCMProductFamilyToProduct {
            results {
              id
              productName
              productShortDescription
              productLongDescription
              pCMProductToAsset {
                results {
                  id
                  fileName
                  assetToPublicLink {
                    results {
                      id
                      relativeUrl
                      versionHash
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
        `;
    const categories: any = await fetchGraphQL(categoryQuery, preview);
    const productCategoryArray: productCategoryI[] = productsParse(categories);
    return {
      categories: productCategoryArray,
    };
  } catch (err) {
    console.log(err);
    return {
      categories: null,
    };
  }
};
