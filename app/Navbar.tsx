'use client'

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold">
            <Link href="/">
              MyBrand
            </Link>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link href="/">
              Home
            </Link>
            <Link href="/about">
             About
            </Link>
            <Link href="/services">
              Services
            </Link>
            <Link href="/contact">
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="space-y-4 flex flex-col py-2">
              <Link href="/">
                Home
              </Link>
              <Link href="/about">
                About
              </Link>
              <Link href="/services">
                Services
              </Link>
              <Link href="/contact">
               Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
