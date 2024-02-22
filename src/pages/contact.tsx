import React from 'react';
import ContactForm from '@/components/ContactForm';
import flowers from '../../public/images/ks-flowers.jpg';
import Image from 'next/image';
import Link from 'next/link';

const Contact = () => {
  return (
    <main id='contactSection' className='fade-in flex flex-col md:grid md:grid-cols-2 md:items-stretch relative'>
      <Image id='contactImg' src={flowers} alt='katie sanger portrait' className='opacity-80 h-[200px] md:h-full object-cover' />
      <div className='px-5 pt-[4vh] flex flex-col w-full'>
        <h1 className='text-3xl text-center'>GET IN TOUCH</h1>
        <p className='text-center py-4'>Let&apos;s connect! I&apos;m looking forward to meeting you.</p>
        <ContactForm />
        <Link href='/contact' className='text-center block mt-4'>
          <span className='pr-2 italic'>Interested in coaching services?</span>
          <span className='underline inline-block'>Book a free clarity call</span>
        </Link>
      </div>
    </main>
  );
};

export default Contact;
