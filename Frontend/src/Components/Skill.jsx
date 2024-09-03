
import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaLaptopCode } from 'react-icons/fa';

const Skills = () => {
  return (
    <section className="mt-20 py-16">
      <div className="container mx-auto px-6 ">
        <h2 className="text-5xl font-extrabold text-teal-600 text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-1  gap-10">
          
          <div className="bg-sky-100 shadow-lg rounded-lg p-8 transition transform hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="text-3xl font-semibold mb-6 text-pink-500">Frontend Development</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2 text-xl ">
                <FaHtml5 className="text-orange-600" />
                <span><strong>Languages:</strong> HTML5, CSS3, JavaScript (ES6+)</span>
              </li>
              <li className="flex items-center space-x-2 text-xl">
                <FaReact className="text-blue-500" />
                <span><strong>Frameworks & Libraries:</strong> React.js</span>
              </li>
              <li className="flex items-center space-x-2 text-xl">
                <FaCss3Alt className="text-blue-600" />
                <span><strong>Styling:</strong> Tailwind CSS, Bootstrap</span>
              </li>
              <li className="flex items-center space-x-2 text-xl">
                <FaLaptopCode className="text-green-500" />
                <span><strong>Build Tools:</strong> Vite</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-sky-100 shadow-lg rounded-lg p-8 transition transform hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="text-3xl font-semibold mb-6 text-pink-500">Version Control</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2 text-xl">
                <FaGitAlt className="text-red-600" />
                <span>Git</span>
              </li>
              <li className="flex items-center space-x-2 text-xl">
                <FaGithub className="text-gray-800" />
                <span>GitHub</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-sky-100 shadow-lg rounded-lg p-8 transition transform hover:-translate-y-2 hover:shadow-2xl ">
            <h3 className="text-3xl font-semibold mb-6 text-pink-500 ">Web Development Tools</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2 text-xl">
                <FaLaptopCode className="text-green-500" />
                <span><strong>IDE/Editor:</strong> Visual Studio Code</span>
              </li>
              <li className="flex items-center space-x-2 text-xl">
                <FaLaptopCode className="text-green-500" />
                <span><strong>Package Managers:</strong> npm, Yarn</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-sky-100 shadow-lg rounded-lg p-8 transition transform hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="text-3xl font-semibold mb-6 text-pink-500">Responsive Design</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2 text-xl">
                <FaLaptopCode className="text-green-500" />
                <span>Flexbox</span>
              </li>
              <li className="flex items-center space-x-2 text-xl">
                <FaLaptopCode className="text-green-500" />
                <span>CSS Grid</span>
              </li>
              <li className="flex items-center space-x-2 text-xl">
                <FaLaptopCode className="text-green-500" />
                <span>Media Queries</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-sky-100 shadow-lg rounded-lg p-8 transition transform hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="text-3xl font-semibold mb-6 text-pink-500">Other Skills</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2 text-xl">
                <FaLaptopCode className="text-green-500" />
                <span><strong>Problem-Solving:</strong> Algorithms, Data Structures</span>
              </li>
              <li className="flex items-center space-x-2 text-xl">
                <FaLaptopCode className="text-green-500" />
                <span><strong>Testing:</strong> Unit Testing (e.g., Jest)</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
