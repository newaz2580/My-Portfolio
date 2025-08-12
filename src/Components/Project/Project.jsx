import React from "react";
import { Link } from "react-router"; 
import projects from '../../data/projectData';

const Projects = () => {
  return (
    <section id="projects" className="projects-section py-12 px-6 mt-10 bg-white dark:bg-gray-800 ">
      <h2 className="text-5xl mb-12 text-center font-extrabold text-blue-600 tracking-wide drop-shadow-lg">
        My Projects
      </h2>
      <div className="projects-grid grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
          >
            <img
              src={project.images[0]}
              alt={project.title}
              className="mb-4 rounded-t-xl h-52 w-full object-cover"
            />
            <div className="px-6 pb-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 flex-grow mb-6">
                {project.description.length > 100
                  ? project.description.slice(0, 100) + "..."
                  : project.description}
              </p>
              <Link
                to={`/details/${project.id}`}
                className="mt-auto inline-block bg-blue-600 text-white text-center px-5 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium shadow-md"
                aria-label={`View more details about ${project.title}`}
              >
                View More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
