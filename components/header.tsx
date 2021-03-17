import Link from 'next/link';
import React from 'react';

type Props = {
  preview: boolean;
};

const Header = ({ preview }: Props) => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div className="grid grid-rows-3 gap-4 min-w-full ">
        <div className="row-span-3 ...">
          <Link href="/">
            <a>
              <img
                src="/next-js-content-hub-logo.png"
                alt="next-js-content-hub-logo"
                className="w-64 mb-12"
              />
            </a>
          </Link>
        </div>
        <div className="row-span-3 ...">
          <h1 className="text-4xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8">
            <Link href="https://github.com/konabos/Next.js-Starter-kit-using-GraphQL-and-Sitecore-Content-Hub-Content-as-a-Service">
              <a
                target="_blank"
                className="underline hover:text-success duration-200 transition-colors">
                Next.js Starter kit
              </a>
            </Link>{' '}
            - {`Preview Mode: ${preview}`}
          </h1>
          <h4 className="text-center md:text-left text-xl mt-5">
            The Sitecore Experience Edge for Content Hub - Content as a Service!
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Header;
