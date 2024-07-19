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
import { useNavModal } from "../components/hooks/NavModalContext";
import PreLoader from "../components/PreLoader";

const HomePage = () => {
  const { navModal, setNavModal } = useNavModal();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasVisitedThisSession = sessionStorage.getItem(
      "hasVisitedThisSession"
    );

    if (!hasVisitedThisSession) {
      const loadTime = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("hasVisitedThisSession", "true");
      }, 1500);

      return () => clearTimeout(loadTime);
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <>
      <PreLoader loading={loading} />
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
    </>
  );
};

export default HomePage;
