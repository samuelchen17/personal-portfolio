import React from "react";
import NavBar from "../components/NavBar";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Portfolio from "../components/Projects/Portfolio";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default HomePage;
