import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/images/logo.png'; 
import minimoon from '../../public/images/minimoon.png';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* About Section */}
        <div className="flex flex-col items-center md:items-start">
          <Image src={logo} alt="Sifa Health Logo" className="w-32 mb-3" />
          <p className="text-gray-600 text-sm">
            Sifa Health is dedicated to providing holistic, person-centered care for mental health,
            fostering a supportive healing environment.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p className="text-gray-700 text-sm">Eka Massachusetts</p>
          <p className="text-gray-700 text-sm">info@sifahealth.com</p>
          <p className="text-gray-700 text-sm">+1 857 413 9238</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm text-blue-600">
            <li>
              <Link href="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline">Service List</Link>
            </li>
            <li>
              <Link href="/resources" className="hover:underline">Patient Resources</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">Contact</Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">About</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Decorative & Footer Bottom */}
      <div className="flex justify-center mt-8">
        <Image src={minimoon} alt="Moon decorative" className="w-6 rotate-45 opacity-50" />
      </div>
      <p className="text-center text-xs text-gray-400 mt-2 italic">
        Mind your mind, live to the fullest
      </p>
      <p className="text-center text-sm text-gray-500 mt-2">
        © {new Date().getFullYear()} Sifa Health. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
