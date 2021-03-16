import React from 'react';
import Link from 'next/link';

type Props = {
  preview: boolean;
  slug: string;
};

const Footer = ({ preview, slug }: Props) => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <div className="container mx-auto px-5">
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Statically Generated with Next.js.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://www.konabos.com/"
              target="_blank"
              rel="noopener noreferrer">
              Powered by{' '}
              <img
                src="/next-js-content-hub-logo.png"
                alt="next-js-content-hub-logo"
                className="w-52"
              />
            </a>
          </div>
        </div>
        {preview ? (
          <Link href="/api/exit-preview">
            <a className="font-bold">Exit Preview Mode</a>
          </Link>
        ) : (
          <Link href={`/api/preview?slug=${encodeURIComponent(slug)}`}>
            <a className="font-bold">Enter Preview Mode</a>
          </Link>
        )}
      </div>
    </footer>
  );
};

export default Footer;
