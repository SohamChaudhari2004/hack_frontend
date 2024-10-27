import React from 'react';
import Dropdown from './Dropdown';

const MobileMenu = ({ toggleDropdown, dropdownOpen }) => {
  
  return (
    <div className="md:hidden bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 space-y-4 mt-4 p-4 rounded-lg shadow-lg">
      <a href="#" className="block text-center hover:text-blue-500 dark:hover:text-blue-400">COMPRESS IMAGE</a>
      <a href="#" className="block text-center hover:text-blue-500 dark:hover:text-blue-400">RESIZE IMAGE</a>
      <a href="#" className="block text-center hover:text-blue-500 dark:hover:text-blue-400">CROP IMAGE</a>
      <a href="#" className="block text-center hover:text-blue-500 dark:hover:text-blue-400">CONVERT TO JPG</a>
      <a href="#" className="block text-center hover:text-blue-500 dark:hover:text-blue-400">PHOTO EDITOR</a>

      {/* Dropdown for Mobile */}
      <div className='' onClick={dropdownOpen}>
      <Dropdown dropdownOpen={dropdownOpen} toggleDropdown={toggleDropdown}  />
      </div>
      
      <a href="#" className="block text-center hover:text-blue-500 dark:hover:text-blue-400">Login</a>
      <button className="block w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500">
        Sign up
      </button>
    </div>
  );
};

export default MobileMenu;
