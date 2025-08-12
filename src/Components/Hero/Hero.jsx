// components/Hero.jsx
import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="hero"
      className=" py-20 px-6 bg-white dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">

   
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Mohammad Shahnowaz</span>
          </h1>
          <p className="mt-4 text-xl text-gray-700 dark:text-gray-100">
            Full Stack Developer | React & Node.js Expert
          </p>
          <p className="mt-4 text-gray-600 dark:text-gray-200">
            I love writing clean and scalable code. I'm passionate about crafting modern web applications with client satisfaction in mind.
          </p>


          <div className="mt-6 flex justify-center md:justify-start gap-5 text-2xl">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-700 dark:text-blue-100 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://github.com/newaz2580"
              target="_blank"
              rel="noreferrer"
              className="text-gray-700 dark:text-white  transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammad-newaz-b44113370/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-800 dark:text-white transition"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Resume Button */}
          <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-indigo-700 transition flex items-center gap-2"
            >
              <FaDownload />
              Download Resume
            </motion.a>
          </div>
        </motion.div>

        {/* Right Image with Infinite Floating Animation */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <motion.img
            src="https://i.ibb.co/wtP2h5p/newaz.jpg"
            alt="Mohammad Shahnowaz"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg border-4 border-white dark:border-gray-700"
            animate={{
              y: [0, -20, 0], // floating animation
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;