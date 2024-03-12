import Layout from '@/components/Layout';
import React from 'react';
import yoga from '../../public/images/yoga.jpg';
import bodhi from '../../public/images/bodhi.png';
import Image from 'next/image';

const About = () => {
  return (
    <Layout>
      <h2 className='text-4xl text-center m-2 font-semibold border-b-2'>ABOUT ME</h2>
      <div className='p-2 flex flex-col md:grid grid-cols-2 items-center text-center p-4'>
        <p className='justify-self-center max-w-[1000px] col-span-2 m-2'>As a therapeutic life coach, I am dedicated to being of service and driven by a passion for empowering my clients. My journey has been one of intuitive exploration from a young age, shaping my path towards becoming who I am today. With a trauma-informed approach, I seamlessly blend mindset work, somatics, and embodiment practices while utilizing astrology as the &quot;map&quot; for our sessions. Astrology acts as the guidance system for how we navigate our work together. The birth chart gives detailed insight into one&apos;s personality - highlighting unique needs, strengths, desires, challenges, and values. It can also be used as a framework to set goals and take aligned action when it comes to relationships, career, self healing and so much more!</p>
        <div className=' justify-self-center max-w-[1200px] flex flex-col md:flex-row justify-around items-center h-full col-span-2 bg-yellow-700/5'>
          <Image className='w-[100vw] md:w-[50%] md:max-w-[500px] max-h-[500px] p-2  object-cover opacity-80' src={yoga} alt='woman doing yoga pose next to an astrology symbol nad the moon' />
          <p className='justify-self-center max-w-[1000px] m-2'>I believe in creating a unique, rich, therapeutic experience tailored specifically to each client&apos;s needs. Within my practice, I specialize in guiding clients through explorations of their inner worlds, offering insights and clarity while helping them uncover new dimensions of their psyche. I am fascinated by parts and archetypal work, concepts that frequently find a place in my approach. Embracing the profound connection between the mind and body, I recognize the vital role of embodied healing in order to achieve true wellness. With a background in Hypnotherapy and Yoga, these modalities often make their way into our work together.</p>
        </div>
        <p className='text-lg md:text-xl italic font-semibold justify-self-center max-w-[1000px] m-2 md:my-12 col-span-2'>&quot;My commitment extends beyond traditional coaching as I delve into high-level coaching, guiding you towards the realization of your heart&apos;s deepest desires. It&apos;s important to me that I meet my clients where they are at currently. As we work together, you&apos;ll step fully into your confidence and self-worth, unlocking your innate gifts and power from within - paving the way for the achievement of your dream life.&quot;</p>
        <div className=' justify-self-center max-w-[1200px] flex flex-col-reverse md:flex-row justify-around items-center h-full col-span-2 bg-rose-50/30'>
          <p className='justify-self-center max-w-[1000px] m-2 md:w-[50%]'>I am most happy when spending time with my daughter and our husky, Luke. As a creative at heart, self expression is important to me. I enjoy painting, dancing, and creating content. My passion for personal development keeps me at the forefront of progressive healing trends, and you&apos;ll often find me focused on health and well being at every level: mind, body and spirirt.</p>
          <Image className='w-[100vw] md:w-[50%] md:max-w-[500px]  max-h-[500px] p-2  object-cover opacity-80' src={bodhi} alt='Katie Sangers daughter peakinf over the dresser at her toys' />
        </div>
      </div>
    </Layout>
  );
};

export default About;
