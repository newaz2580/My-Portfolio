import React from 'react';

const qualifications = [
  {
    title: "🎓 Master of Business Administration (MBA)",
    major: "Major in Finance",
    university: "World University of Bangladesh",
    cgpa: "3.56 out of 4.00",
    location: "📍 Avenue 6 & Lake Drive Road, Sector # 17/H, Uttara"
  },
  {
    title: "🎓 Bachelor of Business Administration (BBA)",
    major: "Major in Finance",
    university: "World University of Bangladesh",
    cgpa: "3.33 out of 4.00",
    location: "📍 Avenue 6 & Lake Drive Road, Sector # 17/H, Uttara"
  }
];

const Qualification = () => {
  return (
    <section id="qualification" className="  py-16 px-6">
      <div className="">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">
          Qualifications
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-5">
          {qualifications.map((q, index) => (
            <div
              key={index}
              className="bg-gray-200  shadow-md rounded-xl p-6"
            >
              {/* Degree Info */}
              <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-2">
                {q.title}
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300">{q.major}</p>
              <p className="text-gray-600 dark:text-gray-400">{q.university}</p>
              <p className="text-gray-500 dark:text-gray-400 mb-2">
                CGPA:{" "}
                <span className="font-medium text-blue-700 dark:text-blue-300">
                  {q.cgpa}
                </span>
              </p>

              {/* Location */}
              <p className="text-sm text-gray-600 dark:text-gray-400">{q.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
