// components/Experience.jsx
import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="bg-white dark:bg-gray-900 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-800 dark:text-white mb-12">
          Experience
        </h2>

        <div className="text-center text-gray-700 dark:text-gray-300 text-lg max-w-3xl mx-auto">
          <p>
            I am currently building my skills and knowledge in full-stack development.
            While I have not yet had formal professional experience, I am passionate,
            dedicated, and actively working on personal and freelance projects to grow
            my expertise.
          </p>
          <p className="mt-4">
            If you'd like to see some of my projects or discuss potential opportunities,
            please feel free to contact me.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
