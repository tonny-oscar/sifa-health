import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const NavLink = ({ href, name }: { href: string; name: string }) => {
  const { pathname } = useRouter();
  return (
    <Link href={href} className={`px-2 text-center text-lg nav-link ${pathname === href ? 'active' : 'inactive'}`}>
      {name}
    </Link>
  );
};

export default NavLink;
