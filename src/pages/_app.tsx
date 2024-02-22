import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '@/components/Header';
import favicon from '../../public/favicon.ico';
import moonphase from '../../public/images/moonphase.png';

import Image from 'next/image';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <div className='flex items-center justify-center load-in bg-gray-200 bg-opacity-50 w-screen h-screen'>
        <Image className='pulse w-full max-w-[400px]' src={moonphase} alt='Kate Sanger Logo shown while page is loading' />
      </div>
      <div className='delay-display'>
        <Header />
        <Component {...pageProps} />
      </div>
    </div>
  );
}
