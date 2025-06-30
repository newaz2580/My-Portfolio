import React from 'react';
import { FaLaptopCode, FaTools, FaFolderOpen } from 'react-icons/fa';

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-gradient-to-br from-gray-100 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20 px-6 text-gray-800 dark:text-white"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center text-blue-800 dark:text-blue-400 mb-14">
          Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
            <FaLaptopCode className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Self-Taught Journey</h3>
            <p className="text-sm">
              I've spent countless hours learning full-stack development through online courses,
              documentation, and building hands-on projects.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
            <FaFolderOpen className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Personal Projects</h3>
            <p className="text-sm">
              My GitHub and portfolio showcase real-world projects like service platforms, hobby groups,
              and event-based apps — all built with React, Node.js, MongoDB, and Firebase.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
            <FaTools className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Freelance & Learning</h3>
            <p className="text-sm">
              I'm open to freelance or internship opportunities and eager to apply my knowledge
              while continuously learning and growing.
            </p>
          </div>
        </div>

        <p className="mt-12 text-center text-lg max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
          While I haven’t held a formal position yet, I’m actively working on improving my craft,
          solving real-world problems through code, and preparing myself for professional opportunities.
          <br /><br />
          📩 Feel free to <a href="#contact" className="text-blue-700 font-semibold hover:underline">reach out</a> if you'd like to collaborate!
        </p>
      </div>
    </section>
  );
};

export default Experience;
