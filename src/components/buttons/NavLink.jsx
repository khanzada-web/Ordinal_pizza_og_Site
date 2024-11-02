"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children, className }) => {
  const pathname = usePathname();
  const isActive = pathname === href || pathname === `${href}/`; // Handle trailing slash

  return (
    <Link
      href={href}
      passHref
      className={`${className} ${isActive ? "active" : ""}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
