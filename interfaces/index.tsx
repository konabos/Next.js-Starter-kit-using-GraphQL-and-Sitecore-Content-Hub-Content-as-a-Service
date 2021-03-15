import { IntentTags } from '@uniformdev/optimize-common';

export interface productI {
  productName: string;
  productShortDescription: string;
  productLongDescription: string;
  assets: assetI[];
}

export interface assetI {
  relativeUrl: string;
  versionHash: string;
  url: string;
}

export interface dataI {
  categories: productCategoryI[];
  preview: boolean;
}

export interface productCategoryI {
  type?: string;
  intentTag: IntentTags | undefined | null;
  id: string;
  productFamilyName: string;
  products: productI[];
  slug: string;
}
