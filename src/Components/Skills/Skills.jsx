import React, { useEffect } from "react";
import {
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCss3Alt,
  FaHtml5,
  FaGitAlt,
  FaServer,
  FaCode,
  FaTerminal,       
} from "react-icons/fa";
import { SiFirebase, SiPostman } from "react-icons/si";  
import AOS from "aos";
import "aos/dist/aos.css";

const circleRadius = 32;
const circumference = 2 * Math.PI * circleRadius;

const SkillCircle = ({ percent = 90, color, Icon }) => {
  const strokeDashoffset = circumference * (1 - percent / 100);

  return (
    <svg
      className="w-20 h-20"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="40"
        cy="40"
        r={circleRadius}
        stroke="#e2e8f0"
        strokeWidth="8"
      />
      <circle
        cx="40"
        cy="40"
        r={circleRadius}
        stroke={color}
        strokeWidth="8"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        transform="rotate(-90 40 40)"
        style={{ transition: "stroke-dashoffset 0.6s ease" }}
      />
      <foreignObject x="20" y="20" width="40" height="40">
        <div className="w-10 h-10 flex items-center justify-center" style={{ color }}>
          <Icon size={36} />
        </div>
      </foreignObject>
    </svg>
  );
};

const categorizedSkills = {
  Frontend: [
    { name: "JavaScript", icon: FaJsSquare, color: "#f7df1e" },
    { name: "React", icon: FaReact, color: "#61dafb" },
    { name: "CSS3", icon: FaCss3Alt, color: "#2965f1" },
    { name: "HTML5", icon: FaHtml5, color: "#e44d26" },
  ],
  Backend: [
    { name: "Node.js", icon: FaNodeJs, color: "#68a063" },
    { name: "MongoDB", icon: FaDatabase, color: "#4db33d" },
    { name: "Express.js", icon: FaServer, color: "#000000" },
    { name: "Firebase", icon: SiFirebase, color: "#ffca28" },
  ],
  Tools: [
    { name: "Git", icon: FaGitAlt, color: "#f34f29" },
    { name: "Clean Code", icon: FaCode, color: "#4a5568" },     
    { name: "Terminal", icon: FaTerminal, color: "#333333" },
    { name: "Postman", icon: SiPostman, color: "#ff6c37" },    
  ],
};

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="skills"
      className="w-full px-6 py-20 bg-gray-100 dark:bg-gray-800 text-gray-800"
    >
      <h2 className="text-5xl font-extrabold text-center text-blue-800 dark:text-blue-400 mb-16">
        My Skills
      </h2>

      {Object.entries(categorizedSkills).map(([category, skills], idx) => (
        <div key={category} className="mb-16 max-w-7xl mx-auto">
          <h3
            className="text-3xl font-bold text-blue-700 dark:text-blue-300 mb-8"
            data-aos="fade-right"
            data-aos-delay={idx * 200}
          >
            {category}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {skills.map(({ name, icon: Icon, color }, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <SkillCircle color={color} Icon={Icon} />
                <h4 className="text-lg font-semibold text-gray-700 dark:text-white text-center">
                  {name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
