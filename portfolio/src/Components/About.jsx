import React from "react";
import AboutImage from '../assets/NOVA logo.png'

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-white px-6 md:px-20 py-20 gap-16"
    >
      {/* Section Heading */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-800">
          About <span className="text-indigo-600">Me</span>
        </h2>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          Hello! I’m <span className="font-semibold">Abhishek Sardar</span>, a
          passionate <span className="text-indigo-600">MERN Stack Developer</span> 
          who loves creating modern, responsive, and user-friendly web applications.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={AboutImage}
            alt="About Me"
            className="w-72 h-72 md:w-96 md:h-96 rounded-full shadow-lg object-cover object-top border-4 border-indigo-600"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <p className="text-lg text-gray-600 leading-relaxed">
            I enjoy turning ideas into reality using code. My main focus is on 
            creating seamless user experiences, writing clean code, and 
            continuously learning new technologies to improve my skills.
          </p>

          {/* Experience Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-indigo-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-600">Experience</h3>
              <p className="mt-2 text-gray-700">
                2+ years of experience building web applications using React, Node.js, MongoDB, and Express.
              </p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-600">Education</h3>
              <p className="mt-2 text-gray-700">
                Student of Bachelor in Computer Application(BCA), with Web Development.
              </p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-600">Projects</h3>
              <p className="mt-2 text-gray-700">
                Developed multiple full-stack projects using the MERN stack, including e-commerce apps and portfolio websites.
              </p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-600">Skills</h3>
              <p className="mt-2 text-gray-700">
                React, Node.js, Express, MongoDB, Tailwind CSS, JavaScript, HTML, CSS, Git, REST APIs.
              </p>
            </div>
          </div>

          <a
            href="#projects"
            className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition mt-6"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default About; 

