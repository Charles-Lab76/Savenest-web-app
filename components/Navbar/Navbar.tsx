'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Features', href: '/features' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Profile', href: '/login' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F9FAFB] border-b border-[#1B1F3B]/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center">
              {/* Placeholder for logo image */}
            
              <Image src="/images/logo.png" 
              alt='Logo'
              width={100}
              height={100} 
              />

        


            </div>
            <span className="text-[#14110B] font-bold text-xl font-inter">
              SAVE NEST
            </span>
          </div>

          {/* Desktop Menu Links */}
          <div className="hidden md:flex items-center space-x-8">
            {menuLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#14110B] hover:text-[#22C475] hover:cursor-pointer transition-colors duration-200 font-inter font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#22C475] transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="px-4 py-2 text-[#14110B] border border-[#1B1F3B] rounded-lg hover:bg-[#4BC589] hover:text-[#F9FAFB] hover:border-[#4BC589] active:bg-[#179055] active:border-[#179055] transition-all duration-200 font-inter font-medium hover:cursor-pointer"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 bg-[#22C475] text-[#F9FAFB] border border-[#22C475] rounded-lg hover:bg-[#4BC589] hover:border-[#4BC589] active:bg-[#179055] active:border-[#179055] transition-all duration-200 font-inter font-medium hover:cursor-pointer"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#14110B] hover:text-[#22C475] hover:cursor-pointer transition-colors duration-200 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-2 pt-2 pb-4 space-y-2 bg-[#F9FAFB] border-t border-[#1B1F3B]/10">
            {menuLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-[#14110B] hover:text-[#22C475] hover:bg-[#22C475]/5 rounded-md transition-all duration-200 font-inter font-medium hover:cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Mobile Auth Buttons */}
            <div className="pt-4 space-y-2">
              <Link
                href="/login"
                className="block w-full px-3 py-2 text-center text-[#14110B] border border-[#1B1F3B] rounded-lg hover:bg-[#4BC589] hover:text-[#F9FAFB] hover:border-[#4BC589] active:bg-[#179055] active:border-[#179055] transition-all duration-200 font-inter font-medium hover:cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="block w-full px-3 py-2 text-center bg-[#22C475] text-[#F9FAFB] border border-[#22C475] rounded-lg hover:bg-[#4BC589] hover:border-[#4BC589] active:bg-[#179055] active:border-[#179055] transition-all duration-200 font-inter font-medium hover:cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;