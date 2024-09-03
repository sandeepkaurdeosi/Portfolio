import React from 'react';

const Education = () => {
  return (
    <section className="py-16 mt-12"> {/* Light teal background */}
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-extrabold  text-yellow-800  text-center mt-5 mb-12"> My Education</h2> {/* Dark teal for the main heading */}
        
        {/* College Education */}
        <div className=" shadow-lg rounded-lg p-8 mb-8 bg-slate-200 hover:scale-105 hover:cursor-pointer">
          <h3 className="text-2xl font-semibold text-[#004d40]">Bachelor of Technology (BTech) in Computer Science Engineering</h3> {/* Darker teal */}
          <p className="text-gray-800 mt-2">Bhai Gurdas Institute of Engineering & Technology , Sangrur</p> {/* Dark gray for text */}
          <p className="text-gray-600 mt-1">Expected Graduation: June 2026</p>

          <div className="mt-6">
            <h4 className="text-xl font-semibold text-[#004d40]">Relevant Coursework:</h4>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>Data Structures and Algorithms</li>
              <li>Web Development</li>
              <li>Database Management Systems</li>
              <li>Software Engineering</li>
            </ul>
          </div>

          <div className="mt-6">
            <h4 className="text-xl font-semibold text-[#004d40]">Achievements and Honors:</h4>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>1st position in 3rd Semester</li>
              <li>3rd position in 4th Semester</li>
            </ul>
          </div>

          
        </div>
        
        {/* Schooling */}
        <div className="bg-slate-200 hover:cursor-pointer hover:scale-105 shadow-lg rounded-lg p-8 mt-8">
          <h3 className="text-2xl font-semibold text-[#004d40]">Senior Secondary (12th)</h3> {/* Darker teal */}
          <p className="text-gray-800 mt-2">Sunam,Sangrur,Punjab</p> {/* Dark gray for text */}
          <p className="text-gray-600 mt-1">2022</p>

          <div className="mt-6">
            <h4 className="text-xl font-semibold text-[#004d40]">Relevant Coursework:</h4>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>Mathematics</li>
              <li>Physics</li>
              <li>Chemistry</li>
            </ul>
            <h4 className="text-xl font-semibold text-[#004d40] mt-6">Percentage:</h4>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>86%</li>
              </ul>
          </div>

          
        </div>
        <div className="bg-slate-200 hover:scale-105 hover:cursor-pointer shadow-lg rounded-lg p-8 mt-10">
          <h3 className="text-2xl font-semibold text-[#004d40]"> Secondary (10th)</h3> {/* Darker teal */}
          <p className="text-gray-800 mt-2">Sunam,Sangrur,Punjab</p> {/* Dark gray for text */}
          <p className="text-gray-600 mt-1">2020</p>

          <div className="mt-6">
            <h4 className="text-xl font-semibold text-[#004d40]">Relevant Coursework:</h4>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>Mathematics</li>
              <li>Physics</li>
              <li>Chemistry</li>
            </ul>
            <h4 className="text-xl font-semibold text-[#004d40] mt-6">Percentage:</h4>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>90%</li>
              </ul>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Education;
