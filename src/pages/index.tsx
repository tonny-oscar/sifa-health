import React from 'react';
import Image from 'next/image';
import portrait from '../../public/images/ks-portrait.jpeg';
import flowers from '../../public/images/ks-flowers.jpg';
import moonphase from '../../public/images/moonphase.png';

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
    </main>
  );
};

export default Home;
