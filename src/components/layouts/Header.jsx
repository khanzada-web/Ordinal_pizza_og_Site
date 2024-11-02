"use client";
import React, { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import NavLink from "../buttons/NavLink";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Team", href: "/team" },
  { name: "Faqs", href: "/faqs" },
  { name: "Collection", href: "/collection" },
];

const links = [
  {
    href: "https://magiceden.io/ordinals/marketplace/ordinal-pizza-og",
    src: "/assets/images/magic-eden.svg",
    alt: "magic-eden logo",
    className: "size-6",
  },
  {
    href: "https://discord.gg/YEdkVESK",
    src: "/assets/images/discord.svg",
    alt: "discord logo",
    className: "size-6 invert",
  },
  {
    href: "https://x.com/ordinalpizzaog",
    src: "/assets/images/twitter.svg",
    alt: "twitter logo",
    className: "size-6",
  },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="py-6">
      <div className="mx-auto max-w-[86rem] px-4 sm:px-10 lg:px-8">
        <nav aria-label="Global" className="flex items-center justify-between">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="text-pretty text-2xl font-title bg-gradient-to-r from-[#EF9631] to-[#E96751] bg-clip-text text-transparent">
                Ordinal Pizza Og
              </span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <NavLink key={item.name} href={item.href} className="nav-link">
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="hidden lg:flex lg:gap-6 lg:flex-1 lg:justify-end">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <Image
                  className={link.className}
                  src={link.src}
                  alt={link.alt}
                  width={24}
                  height={24}
                  priority
                />
              </a>
            ))}
          </div>
        </nav>
      </div>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-300/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="text-pretty text-2xl font-title bg-gradient-to-r from-[#EF9631] to-[#E96751] bg-clip-text text-transparent">
                Ordinal Pizza Og
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Close menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    href={item.href}
                    className=" block nav-link"
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
              <div className="py-6 flex gap-6">
                {links.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80"
                  >
                    <Image
                      className={link.className}
                      src={link.src}
                      alt={link.alt}
                      width={24}
                      height={24}
                      priority
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
