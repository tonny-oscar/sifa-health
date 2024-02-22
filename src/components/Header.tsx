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
      <nav className='flex justify-around items-end w-[400px]'>
        <NavLink href='/about' name='ABOUT' />
        <NavLink href='/services' name='SERVICES' />
        <NavLink href='/contact' name='CONTACT' />
      </nav>
    </header>
  );
};

export default Header;
