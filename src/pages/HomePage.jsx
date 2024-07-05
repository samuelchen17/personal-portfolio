import React from "react";
import NavBar from "../components/Navbar/NavBar";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Contact from "../components/Contact";
import Portfolio from "../components/Projects/Portfolio";
import Home from "../components/Home/Home";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
