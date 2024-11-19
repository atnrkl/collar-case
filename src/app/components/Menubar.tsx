"use client";

import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

type Props = {};

const Menubar = (props: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-[#fffbec] text-[#78350f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-3xl font-bold">
            <a href="/">Logo</a>
          </div>

          {/* Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          {/* Menu Items (Desktop) */}
          <div className="hidden md:flex space-x-4 items-center ">
            <a href="#" className="  px-3 py-2 rounded-md text-md font-medium">
              Home
            </a>
            <a href="#" className="  px-3 py-2 rounded-md text-md font-medium">
              About
            </a>
            <a href="#" className="  px-3 py-2 rounded-md text-md font-medium">
              Services
            </a>
            <a href="#" className="  px-3 py-2 rounded-md text-md font-medium">
              Contact
            </a>
            <button className="outline outline-2 font-semibold rounded-lg px-5 py-2">
              Sign up now
            </button>
          </div>
        </div>
      </div>

      {/* Menu Items (Mobile) */}
      {menuOpen && (
        <div className="md:hidden">
          <div className="space-y-2 px-2 pt-2 pb-3 sm:px-3">
            <a
              href="#"
              className="block text-gray-800 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="block text-gray-800 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="block text-gray-800 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </a>
            <a
              href="#"
              className="block text-gray-800 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Menubar;
