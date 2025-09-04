import React, { ReactNode } from 'react';
import Footer from './Footer';
import Head from 'next/head';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <title>Sifa Health</title>
        <meta name='description' content='Sifa Health is dedicated to providing holistic, person-centered care for mental health, fostering a supportive healing environment.' />
      </Head>
      <main className='fade-in'>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
