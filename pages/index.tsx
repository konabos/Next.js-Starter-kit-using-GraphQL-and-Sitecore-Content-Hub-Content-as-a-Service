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

      <Personalize variations={props.categories}>
      {({variations}) => {
        return <>
          {variations.map(category => <ProductCategory category={category} />)}
        </>
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
