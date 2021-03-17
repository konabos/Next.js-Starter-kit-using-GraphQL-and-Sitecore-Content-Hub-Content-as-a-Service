import { productCategoryI } from '../interfaces';
import CoverImage from 'components/cover-image';
import { useBehaviorTracking } from '@uniformdev/optimize-tracker-react';

type Props = {
  category: productCategoryI;
  trackBehavior: boolean;
};

const ProductCategory = ({ category, trackBehavior }: Props) => {
  if (trackBehavior) {
    useBehaviorTracking(category.intentTag);
  }
  return (
    <section>
      <div>
        <h2 className="text-3xl mb-3 leading-snug">
          <a className="hover:underline">{category.productFamilyName}</a>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
          {category.products?.length > 0
            ? category.products.map((product, index) => (
                <div key={index}>
                  <div className="mb-5">
                    <CoverImage
                      src={product.assets[0].url}
                      title={product.productName}
                    />
                  </div>
                  <h3 className="text-3xl mb-3 leading-snug">
                    <a className="hover:underline" key={index}>
                      {product.productName}
                    </a>
                  </h3>
                  <div className="text-lg mb-4">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: product.productLongDescription,
                      }}
                    />
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </section>
  );
};

export default ProductCategory;
