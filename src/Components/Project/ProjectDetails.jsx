import React from 'react';
import { useParams, Link } from 'react-router-dom';
import projects from '../../data/projectData';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="p-5 max-w-7xl mx-auto text-center ">
        <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
        <Link to="/projects" className="text-blue-600 underline">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <section className="project-details max-w-7xl mx-auto pt-5 px-3 bg-gray-800 text-white dark:bg-gray-100 dark:text-black">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="mb-4">{project.description}</p>

      <h3 className="text-2xl font-semibold mb-2">Features</h3>
      <ul className="list-disc list-inside mb-6">
        {project.features.map((feature, index) => (
          <li key={index} className="mb-1">{feature}</li>
        ))}
      </ul>

      <h3 className="text-2xl font-semibold mb-2">Technology Stack</h3>
      <ul className="flex gap-3 mb-6 flex-wrap">
        {project.stack.map((tech, index) => (
          <li
            key={index}
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
          >
            {tech}
          </li>
        ))}
      </ul>

      <h3 className="text-2xl font-semibold mb-2">Challenges Faced</h3>
      <p className="mb-6">{project.challenges}</p>

      <h3 className="text-2xl font-semibold mb-2">Potential Improvements</h3>
      <p className="mb-6">{project.improvements}</p>

      <div className="flex gap-4 mb-6">
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Live Project
        </a>
        <a
          href={project.githubClient}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition"
        >
          GitHub Client Repo
        </a>
      </div>

      <Link to="/" className="text-blue-600 underline">
        ← Back to Projects
      </Link>
    </section>
  );
};

export default ProjectDetails;
