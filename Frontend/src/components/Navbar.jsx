import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import DarkIcon from '../assets/image.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (state) => {
    setDropdownOpen(state);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className='absolute z-50'>
      <nav className=" fixed w-[100%] bg-white shadow-md p-4 dark:bg-gray-800">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left: Logo */}
          <Link to="/" className="flex items-center">
          <div className="text-2xl font-bold">
            <span className="text-blue-500"> </span>
            <span className="text-black dark:text-white">VisionAI</span>
          </div>
        </Link>
          {/* Middle: Nav Links */}
          <div className="hidden md:flex space-x-8 text-sm font-semibold">
            

          <Link
              to="/home"
              className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
            >
              HOME
            </Link>
            
            <Link
              to="/superres"
              className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
            >
              UPSCALE IMAGE
            </Link>
            

            {/* Convert to JPG Link */}
            
            
            <Link
              to="/convertion"
              className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
            >
              CONVERTION
            </Link>

            <Link
              to="/ser"
              className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
            >
              SERVILLENCE
            </Link>

            
          </div>

          {/* Right: Login, Sign Up and Dark Mode Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <div onClick={toggleDarkMode} className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white">
              {darkMode ? 'Light Mode' : 'Dark Mode'}
              <img className='w-10 h-10' src={DarkIcon} alt="" />
            </div>
            {/* <a href="#" className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white">Login</a>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Sign up
            </button> */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? (
                <XMarkIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
