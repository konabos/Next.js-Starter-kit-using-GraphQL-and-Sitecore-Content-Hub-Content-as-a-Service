import { fetchGraphQL } from 'api';
import {  productCategoryI } from '@/interfaces/index';
import { productsParse } from '../sharedFunctions';

export const getCategories = async (
  preview: boolean,
): Promise<{ categories: productCategoryI[] }> => {
  try {
    const productsQuery: any = `
    query {
      allM_PCM_ProductFamily {
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
    const productFeed: any = await fetchGraphQL(productsQuery, preview);
    const productCategoryArray: productCategoryI[] = productsParse(productFeed);
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
