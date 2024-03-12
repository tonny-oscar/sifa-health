import React, { useState } from 'react';
import Image from 'next/image';
import Layout from '@/components/Layout';
import moonphase from '../../public/images/moonphase.png';
import moonsun from '../../public/images/moon-sun.png';
import Link from 'next/link';

const Home = () => {
  const [coachingShown, setCoachingShown] = useState(true);
  return (
    <Layout>
      <div id='homeSection' className='p-5 w-screen h-[500px] grid grid-cols-2'>
        <article className='h-5/6 text-center flex flex-col m-auto items-center justify-around col-span-2 md:col-span-1 md:max-w-[400px]'>
          <h1 className='text-xl font-extrabold'>DEEPEN. EVOLVE. GROW.</h1>
          <p className='max-w-[300px]'>self discovery + mind-body healing for the heart centered woman</p>
          <div className='h-[30px] border-l-[1px] border-black'></div>
          <button className='border-[1px] border-black py-2 px-5'>BOOK A CALL</button>
          <Image src={moonphase} alt='moonphases' className='max-w-screen w-[250px]' />
        </article>
      </div>
      <article className='min-h-[400px] h-auto border-t-[2px] border-linen bg-white p-5 text-center flex flex-col items-center justify-around'>
        <h1 className='text-xl'>How do coaching and astrology blend?</h1>
        <Image src={moonsun} alt='moon and sun decorative image' className='max-w-screen w-[150px]' />
        <p>In my coaching practice, I seamlessly integrate astrology as a transformative tool, using it as a guiding map for our collaborative journey. Astrology, with its profound insights derived from the birth chart, becomes the foundation for understanding and addressing my clients&apos; unique needs, strengths, desires, challenges, and values. This celestial framework serves as a powerful guide for setting personalized goals and taking aligned actions, especially in the realms of relationships, career, and self-healing.</p>
        <p className='my-4'>By combining mindset work, somatics, and embodiment practices with astrology, I create a holistic approach that goes beyond traditional coaching, offering a rich, tailored therapeutic experience. Embracing the interplay of astrology and coaching allows us to unlock the depths of the psyche, facilitating profound personal growth and alignment with one&apos;s authentic self.</p>
      </article>
      <article id='homeAboutSection' className='min-h-[420px] flex flex-col justify-center md:grid grid-cols-2'>
        <div className='bg-white bg-opacity-60 mt-4 md:mt-0 md:bg-transparent rounded-sm p-4 h-auto flex flex-col justify-around'>
          <h1 className='self-center text-center text-3xl font-regular md:font-semibold m-2'>Aligning Mind, Stars, &amp; Spirit</h1>
        </div>
        <div className='bg-white bg-opacity-90 mb-4 md:m-2 rounded-sm p-4 h-auto flex flex-col items-center justify-around'>
          <p className='m-1 max-w-[800px]'>Step into a holistic journey of self-discovery with Katie, where life coaching, astrology, and the serene wisdom of yoga converge. As a compassionate guide, Katie seamlessly blends her expertise as a life coach with celestial insights, providing a unique and transformative experience. Rooted in her yogic practice, Katie fosters mindfulness and presence in every interaction. Her nurturing approach gently empowers individuals to navigate life&apos;s complexities, unravel their true potential.</p>
          <Link href='/about' className='m-1 border-[1px] border-black py-2 px-5'>
            MORE ABOUT ME
          </Link>
        </div>
      </article>
      <section id='homeServicesSection' className='min-h-[400px] flex flex-col items-center justify-around p-5'>
        <h1 className='text-3xl text-center m-2 '>WHAT I OFFER</h1>
        <article className='w-[90vw] md:max-w-[900px] min-h-[250px] m-5 bg-white bg-opacity-50 rounded-sm flex flex-col items-center justify-center text-center'>
          {coachingShown ? (
            <>
              <h2 className='text-xl border-b-2 text-center'>Coaching Services</h2>
              <div className='max-w-[400px] md:max-w-[70%] mx-5'></div>
              <ul className='my-4 mx-8 text-start'>
                <li className='p-1'>
                  <span className='font-bold text-lg'>3 Session Catalyst:</span> DESCRIPTION NEEDED HERE
                </li>
                <li className='p-1'>
                  <span className='font-bold text-lg'>3 Month Program:</span> DESCRIPTION NEEDED HERE
                </li>
                <li className='p-1'>
                  <span className='font-bold text-lg'>6 Month Program:</span> DESCRIPTION NEEDED HERE
                </li>
              </ul>
            </>
          ) : (
            <>
              <h2 className='text-xl border-b-2 text-center'>Astrology Offerings</h2>
              <div className='max-w-[400px] md:max-w-[70%] mx-5'></div>
              <ul className='my-4 mx-8 text-start'>
                <li className='p-1'>
                  <span className='font-bold text-lg'>Basic Reading:</span> You will receive a PDF and a 20 minute recording.
                </li>
                <li className='p-1'>
                  <span className='font-bold text-lg'>In Depth Astrology Session:</span> 1 hour long live session.
                </li>
                <li className='p-1'>
                  <span className='font-bold text-lg'>Power Moon Reading:</span> Comparing your birth chart to the themes of the current new or full moon.
                </li>
              </ul>
            </>
          )}
          <div>
            <button className={`m-1 rounded-full h-4 w-4 ${coachingShown ? 'bg-gray-400' : 'bg-none'} border-2`} onClick={() => setCoachingShown(true)}></button>
            <button className={`m-1 rounded-full h-4 w-4 ${!coachingShown ? 'bg-gray-400' : 'bg-none'} border-2`} onClick={() => setCoachingShown(false)}></button>
          </div>
        </article>

        <Link className='border-b-[1px] border-black py-2 px-5' href='#'>
          BOOK A FREE CLARITY CALL
        </Link>
      </section>
    </Layout>
  );
};

export default Home;
