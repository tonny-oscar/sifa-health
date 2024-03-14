import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '@/components/Header';
import favicon from '../../public/favicon.ico';
import moonphase from '../../public/images/moonphase.png';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function App({ Component, pageProps }: AppProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const closeMenu = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', closeMenu);
    closeMenu();

    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      window.removeEventListener('resize', closeMenu);
      clearTimeout(loadingTimeout);
    };
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  return (
    <div className=''>
      {loading ? (
        <div className='flex items-center justify-center load-in bg-gray-200 bg-opacity-50 w-screen h-screen'>
          <Image className='pulse w-full max-w-[400px]' src={moonphase} alt='Kate Sanger Logo shown while page is loading' />
        </div>
      ) : (
        <div className='fade-in'>
          {menuOpen ? (
            <nav className='fade-in bg-linen bg-opacity-30 flex flex-col p-5 h-screen w-screen'>
              <button className='self-end' onClick={toggleMenu}>
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M6 18 18 6M6 6l12 12' />
                </svg>
              </button>
              <div className='h-screen max-h-[500px] flex flex-col items-center justify-around'>
                <Link className='border-b-[1px] border-black w-screen max-w-[200px] text-center text-xl' onClick={toggleMenu} href='/'>
                  HOME
                </Link>
                <Link className='border-b-[1px] border-black w-screen max-w-[200px] text-center text-xl' onClick={toggleMenu} href='/about'>
                  ABOUT
                </Link>
                <Link className='border-b-[1px] border-black w-screen max-w-[200px] text-center text-xl' onClick={toggleMenu} href='/services'>
                  SERVICES
                </Link>
                <Link className='border-b-[1px] border-black w-screen max-w-[200px] text-center text-xl' onClick={toggleMenu} href='/contact'>
                  CONTACT
                </Link>
                <Link href='https://calendly.com/katiesanger/30min' target='_blank' className='border-[1px] border-black text-center py-2 w-screen max-w-[200px] text-xl'>
                  BOOK A CALL
                </Link>
              </div>
            </nav>
          ) : (
            <>
              <Header toggleMenu={toggleMenu} />
              <Component {...pageProps} />
            </>
          )}
        </div>
      )}
    </div>
  );
}
