import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    id: 1,
    title: "Service Sharing",
    description: "A platform for users to share and request local services securely.",
    features: [
      "🔧 People can add services to offer",
      "🛒 Customers can browse and purchase services",
      "📢 Users can post related service requirements",
    ],
    stack: ["React", "Node.js", "MongoDB", "JWT", "Firebase", "Tailwind CSS"],
    live: "https://service-sharing-app.web.app/",
    githubClient: "https://github.com/newaz2580/service-sharing-app-clients",
    githubServer: "https://github.com/newaz2580/service-sharing-app-server",
    images: [
      "https://i.ibb.co/1JQzFSFy/Screenshot-24.png",
      "https://i.ibb.co/5xg0BchK/Screenshot-25.png",
      "https://i.ibb.co/v6D5vvr6/Screenshot-26.png",
    ],
    challenges: "Managing authentication and secure role-based access.",
    improvements: "Adding real-time chat and payment gateway integration."
  },
  {
    id: 2,
    title: "HobbyHub",
    description: "A social web app where users can create and join hobby groups.",
    features: [
      "📚 Users can create & manage hobby groups",
      "👥 Members can join, post and engage in group discussions",
      "🔔 Real-time updates and role-based controls",
    ],
    stack: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "Firebase"],
    live: "https://hobby-group-app.web.app",
    githubClient: "https://github.com/newaz2580/hobby-clients",
    githubServer: "https://github.com/newaz2580/hobby-server",
    images: [
      "https://i.ibb.co/SDWCv4tZ/Screenshot-27.png",
      "https://i.ibb.co/9Xy2z3b/Screenshot-28.png",
      "https://i.ibb.co/fY5r7NH4/Screenshot-29.png",
    ],
    challenges: "Implementing user roles and managing real-time data updates.",
    improvements: "Future group video support, calendar, and notifications."
  },
  {
    id: 3,
    title: "EventDiscovery",
    description: "An event hosting and discovery platform with user-friendly dashboards.",
    features: [
      "📅 Create & publish events with categories",
      "👥 Attendees can register and explore events",
      "📊 Admin panel to track users, events & registrations",
    ],
    stack: ["React", "Node.js", "MongoDB", "Express.js", "JWT", "Tailwind CSS"],
    live: "https://even-discovery-platform.web.app/",
    githubClient: "https://github.com/newaz2580/EventDiscovery",
    githubServer: "https://github.com/newaz2580/EventDiscovery",
    images: [
      "https://i.ibb.co/r29WnZWP/Screenshot-30.png",
      "https://i.ibb.co/Q7zwbS22/Screenshot-31.png",
      "https://i.ibb.co/YFSGpjzs/Screenshot-32.png",
    ],
    challenges: "Building responsive dashboards and managing order queues.",
    improvements: "Add push notifications and real-time rider tracking."
  }
];

const Projects = () => {
  const [openDetails, setOpenDetails] = useState(null);

  const toggleDetails = (id) => {
    setOpenDetails((prev) => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="bg-gradient-to-br from-gray-100 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20 px-6">
      <h2 className="text-5xl font-extrabold text-center text-blue-800 dark:text-blue-400 mb-16">
        Projects
      </h2>

      <div className="space-y-12 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden transition hover:shadow-2xl"
          >
            {/* Left: Image Slider */}
            <div className="md:w-1/2 w-full max-h-[400px]">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                loop
                className="h-full"
              >
                {project.images.map((src, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={src}
                      alt={`${project.title} ${idx + 1}`}
                      className="w-full h-[400px] object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Right: Content */}
            <div className="md:w-1/2 w-full p-8 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                {project.description}
              </p>

              {/* Feature List */}
              <ul className="mb-4 list-disc pl-6 text-gray-600 dark:text-gray-400">
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="mb-4">
                <strong className="block mb-2 text-lg text-gray-800 dark:text-gray-200">Tech Stack:</strong>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium select-none"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3 mt-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubClient}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-900 transition"
                >
                  Client Repo
                </a>
                <a
                  href={project.githubServer}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-900 transition"
                >
                  Server Repo
                </a>
                <button
                  onClick={() => toggleDetails(project.id)}
                  className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
                >
                  {openDetails === project.id ? "Hide Details" : "Details"}
                </button>
              </div>

              {/* Collapsible Details */}
              {openDetails === project.id && (
                <div className="mt-6 text-gray-700 dark:text-gray-300">
                  <p className="mb-2">
                    <strong>Challenges:</strong> {project.challenges}
                  </p>
                  <p className="mb-2">
                    <strong>Future Plans:</strong> {project.improvements}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
