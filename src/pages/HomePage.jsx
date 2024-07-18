import React, { useEffect, useState } from "react";
import NavBar from "../components/Navbar/NavBar";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Contact from "../components/Contact/Contact";
import Portfolio from "../components/Projects/Portfolio";
import Home from "../components/Home/Home";
import Footer from "../components/Footer";
import { AnimatePresence } from "framer-motion";
import NavModal from "../components/Navbar/NavModal";
import { useNavModal } from "../context/NavModalContext";
import { useIsLoaded } from "../context/LoadedContext";

const HomePage = () => {
  const { navModal, setNavModal } = useNavModal();
  // const { loaded, setIsLoaded } = useIsLoaded();

  // useEffect(() => {
  //   setIsLoaded(true);
  // }, []);

  return (
    <div className="">
      <AnimatePresence initial={false} onExitComplete={() => null}>
        {navModal && <NavModal setNavModal={setNavModal} navModal={navModal} />}
      </AnimatePresence>
      <NavBar navModal={navModal} setNavModal={setNavModal} />
      <div className="h-20 bg-colbg" />
      <Home />
      <About />
      <div className="h-20 bg-gradient-to-b from-gray-950 to-col12" />
      <Skills />
      <div className="h-20 bg-gradient-to-b from-col12 to-gray-950" />
      <Portfolio />
      <div className="h-20 bg-gradient-to-b from-gray-950 to-col12" />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
