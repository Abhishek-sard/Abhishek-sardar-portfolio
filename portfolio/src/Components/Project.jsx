import React from "react";
import gym from '../assets/gym.png';
import sajiloTicket from '../assets/sajilo.png';
import ecommerce from '../assets/ecommerce.png';

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: "E-commerce App",
      description: "A full-stack e-commerce app built with MERN stack.",
      image: ecommerce,  
      liveLink: "https://yourliveproject.com",
      githubLink: "https://github.com/yourusername/project1",
    },
    {
      id: 2,
      title: "Gym Website",
      description: "My personal portfolio website built with React and TailwindCSS.",
      image: gym,  
      liveLink: "https://yourportfolio.com",
      githubLink: "https://github.com/Abhishek-sard/E-Commerce-App",
    },
    {
      id: 3,
      title: "Sajilo Ticket Booking",
      description: "Ticket booking system using HTML, CSS, JS, PHP, MySQL.",
      image: sajiloTicket,  
      liveLink: "https://sajiloticket.com",
      githubLink: "https://github.com/Abhishek-sard/Sajilo-Ticket",
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-gray-100 px-6 md:px-20 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">
          My <span className="text-indigo-600">Projects</span>
        </h2>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          Here are some of the projects I’ve worked on recently. Click to view live or check the code on GitHub.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectList.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <div className="mt-4 flex space-x-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
                >
                  Live
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
