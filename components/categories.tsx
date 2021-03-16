import { productCategoryI } from '../interfaces';
import React from 'react';
import Link from 'next/link';

type Props = {
  categories: productCategoryI[];
};

const Categories = ({ categories }: Props) => {
  return (
    <section>
      {categories?.length > 0
        ? categories.map((category, index) => (
            <Link href={category.slug} key={index}>
              <a className="font-bold p-2 text-xl" key={index}>
                {category.productFamilyName}
              </a>
            </Link>
          ))
        : null}
    </section>
  );
};

export default Categories;
