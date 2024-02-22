import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import ksLogo from '../../public/images/KS-logo.png';
import NavLink from './NavLink';

const Header = () => {
  return (
    <header className='bg-linen bg-opacity-60 py-1 flex justify-between items-center border-b-[2px] border-dogwood'>
      <Link href='/'>
        <Image src={ksLogo} alt='Katie Sanger Logo' />
      </Link>
      <button className='md:hidden mr-[2vw]'>
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='w-8 h-8'>
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
