import Head from 'next/head';
import { GetStaticProps } from 'next';
import Header from 'components/header';
import Footer from 'components/footer';
import { getCategories } from '@/api/queries/getCategories';
import { dataI } from '@/interfaces/index';
import React from 'react';
import { Personalize } from '@uniformdev/optimize-tracker-react';
import Categories from 'components/categories';
import ProductCategory from '@/components/product-category';

export default function Home(props: dataI) {
  return (
    <div className="container mx-auto px-5">
      <Head>
        <title>
          The Sitecore Experience Edge for Content Hub - Content as a Service!
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header preview={props.preview} />
      <Categories categories={props.categories} />

      <h2 className="text-3xl text-blue-500">Welcome to the Demo site!</h2>
      <h3 className="text-2xl text-blue-700 mb-10">
        You might be interested in the following products:
      </h3>

      <Personalize variations={props.categories}>
        {({ variations }) => {
          return (
            <>
              {variations.map((category, index) => (
                <ProductCategory category={category} key={index} />
              ))}
            </>
          );
        }}
      </Personalize>

      <Footer preview={props.preview} />
    </div>
  );
}
export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const { categories } = await getCategories(preview);
  return {
    props: {
      categories,
      preview,
    },
    revalidate: 1,
  };
};
