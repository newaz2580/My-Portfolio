import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const qualifications = [
  {
    title: "🎓 Master of Business Administration (MBA)",
    major: "Major in Finance",
    university: "World University of Bangladesh",
    cgpa: "3.33 out of 4.00",
    location: "📍 Avenue 6 & Lake Drive Road, Sector # 17/H, Uttara"
  },
  {
    title: "🎓 Bachelor of Business Administration (BBA)",
    major: "Major in Finance",
    university: "World University of Bangladesh",
    cgpa: "3.56 out of 4.00",
    location: "📍 Avenue 6 & Lake Drive Road, Sector # 17/H, Uttara"
  }
];

const Qualification = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="qualification"
      className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
      
        <h2 className="text-5xl font-extrabold text-center text-blue-800 dark:text-blue-400 mb-16">
          Qualifications
        </h2>

       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {qualifications.map((q, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-2">
                {q.title}
              </h3>
              <p className="text-lg font-semibold text-gray-700 dark:text-white">{q.major}</p>
              <p className="text-gray-600 dark:text-gray-300">{q.university}</p>
              <p className="text-gray-500 dark:text-gray-400 mb-2">
                CGPA:{" "}
                <span className="font-medium text-blue-700 dark:text-blue-300">
                  {q.cgpa}
                </span>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{q.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
