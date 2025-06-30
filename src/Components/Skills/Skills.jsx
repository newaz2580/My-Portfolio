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
} from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";

const skills = [
  { name: "JavaScript", icon: FaJsSquare, color: "#f7df1e", percent: 90 },
  { name: "React", icon: FaReact, color: "#61dafb", percent: 85 },
  { name: "Node.js", icon: FaNodeJs, color: "#68a063", percent: 80 },
  { name: "MongoDB", icon: FaDatabase, color: "#4db33d", percent: 75 },
  { name: "CSS3", icon: FaCss3Alt, color: "#2965f1", percent: 80 },
  { name: "HTML5", icon: FaHtml5, color: "#e44d26", percent: 85 },
  { name: "Git", icon: FaGitAlt, color: "#f34f29", percent: 70 },
  { name: "Firebase", icon: SiFirebase, color: "#ffca28", percent: 65 },
  { name: "Express.js", icon: FaServer, color: "#000000", percent: 75 },
  { name: "Clean Code", icon: FaCode, color: "#4a5568", percent: 90 },
];

const circleRadius = 32;
const circumference = 2 * Math.PI * circleRadius;

const SkillCircle = ({ percent, color, Icon }) => {
  const strokeDashoffset = circumference * (1 - percent / 100);

  return (
    <svg
      className="w-20 h-20"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="40" cy="40" r={circleRadius} stroke="#e2e8f0" strokeWidth="8" />
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

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="skills"
      className="w-full px-6 py-20 bg-gradient-to-br from-gray-100 to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <h2 className="text-5xl font-extrabold text-center text-blue-800 dark:text-blue-400 mb-16">
        My Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-10 max-w-7xl mx-auto">
        {skills.map(({ name, icon: Icon, color, percent }, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <SkillCircle percent={percent} color={color} Icon={Icon} />
            <h3 className="text-lg font-semibold text-gray-700 dark:text-white text-center">
              {name}
            </h3>
            <p
              className="text-sm font-bold px-3 py-1 rounded-full text-white"
              style={{ backgroundColor: color }}
            >
              {percent}%
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
