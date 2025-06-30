import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import logo from '/Profile-logo.jpeg';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-3 text-center">
 
        <img
          src={logo}
          alt="Logo"
          className="w-16 h-16 rounded-full object-cover shadow-md"
        />

      
        <div className="text-gray-700 dark:text-gray-300 text-sm md:text-base select-none">
          © {new Date().getFullYear()}{' '}
          <span className="font-semibold">Mohammad Shahnowaz</span>. All rights reserved.
        </div>

        {/* social links */}
        <div className="flex gap-5 text-4xl text-blue-700 dark:text-blue-400">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-600 dark:hover:text-blue-500 transition"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://github.com/newaz2580"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-900 dark:hover:text-white transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammad-newaz-b44113370/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-800 dark:hover:text-blue-300 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
