import React, { useState } from 'react';
import Image from 'next/image';
import Layout from '@/components/Layout';
import moonphase from '../../public/images/moonphase.png';
import moonsun from '../../public/images/moon-sun.png';
import Link from 'next/link';
import moon from '../../public/images/moon.png';
import stars from '../../public/images/stars.png';

const Home = () => {
  const [coachingShown, setCoachingShown] = useState(true);
  return (
    <Layout>
      <div id='homeSection' className='p-5 w-screen h-[500px] grid grid-cols-2'>
        <article className='h-5/6 text-center flex flex-col m-auto items-center justify-around col-span-2 md:col-span-1 md:max-w-[400px]'>
          <h1 className='text-xl font-extrabold'>DEEPEN. EVOLVE. GROW.</h1>
          <p className='max-w-[300px]'>self discovery + mind-body healing for the heart centered woman</p>
          <div className='h-[30px] border-l-[1px] border-black'></div>
          <Image src={moonphase} alt='moonphases' className='max-w-screen w-[250px]' />
        </article>
      </div>
      <article className='min-h-[200px] h-auto border-t-[2px] text-center border-linen bg-white p-5 flex flex-col items-center justify-around'>
        <h1 className='text-xl'>How you do one thing, is how you do everything.</h1>
        <Image src={moonsun} alt='moon and sun decorative image' className='max-w-screen w-[150px]' />
        <p>If you&apos;re looking for long lasting, transformation - you&apos;re in the right place. Journey with me as we cultivate and create your dream life: from the inside out. Let&apos;s align you with your highest calling and most authentic expression utilizing a blend of astrology, personal empowerment, and life coaching.</p>
      </article>
      <article id='calloutArticle' className='my-10 p-4 flex flex-col lg:grid grid-cols-5 items-center'>
        <p className='col-span-5 my-4 italic font-bold text-2xl text-center border-b-2 md:text-start md:border-b-0 md:border-l-2 p-4'>&quot;Discover the immense power of astrology, utilizing your birth chart as the framework to align with your most authentic self.&quot;</p>
        {/* <div className='flex flex-col md:flex-row justify-center col-span-3'>
          <button onClick={() => setCoachingShown(false)} className='group m-2 border-[1px] rounded-sm bg-white h-72 w-52 flex flex-col items-center justify-around'>
            Discover Astrology
            <div className='relative w-[80%] h-[58%] rounded-[120px] overflow-hidden'>
              <Image className='absolute inset-0 w-full h-full object-cover transition-transform duration-300 transform scale-100 group-hover:scale-110 opacity-80' src={stars} alt='stars in the night sky' />
            </div>
            Discover Astrology
          </button>
          <button onClick={() => setCoachingShown(true)} className='discovery-btn group m-2 border-[1px] rounded-sm bg-white h-72 w-52 flex flex-col items-center justify-around'>
            Discover Coaching
            <div className='relative w-[80%] h-[58%] rounded-[120px] overflow-hidden'>
              <Image className='absolute inset-0 w-full h-full object-cover transition-transform duration-300 transform scale-100 group-hover:scale-110 opacity-80' src={moon} alt='moon visible during the afternoon, peaking through a pink sunset' />
            </div>
            Discover Coaching
          </button>
        </div> */}
      </article>
      <article id='homeAboutSection' className='min-h-[420px] flex flex-col justify-center lg:grid grid-cols-2'>
        <div className='bg-white bg-opacity-60 mt-4 lg:mt-0 lg:bg-transparent rounded-sm p-4 h-auto flex flex-col justify-around'>
          <h1 className='josefin self-center text-center text-3xl font-regular md:font-semibold m-2'>Meet the deeper parts of yourself, through a compassionate lens - resulting in lasting changes.</h1>
        </div>
        <div className='bg-white bg-opacity-90 mb-4 lg:m-2 lg:rounded-sm p-6 h-auto flex flex-col items-center justify-around'>
          <p className='m-1 max-w-[800px]'>We will begin with clarifying goals, and identifying challenges and blocks that keep showing up and standing in the way of you creating you dream life. This will begin with mindset work, and eventually and inevitably lead us into the deeper work through somatic processing. Getting to the root of the issue is crucial and essential if we are hoping to make lasting change. I am a huge believer in awareness and mindfulness for each and every one of my clients so we will be practicing these skills all through out our work together. Additionally, I use astrology - both birth charts and transits - as a way for us to gain deeper insight and awareness into what is currently showing up for you and how we can better align with the themes in your life. Join me as we traverse and explore the complexities of your inner world, aligning you with your dream life and highest expression of yourself. </p>
          {/* <button className='josefin p-2 pt-3 my-2 border-[1px] border-black '>EXPLORE SERVICES</button> */}
          <Link href='https://calendly.com/katiesanger/30min' target='_blank' className='self-center border-black josefin border-b-[1px] py-2 px-5 mt-4'>
            BOOK A FREE CLARITY CALL
          </Link>
        </div>
      </article>
    </Layout>
  );
};

export default Home;
