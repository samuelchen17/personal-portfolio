import React, { useState } from "react";
import NavBar from "../components/Navbar/NavBar";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Contact from "../components/Contact";
import Portfolio from "../components/Projects/Portfolio";
import Home from "../components/Home/Home";
import Footer from "../components/Footer";
import { AnimatePresence } from "framer-motion";
import NavModal from "../components/Navbar/NavModal";

const HomePage = () => {
  const [navModal, setNavModal] = useState(false);
  return (
    <div className="">
      <AnimatePresence initial={false} onExitComplete={() => null}>
        {navModal && <NavModal setNavModal={setNavModal} navModal={navModal} />}
      </AnimatePresence>
      <NavBar navModal={navModal} setNavModal={setNavModal} />
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
