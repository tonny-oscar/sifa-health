import React, { ReactNode } from 'react';
import Footer from './Footer';
import Head from 'next/head';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <title>Katie Sanger</title>
        <meta name='description' content='Katie Sanger is a life coach and astrologist offering wellness services.' />
      </Head>
      <main className='fade-in'>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
