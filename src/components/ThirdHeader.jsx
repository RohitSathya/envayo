import React, { useState } from "react";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";

const ThirdHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md relative">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Left Section: Logo */}
        <div className="flex items-center">
          <img
            src="https://beyot.g5plus.net/main/wp-content/uploads/2016/11/Logo.png"
            alt="Beyot Real Estates Logo"
            className="h-12"
          />
        </div>

        {/* Center Section: Navigation */}
        <nav className="hidden md:flex space-x-8">
          <div className="relative group">
            <a href="#" className="text-black hover:text-orange-500 font-medium flex items-center">
              DEMO
              <span className="ml-1 text-orange-500">▼</span>
            </a>
            <div className="h-1 w-full bg-orange-500 group-hover:block hidden"></div>
          </div>
          <a href="#" className="text-black hover:text-orange-500 font-medium">
            PROPERTIES
          </a>
          <a href="#" className="text-black hover:text-orange-500 font-medium">
            AGENTS
          </a>
          <a href="#" className="text-black hover:text-orange-500 font-medium">
            PAGES
          </a>
          <a href="#" className="text-black hover:text-orange-500 font-medium">
            BLOGS
          </a>
          <a href="#" className="text-black hover:text-orange-500 font-medium">
            ELEMENTS
          </a>
          <a href="#" className="text-black hover:text-orange-500 font-medium">
            MY ACCOUNT
          </a>
        </nav>

        {/* Right Section: Phone Number with Curvy Orange Background */}
        <div
          className="hidden md:flex items-center justify-center relative"
          style={{ width: "250px", height: "60px" }}
        >
          <div
            className="absolute inset-0 bg-orange-500"
            style={{
              clipPath: "polygon(10% 0%, 100% 0%, 85% 100%, 0% 100%)",
            }}
          ></div>
          <div className="relative z-10 flex items-center space-x-2 text-white">
            <FaPhoneAlt />
            <span className="font-bold text-lg">19854</span>
          </div>
        </div>

        {/* Hamburger Menu Icon for Small Devices */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="flex flex-col bg-white shadow-md px-6 py-4 md:hidden">
          <a href="#" className="text-black hover:text-orange-500 font-medium py-2">
            DEMO
          </a>
          <a href="#" className="text-black hover:text-orange-500 font-medium py-2">
            PROPERTIES
          </a>
          <a href="#" className="text-black hover:text-orange-500 font-medium py-2">
            AGENTS
          </a>
          <a href="#" className="text-black hover:text-orange-500 font-medium py-2">
            PAGES
          </a>
          <a href="#" className="text-black hover:text-orange-500 font-medium py-2">
            BLOGS
          </a>
          <a href="#" className="text-black hover:text-orange-500 font-medium py-2">
            ELEMENTS
          </a>
          <a href="#" className="text-black hover:text-orange-500 font-medium py-2">
            MY ACCOUNT
          </a>
          <div
            className="bg-orange-500 text-white flex items-center justify-center px-6 py-2 rounded-full mt-4"
            style={{ clipPath: "polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)" }}
          >
            <FaPhoneAlt className="text-white mr-2" />
            <span className="font-bold text-lg">19854</span>
          </div>
        </nav>
      )}
    </header>
  );
};

export default ThirdHeader;
