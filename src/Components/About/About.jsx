import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-white text-black py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-blue-800  mb-8">
          About Me
        </h2>

        {/* Main Intro Paragraph */}
        <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
          Hello! I'm <span className="font-semibold text-blue-700 dark:text-blue-400">Mohammad Shahnowaz</span>, a dedicated Full Stack Developer from Bangladesh with a passion for turning ideas into interactive digital solutions. My journey in programming started from curiosity, evolved into passion, and is now my profession.
        </p>

        {/* Extended Info */}
        <p className="mt-6 text-gray-800  text-center max-w-3xl mx-auto">
          I specialize in the MERN stack (MongoDB, Express.js, React, Node.js), and I love building clean, efficient, and user-friendly applications. I'm particularly excited about working on projects that solve real-life problems, improve user experience, or support local communities. 
          <br /><br />
          When I'm not coding, you'll find me exploring new tech trends, reading about startups, or spending time outdoors. I'm also a big fan of football, photography, and occasionally try my hand at digital design. I believe that creativity and code go hand in hand, and I enjoy mixing both in my projects.
        </p>

        {/* Skills */}
        <div className="mt-10 text-center">
          <h3 className="text-2xl font-semibold text-blue-700  mb-4">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
            <span className="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 px-4 py-2 rounded-full">React</span>
            <span className="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 px-4 py-2 rounded-full">Tailwind CSS</span>
            <span className="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 px-4 py-2 rounded-full">Node.js</span>
            <span className="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 px-4 py-2 rounded-full">Express.js</span>
            <span className="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 px-4 py-2 rounded-full">MongoDB</span>
            <span className="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 px-4 py-2 rounded-full">Firebase</span>
            <span className="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 px-4 py-2 rounded-full">JWT</span>
            <span className="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 px-4 py-2 rounded-full">React Router</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
