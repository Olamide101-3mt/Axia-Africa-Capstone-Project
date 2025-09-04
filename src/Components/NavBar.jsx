import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#023047] text-white sticky top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo and title */}
        <div className="flex items-center gap-3">
          <img src="/Logo.png" alt="logo" className="w-10 h-10" />
          <h2 className="text-xl md:text-2xl font-bold">NextGen Academy</h2>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6">
          <a href="#" className="hover:text-[#8ECAE6]">Home</a>
          <a href="#Features" className="hover:text-[#8ECAE6]">Features</a>
          <a href="#About" className="hover:text-[#8ECAE6]">About</a>
          <a href="#Contact" className="hover:text-[#8ECAE6]">Contact</a>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex gap-3">
          <Link to="/login" className="bg-white text-[#023047] px-4 py-2 rounded-md hover:bg-gray-200">
            Login
          </Link>
          <Link to="/signup" className="bg-[#219EBC] text-white px-4 py-2 rounded-md hover:bg-[#8ECAE6] transition">
            Sign Up
          </Link>
        </div>

        {/* Hamburger Icon (mobile only) */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#023047] px-6 pb-6 space-y-4">
          <a href="#" className="block hover:text-[#8ECAE6]">Home</a>
          <a href="#Features" className="block hover:text-[#8ECAE6]">Features</a>
          <a href="#About" className="block hover:text-[#8ECAE6]">About</a>
          <a href="#Contact" className="block hover:text-[#8ECAE6]">Contact</a>

          <div className="flex flex-col gap-3 pt-4">
            <Link to="/login" className="bg-white text-[#023047] px-4 py-2 rounded-md text-center hover:bg-gray-200">
              Login
            </Link>
            <Link to="/signup" className="bg-[#219EBC] text-white px-4 py-2 rounded-md text-center hover:bg-[#8ECAE6] transition">
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
