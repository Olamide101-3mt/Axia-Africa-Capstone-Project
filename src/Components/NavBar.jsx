import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#023047] text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h2 className="text-2xl font-bold">EduPlatform</h2>
        <div className="hidden md:flex gap-6">
          <a href="#">Home</a>
          <Link to = "#Features">Features</Link>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <div className="flex gap-3">
           <Link to="/login" className="bg-white text-[#023047] px-4 py-2 rounded-md">
            Login
          </Link>
          <Link to="/signup" className="bg-[#219EBC] text-white px-4 py-2 rounded-md">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
