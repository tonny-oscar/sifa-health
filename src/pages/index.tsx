import React from 'react';
import Image from 'next/image';
import portrait from '../../public/images/ks-portrait.jpeg';
const Home = () => {
  return (
    <main className='fade-in'>
      <Image className='opacity-60 filter blur-xs grayscale-50 w-screen object-cover h-[500px] lg:h-[600px]' src={portrait} alt='katie sanger portrait' />
    </main>
  );
};

export default Home;
