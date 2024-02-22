import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const NavLink = ({ href, name }: { href: string; name: string }) => {
  const { pathname } = useRouter();
  return (
    <Link href={href} className={pathname === href ? 'active' : 'nav-link border-transition'}>
      {name}
    </Link>
  );
};

export default NavLink;
