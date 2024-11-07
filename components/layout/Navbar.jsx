'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import { MenuIcon, X } from 'lucide-react'

export default function Navbar({ menu_links }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#141414]' : 'bg-transparent'}`}>
      <div className="max-w-[1440px] mx-auto w-full min-h-full px-5 flex items-center justify-between py-4">
       <Link href="/">
       <Image src={logo} alt="logo" width={200} height={100} />
       </Link>

        {/* Desktop Links */}
        <ul className="gap-5 text-white md:flex hidden">
          {menu_links.map((link, index) => (
            <li key={index} className="hover:text-yellow-500 transition-all duration-300">
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="z-10 md:hidden" onClick={() => setOpen(!open)}>
          {open ? (
            <X size={40} className="text-white" />
          ) : (
            <MenuIcon size={40} className="text-white" />
          )}
        </button>

        {/* Mobile Menu */}
        {open && (
          <ul className="fixed top-0 right-0 w-full h-screen bg-black flex flex-col items-start p-10 justify-center gap-5 text-white md:hidden">
            {menu_links.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="text-3xl hover:text-yellow-500">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
