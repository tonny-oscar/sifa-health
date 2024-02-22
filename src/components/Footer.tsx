import React from 'react';
import Image from 'next/image';
import ksLogo from '../../public/images/KS-logo.png';
import minimoon from '../../public/images/minimoon.png';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='border-t-[1px] pt-2 border-t-linen flex flex-col items-center'>
      <div className='flex flex-col justify-center items-center'>
        <Image className='border-black max-w-[25px] transform rotate-45' src={minimoon} alt='Moonphases decorative image' />
        <Image className='max-w-[150px]' src={ksLogo} alt='Katie Sanger Logo' />
      </div>
      <p id='copyright'>
        Copyright © 2024 Katie Sanger{' '}
        <span>
          | Powered by{' '}
          <Link className='underline' href='https://www.lauragarciaguerra.com' target='_blank'>
            LGG Web Services
          </Link>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
