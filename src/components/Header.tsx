import Link from 'next/link';
import Image from 'next/image';
import SifaLogo from '/public/images/logo-sifa.png';
import NavLink from './NavLink';

const LOGO_SIZE = 112; // 7rem (112px) for a larger, high-quality logo

const Header = ({ toggleMenu }: { toggleMenu: () => void }) => {
  return (
    <header className="z-50 sticky top-0 px-4 py-2 bg-white bg-opacity-95 flex justify-between items-center border-b border-gray-200 shadow-sm">
      <Link href="/" aria-label="Sifa Health Home">
        <div className="flex items-center justify-center" style={{ width: LOGO_SIZE, height: LOGO_SIZE }}>
          <Image
            src={SifaLogo}
            alt="Sifa Health Logo"
            width={LOGO_SIZE * 2} // Use 2x for retina screens
            height={LOGO_SIZE * 2}
            style={{ objectFit: 'contain', width: LOGO_SIZE, height: LOGO_SIZE, background: 'transparent' }}
            priority
            unoptimized={false}
          />
        </div>
      </Link>
      <button className="md:hidden ml-2" onClick={toggleMenu} aria-label="Open menu">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
      <nav className="hidden md:flex justify-end items-end gap-4 flex-1">
        <NavLink href="/about" name="ABOUT" />
        <NavLink href="/services" name="SERVICES" />
        <NavLink href="/contact" name="CONTACT" />
        <NavLink href="/resources" name="RESOURCES" />
      </nav>
    </header>
  );
};

export default Header;
