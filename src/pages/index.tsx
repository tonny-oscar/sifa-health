import React from 'react';
import Image from 'next/image';
import portrait from '../../public/images/ks-portrait.jpeg';

import moonphase from '../../public/images/moonphase.png';
import moonsun from '../../public/images/moon-sun.png';

const Home = () => {
  return (
    <main className='fade-in'>
      <div id='homeSection' className='p-5 w-screen h-[500px] grid grid-cols-2'>
        <article className='h-5/6 text-center flex flex-col m-auto items-center justify-around col-span-2 md:col-span-1 md:max-w-[400px]'>
          <h1 className='text-xl font-extrabold'>DEEPEN. EVOLVE. GROW.</h1>
          <p className='max-w-[300px]'>self discovery + mind-body healing for the heart centered woman</p>
          <div className='h-[30px] border-l-[1px] border-black'></div>
          <button className='border-[1px] border-black py-2 px-5'>BOOK A CALL</button>
          <Image src={moonphase} alt='moonphases' className='max-w-screen w-[250px]' />
        </article>
      </div>
      <div className='min-h-[400px] h-auto border-t-[2px] border-linen bg-white p-5 text-center flex flex-col items-center justify-around'>
        <h1 className='text-xl'>How do coaching and astrology blend?</h1>
        <Image src={moonsun} alt='moon and sun decorative image' className='max-w-screen w-[150px]' />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </main>
  );
};

export default Home;
