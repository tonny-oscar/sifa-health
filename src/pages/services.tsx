import Layout from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import yoga from '../../public/images/twisted.png';
import bodhi from '../../public/images/bodhi.png';
import inverted from '../../public/images/inverted.png';
import FamiliarCallout from '@/components/FamiliarCallout';

const Services = () => {
  const callouts = [<p>Have you ever set out to make a change in your life, only to inevitably fall back into an old pattern or blockage?</p>, <p>Are you struggling to make changes, deep down knowing you want and need more for your life, but having no idea how to get there or how to begin?</p>, <p>Do you believe that if only you just push a little harder, or criticize just a little more, you can force yourself into change... only once again to be met with the same old version of yourself?</p>];
  return (
    <Layout>
      <div className='bg-gray-100 flex flex-col items-center md:flex-row-reverse md:justify-between'>
        <Image className='h-[300px] md:h-[550px] w-[90vw] md:w-[50vw] object-cover opacity-[78%]' src={yoga} alt='katie sanger doing a yoga pose' />
        <article className='p-4 px-[5%] flex flex-col text-center md:text-start'>
          <h2 className='text-3xl py-2'>If you&apos;re ready to go from this to that...</h2>
          <p className='max-w-full md:max-w-[500px]'>Talk about the problem their facing and how that problem is making them feel!</p>
          <p className='max-w-full md:max-w-[500px] py-2'>A little bit longer section will go hear to talk about the transformation your clients will undergo. This section should be about this length. </p>
          <Link href='https://calendly.com/katiesanger/30min' target='_blank' className='self-center md:self-start border-black josefin border-[1px] py-2 px-5 mt-4'>
            BOOK A CALL
          </Link>
        </article>
      </div>
      <article id='familiarities' className='py-4 text-center'>
        <h2 className='text-2xl'>Does any of this sound familiar?</h2>
        <div className='my-6 flex flex-col lg:flex-row justify-around items-center lg:items-start'>
          {callouts.reduce((acc: ReactNode[], callout, index) => {
            acc.push(
              <div key={index + 'calloutsection'} className='flex flex-col items-center'>
                <FamiliarCallout>{callout}</FamiliarCallout>
                {index !== callouts.length - 1 && <div className='lg:hidden border-r-[1px] border-black h-8 my-4'></div>}
              </div>
            );
            return acc;
          }, [])}
        </div>
        <p>Here's where my unique blend of tools and methodology works and becomes incredibly impactful.</p>
      </article>
    </Layout>
  );
};

export default Services;
