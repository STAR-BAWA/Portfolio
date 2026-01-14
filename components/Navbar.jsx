'use client'
import Home from '@/app/page';
import React, { useState } from 'react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='bg-transparent w-full h-[60px] flex items-center px-4 justify-between relative z-50'>
      {/* Logo Section */}
      <div className='flex items-center' onClick={Home}>
        <img src="react.png" alt="logo" width={50} className='transition duration-300 hover:bg-black'/>
      </div>

      {/* Navigation Links for Desktop */}
      <div className='md:flex flex-1 justify-end space-x-6'>
        <a href="#home" className='text-white hover:text-red-800 hover:underline cursor-pointer text-2xl'>Home</a>
        <a href="#about" className='text-white hover:text-red-800 hover:underline cursor-pointer text-2xl'>About</a>
        <a href="#skills" className='text-white hover:text-red-800 hover:underline cursor-pointer text-2xl'>Skills</a>
        <a href="#projects" className='text-white hover:text-red-800 hover:underline cursor-pointer text-2xl'>Projects</a>
        <a href="#contact" className='text-white hover:text-red-800 hover:underline cursor-pointer text-2xl'>Contact</a>
      </div>

      {/* Mobile Menu Icon */}
      <div className='flex md:hidden ml-auto'>
        <button
          className='text-white text-2xl focus:outline-none'
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='absolute top-[60px] left-0 w-full bg-green-700 flex flex-col items-center space-y-4 py-4 md:hidden z-50'>
          <a href="#home" onClick={toggleMenu} className='text-white hover:text-purple-800 hover:underline cursor-pointer text-lg'>Home</a>
          <a href="#about" onClick={toggleMenu} className='text-white hover:text-purple-800 hover:underline cursor-pointer text-lg'>About</a>
          <a href="#skills" onClick={toggleMenu} className='text-white hover:text-purple-800 hover:underline cursor-pointer text-lg'>Skills</a>
          <a href="#projects" onClick={toggleMenu} className='text-white hover:text-purple-800 hover:underline cursor-pointer text-lg'>Projects</a>
          <a href="#contact" onClick={toggleMenu} className='text-white hover:text-purple-800 hover:underline cursor-pointer text-lg'>Contact</a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
