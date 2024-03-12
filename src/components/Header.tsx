import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import ksLogo from '../../public/images/KS-logo.png';
import NavLink from './NavLink';

const Header = ({ toggleMenu }: { toggleMenu: () => void }) => {
  return (
    <header className='z-50 sticky top-0 px-[2vw] py-2 bg-gray-100 bg-opacity-[95%] py-1 flex justify-between items-center border-b-[2px] border-linen'>
      <Link href='/'>
        <Image className='w-[70vw] max-w-[150px]' src={ksLogo} alt='Katie Sanger Logo' />
      </Link>
      <button className='md:hidden' onClick={toggleMenu}>
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-8 h-8'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
        </svg>
      </button>
      <nav className='hidden md:flex justify-around items-end md:w-[400px]'>
        <NavLink href='/about' name='ABOUT' />
        <NavLink href='/services' name='SERVICES' />
        <NavLink href='/contact' name='CONTACT' />
      </nav>
    </header>
  );
};

export default Header;
