import React from 'react';
import logo from '../../assets/Profile-logo.jpeg'
import { NavHashLink } from 'react-router-hash-link';
import { HashLink as Link } from "react-router-hash-link";
const Navbar = () => {
    const links=<>
         <li><Link smooth to="#top" className="hover:underline">Home</Link></li>
         <li><Link smooth to="#hero" className="hover:underline">Hero</Link></li>
         <li><Link smooth to="#about" className="hover:underline">About</Link></li>
         <li><Link smooth to="#qualification" className="hover:underline">Qualification</Link></li>
         <li><Link smooth to="#projects" className="hover:underline">Project</Link></li>
         <li><Link smooth to="#contact" className="hover:underline">Contact</Link></li>

         <li><Link smooth to="#skills" className="hover:underline">Skills</Link></li>

        
    </>
    return (
        <div className=" navbar bg-base-100 shadow-sm sticky top-0 right-0 left-0 z-30 md:px-20">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <span>
        <img src={logo} alt="" className='w-12 h-12 rounded-full' />
    </span>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-blue-600 text-white text-xl" href='/resume.pdf' download>Resume</a>
  </div>
</div>
    );
};

export default Navbar;