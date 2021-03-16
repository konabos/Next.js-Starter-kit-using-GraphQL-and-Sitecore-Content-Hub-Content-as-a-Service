import { fetchGraphQL } from 'api';
import { productI } from '@/interfaces/index';
import { productsParse } from '../sharedFunctions';

export const getProducts = async (
  preview: boolean,
): Promise<{ products: productI[] }> => {
  try {
    const productsQuery: any = `
    query {
      allM_PCM_Product{
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
        `;
    const productFeed: any = await fetchGraphQL(productsQuery, preview);
    const productArray: productI[] = productsParse(productFeed);
    console.log(productArray);
    return {
      products: productArray,
    };
  } catch (err) {
    console.log(err);
    return {
      products: null,
    };
  }
};
