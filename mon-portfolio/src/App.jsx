import React from "react";
import NetworkBackground from "./components/NetworkBackground/NetworkBackground";
import Navbar from "./layout/Navbar/Navbar";

import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

import "./App.css";

const App = () => {
  return (
    <>
      <NetworkBackground />
      <Navbar />

      <Home />
      <Projects />
      <About />
      <Contact />
    </>
  );
};

export default App;
