import React from 'react';
import Image from 'next/image';
import portrait from '../../public/images/ks-portrait.jpeg';
import flowers from '../../public/images/ks-flowers.jpg';
const Home = () => {
  return (
    <main className='fade-in'>
      <Image className='opacity-60 filter blur-xs grayscale-50 w-screen h-nav-vh object-cover' src={portrait} alt='katie sanger portrait' />
    </main>
  );
};

export default Home;
