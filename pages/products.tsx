import Head from 'next/head';
import { GetStaticProps } from 'next';
import Footer from 'components/footer';
import { getProducts } from '@/api/queries/getProducts';
import Products from 'components/products';
import { productDataI } from '@/interfaces/index';
import React from 'react';
import Header from 'components/header';

export default function ProductsPage(props: productDataI) {
  console.log(props.products);
  return (
    <div className="container mx-auto px-5">
      <Head>
        <title>
          The Sitecore Experience Edge for Content Hub - Content as a Service!
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header preview={props.preview} />
      <h2 className="text-3xl text-blue-500">Products</h2>
      <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
        {props.products?.length > 0 ? (
          <Products products={props.products} />
        ) : null}
      </section>

      <Footer preview={props.preview} slug="products" />
    </div>
  );
}
export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const { products } = await getProducts(preview);
  return {
    props: {
      products,
      preview,
    },
    revalidate: 1,
  };
};
