import { productCategoryI } from '../interfaces';
import React from 'react';
import Link from 'next/link';

type Props = {
  categories: productCategoryI[];
};

const Categories = ({ categories }: Props) => {
  return (
    <section className="mb-12 bg-gray-400 flex space-x-4">
      {categories?.length > 0
        ? categories.map((category, index) => (
            <Link href={category.slug} key={index}>
              <a className="font-bold p-2 text-xl hover:bg-green-200" key={index}>
                {category.productFamilyName}
              </a>
            </Link>
          ))
        : null}
    </section>
  );
};

export default Categories;
