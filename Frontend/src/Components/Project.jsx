import React from 'react';

const projects = [
  {
    title: "Bookstore Website",
    description: "A fully responsive online bookstore where users can browse, search, and purchase books across various genres.",
    technologies: "HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS, Vite, Local Storage",
    features: [
      "Dynamic book catalog with real-time search and filter functionality.",
      "User authentication for personalized book recommendations.",
      "Integration with a mock API for book data.",
      "Responsive design ensuring accessibility across devices."
    ],
    image: "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=360", 
    liveDemo: "#",
    sourceCode: "#",
  },
  {
    title: "Personal Portfolio",
    description: "A professional portfolio website showcasing my skills, projects, and experience as a frontend developer.",
    technologies: "React.js, Tailwind CSS, Vite",
    features: [
      "Interactive navigation bar and smooth scrolling animations.",
      "A detailed 'About Me' section with a custom-designed 'My Approach' part.",
      "My Skills section showcasing my technical expertise with dynamic icons.",
      "Project showcase with descriptions, technologies used, and links to source code."
    ],
    image:"https://www.cdnlogo.com/logos/p/93/portfolio.svg?w=360",
    liveDemo: "#",
    sourceCode: "#",
  },
  {
    title: "Tic-Tac-Toe Game",
    description: "A classic Tic-Tac-Toe game with a minimalist design, allowing two players to compete against each other.",
    technologies: "HTML5, CSS3, JavaScript",
    features: [
      "Real-time gameplay with interactive UI.",
      "Score tracking and game reset functionality.",
      "Simple and clean design for an intuitive user experience."
    ],
    image:"https://seeklogo.com/images/T/tic-tac-toe-logo-0D39D7E421-seeklogo.com.png?w=360",
    liveDemo: "#",
    sourceCode: "#",
  },
  {
    title: "Rock Paper Scissors Game",
    description: "A browser-based Rock Paper Scissors game where users can play against the computer.",
    technologies: "HTML5, CSS3, JavaScript",
    features: [
      "Interactive gameplay with visual feedback on each choice.",
      "Score tracking for both the player and the computer.",
      "Animated transitions between rounds."
    ],
    image:"https://img.freepik.com/premium-vector/hands-playing-rock-paper-scissors-game-flat-design-style-vector-illustration_540284-598.jpg?w=360",
    liveDemo: "#",
    sourceCode: "#",
  },
];

const Projects = () => {
  return (
    <section className="py-16 mt-20">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center mb-16 text-red-500"> My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <div className="relative">
                <img
                 src={project.image || `https://via.placeholder.com/600x400?text=${encodeURIComponent(project.title)}`} 
                  alt={project.title}
                  className="w-full h-48 object-contain"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">{project.description}</p>
                <p className="mb-4 text-[#6a4c93]"><strong>Technologies Used:</strong> {project.technologies}</p>
                <ul className="mb-6 list-disc list-inside text-gray-600">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <div className="flex space-x-4">
                  <a
                    href={project.liveDemo}
                    className="bg-[#1f4068] text-white py-2 px-4 rounded-full transition hover:bg-[#6a4c93]"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.sourceCode}
                    className="bg-[#6a4c93] text-white py-2 px-4 rounded-full transition hover:bg-[#1f4068]"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
