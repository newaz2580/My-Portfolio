import React from 'react';
import logo from '../../assets/Profile-logo.jpeg';
import { HashLink as Link } from "react-router-hash-link";
import ModeToggle from '../ModeToggle';

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link smooth to="/#top" className="hover:underline hover:text-blue-600 transition">
          Home
        </Link>
      </li>
      <li>
        <Link smooth to="/#hero" className="hover:underline hover:text-blue-600 transition">
          Hero
        </Link>
      </li>
      <li>
        <Link smooth to="/#about" className="hover:underline hover:text-blue-600 transition">
          About
        </Link>
      </li>
       <li>
        <Link smooth to="/#skills" className="hover:underline hover:text-blue-600 transition">
          Skills
        </Link>
      </li>
      <li>
        <Link smooth to="/#qualification" className="hover:underline hover:text-blue-600 transition">
          Qualification
        </Link>
      </li>
      
      <li>
        <Link smooth to="/#projects" className="hover:underline hover:text-blue-600 transition">
          Projects
        </Link>
      </li>
      <li>
        <Link smooth to="/#contact" className="hover:underline hover:text-blue-600 transition">
          Contact
        </Link>
      </li>
     
    </>
  );

  return (
    <nav className="navbar bg-white dark:bg-gray-900 shadow sticky top-0 left-0 right-0 z-40 md:px-20 py-3">
      {/* Mobile menu button + logo */}
      <div className="navbar-start flex items-center gap-4">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 stroke-current text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white dark:bg-gray-800 rounded-box w-52 text-blue-700 dark:text-blue-300"
          >
            {links}
          </ul>
        </div>

        {/* Logo */}
        <Link smooth to="#top" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-12 h-12 rounded-full object-cover shadow-md" />
          <span className="text-2xl font-bold text-blue-700 dark:text-blue-400 select-none hidden sm:inline">
            Shahnowaz
          </span>
        </Link>
      </div>

      {/* Desktop links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-blue-700 dark:text-blue-400 font-semibold">
          {links}
        </ul>
      </div>

      {/* Resume Button */}
      <div className="navbar-end">
        <a
          href="/resume.pdf"
          download
          className="btn bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-6 py-2 rounded-lg shadow-md transition"
          aria-label="Download Resume"
        >
          Resume
        </a>
        <ModeToggle/>
      </div>
    </nav>
  );
};

export default Navbar;
