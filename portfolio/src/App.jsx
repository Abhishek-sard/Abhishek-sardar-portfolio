import Navbar from "./Components/Navbar";
import React from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Project";
import Contact from "./Components/Contact";



function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <About/>
      <Projects/>
      <Contact/>


    </div>
  );
}

export default App;
