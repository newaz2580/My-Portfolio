// components/Footer.jsx
import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left: Name or site title */}
        <div className="text-gray-700 dark:text-gray-300 text-center md:text-left">
          © {new Date().getFullYear()} Mohammad Shahnowaz. All rights reserved.
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-5 text-xl text-gray-600 dark:text-gray-300">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaFacebook />
          </a>
          <a
            href="https://github.com/newaz2580"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800 dark:hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammad-newaz-b44113370/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
