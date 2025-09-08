import Navbar from "./Components/Navbar";
import React from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Project";



function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <About/>
      <Projects/>


    </div>
  );
}

export default App;
