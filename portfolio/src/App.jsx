import Navbar from "./Components/Navbar";
import React from "react";
import Home from "./Components/Home";



function App() {
  return (
    <div>
      <Navbar />
      <section id="Home" className="h-screen bg-gray-100 pt-20 flex items-center justify-center">
        <h2 className="text-4xl font-bold">Welcome to My Portfolio</h2>
      </section>
      <section id="about" className="h-screen bg-gray-200 pt-20 flex items-center justify-center">
        <h2 className="text-4xl font-bold">About Me</h2>
      </section>
      <section id="projects" className="h-screen bg-gray-300 pt-20 flex items-center justify-center">
        <h2 className="text-4xl font-bold">Projects</h2>
      </section>
      <section id="contact" className="h-screen bg-gray-400 pt-20 flex items-center justify-center">
        <h2 className="text-4xl font-bold">Contact</h2>
      </section>
    </div>
  );
}

export default App;
