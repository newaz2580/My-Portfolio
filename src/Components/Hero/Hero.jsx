// components/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Fixed import for React Router v6+
import { FaFacebook, FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero">
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
          
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold">
              Hi, I'm Mohammad Shahnowaz
            </h1>
            <p className="mt-4 text-xl">
              Full Stack Developer | React & Node.js Expert
            </p>
            <p className="mt-4">
              I love writing clean and scalable code. I'm passionate about crafting modern web applications with client satisfaction in mind.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex justify-center md:justify-start gap-4 text-2xl">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition"
              >
                <FaFacebook />
              </a>
              <a
                href="https://github.com/newaz2580"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-black transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/mohammad-newaz-b44113370/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900 transition"
              >
                <FaLinkedin />
              </a>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
              <motion.a
                href="/resume.pdf" // Make sure resume.pdf is in your public folder
                download
                whileHover={{ scale: 1.05 }}
                className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md flex items-center gap-2 transition hover:bg-blue-700 cursor-pointer"
              >
                <FaDownload />
                Resume Download
              </motion.a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <img
              src="https://i.ibb.co/wtP2h5p/newaz.jpg"
              alt="Mohammad Shahnowaz"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
