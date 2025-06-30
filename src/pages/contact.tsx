import React from 'react';
import ContactForm from '@/components/ContactForm';
import flowers from '../../public/images/pic2.webp';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';

const Contact = () => {
  return (
    <Layout>
      <div id='contactSection' className='fade-in flex flex-col md:grid md:grid-cols-2 md:items-stretch relative'>
        <Image id='contactImg' src={flowers} alt='katie sanger portrait' className='opacity-80 h-[200px] md:h-full object-cover' />
        <div className='px-5 pt-[4vh] flex flex-col w-full'>
          <h1 className='text-3xl text-center'>GET IN TOUCH</h1>
          <p className='text-center py-4'>Let&apos;s connect! I&apos;m looking forward to meeting you.</p>
          <ContactForm />
          <Link href='https://calendly.com/katiesanger/30min' target='_blank' className='text-center block mt-1'>
            <span className='pr-2 italic'>Interested in coaching services?</span>
            <span className='underline inline-block'>Book a free clarity call</span>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
