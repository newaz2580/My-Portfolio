import React from 'react';
import Lottie from 'lottie-react';
import animation from '../../assets/Animation.json';

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-gray-100 to-blue-50 dark:from-gray-900 dark:to-gray-800 text-black dark:text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Animation */}
        <div className="w-full max-w-md mx-auto md:mx-0">
          <Lottie animationData={animation} loop={true} />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-5xl font-extrabold text-center md:text-left text-blue-800 dark:text-blue-400 mb-6">
            About Me
          </h2>

          <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed text-justify">
            Hello! I'm <span className="font-semibold text-blue-700 dark:text-blue-300">Mohammad Shahnowaz</span>, a passionate Full Stack Developer from Bangladesh. My journey began with curiosity and evolved into a profession where I turn ideas into interactive digital solutions.
          </p>

          <p className="mt-6 text-gray-700 dark:text-gray-100 text-justify">
            I specialize in the <strong>MERN stack</strong> (MongoDB, Express.js, React, Node.js) and love crafting clean, scalable, and user-friendly applications. I enjoy working on projects that solve real-life problems, improve user experience, or empower local communities.
          </p>

          <p className="mt-6 text-gray-700 dark:text-gray-100 text-justify">
            Outside coding, you’ll find me exploring tech trends, reading startup stories, or enjoying football and photography. I believe creativity and logic go hand in hand—and I bring both to every project I build.
          </p>

          {/* Tech Stack */}
          <div className="mt-10">
            <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4 text-center md:text-left">
              Tech Stack
            </h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {[
                'React',
                'Tailwind CSS',
                'Node.js',
                'Express.js',
                'MongoDB',
                'Firebase',
                'JWT',
                'React Router',
              ].map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow hover:bg-blue-700 transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
