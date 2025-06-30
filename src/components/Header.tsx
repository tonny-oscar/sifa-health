import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import logo from '/public/images/logo.png'; // Your new logo
import NavLink from './NavLink';

const Header = ({ toggleMenu }: { toggleMenu: () => void }) => {
  return (
    <header className='z-50 sticky top-0 px-[2vw] py-2 bg-gray-100 bg-opacity-[95%] py-1 flex justify-between items-center border-b-[2px] border-linen'>
      <Link href='/'>
        <div className='w-16 h-16 rounded-full overflow-hidden border-2 border-gray-300 shadow-md'>
          <Image
            src={logo}
            alt='Site Logo'
            className='w-full h-full object-cover'
            width={64}
            height={64}
            priority
          />
        </div>
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
