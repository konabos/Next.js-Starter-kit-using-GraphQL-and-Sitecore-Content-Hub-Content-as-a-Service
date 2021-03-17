import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import Footer from 'components/footer';
import { getCategories } from '@/api/queries/getCategories';
import { getCategory } from '@/api/queries/getCategory';
import ProductCategory from 'components/product-category';
import { dataI } from '@/interfaces/index';
import React from 'react';
import Header from 'components/header';

export default function Category(props: dataI) {
  return (
    <div className="container mx-auto px-5">
      <Head>
        <title>
          The Sitecore Experience Edge for Content Hub - Content as a Service!
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header preview={props.preview} />
      <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
        {props.categories?.length > 0
          ? props.categories.map((category, index) => (
              <div key={index}>
                <ProductCategory category={category} trackBehavior={true} />
              </div>
            ))
          : null}
      </section>

      <Footer preview={props.preview} slug={props.slug} />
    </div>
  );
}
export const getStaticProps: GetStaticProps = async ({
  preview = false,
  params,
}) => {
  let slug = '';
  if (Array.isArray(params.slug)) {
    slug = params.slug.pop();
  } else {
    slug = params.slug;
  }

  const { categories } = await getCategory(preview, slug);
  return {
    props: {
      categories,
      preview,
      slug,
    },
    revalidate: 1,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { categories } = await getCategories(true);
  const paths = categories
    .map((category) => {
      return { params: { slug: category.slug } };
    })
    .flat();
  return {
    paths: paths,
    fallback: false,
  };
};
