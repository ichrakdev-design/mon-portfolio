import React from "react";
import NetworkBackground from "./components/NetworkBackground/NetworkBackground";
import Navbar from "./layout/Navbar/Navbar";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";  // Section compétences
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

import "./App.css";

const App = () => {
  return (
    <>
      <NetworkBackground />
      <Navbar />

      <Home />
      <About />
      <Skills />      {/* Section Skills visible */}
      <Projects />
      <Contact />
    </>
  );
};

export default App;
