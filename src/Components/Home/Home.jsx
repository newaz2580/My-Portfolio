import React from 'react';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Qualification from '../Qualification/Qualification';
import Experience from '../Experience/Experience';
import Contact from '../Contact/Contact';
import Project from '../Project/Project';
import Skills from '../Skills/Skills';

const Home = () => {
  return (
    <div className="px-4 md:px-20 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Hero />
      <About />
      <Qualification />
      <Skills />
      <Experience />
      <Project />
      <Contact />
    </div>
  );
};

export default Home;
