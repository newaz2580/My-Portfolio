import React from 'react';
import Lottie from 'lottie-react';
import animation from '../../assets/Animation.json';

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-50 dark:bg-gray-950 text-black dark:text-white py-20 px-6"
    >
      <h2 className="text-5xl font-extrabold text-center text-blue-800 dark:text-blue-400 mb-6">
  About Me
</h2>
<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 p-4">
  {/* Left Animation */}
  <div className="w-full max-w-sm mx-auto md:mx-0">
    <Lottie animationData={animation} loop={true} />
  </div>

  {/* Right Content */}
  <div>
    <p className="text-base text-gray-800 dark:text-gray-300 leading-relaxed text-justify">
      Hello! I’m <span className="font-semibold text-blue-700 dark:text-blue-300">Mohammad Shahnowaz</span>, a Full Stack Developer from Bangladesh. My programming journey began with curiosity, and it quickly turned into a profession where I love building interactive and user-friendly applications.
    </p>

    <p className="mt-4 text-gray-700 dark:text-gray-100 text-justify">
      I specialize in the <strong>MERN stack</strong> and enjoy problem-solving, from brainstorming ideas to deploying production-ready apps.
    </p>

    <p className="mt-4 text-gray-700 dark:text-gray-100 text-justify">
      Outside coding, I enjoy football, photography, exploring tech trends, and reading startup stories.
    </p>

    {/* Tech Stack */}
    <div className="mt-6">
      <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-3 text-center md:text-left">
        Tech Stack
      </h3>
      <div className="flex flex-wrap justify-center md:justify-start gap-2">
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
            className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow hover:bg-blue-700 transition"
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
