import React, { useState } from "react";
import NavBar from "../components/Navbar/NavBar";
import NavModal from "../components/Navbar/NavModal";
import { AnimatePresence } from "framer-motion";
import resume from "../../public/resume/resume.jpg";

const Resume = () => {
  const [navModal, setNavModal] = useState(false);
  return (
    <div>
      <NavBar navModal={navModal} setNavModal={setNavModal} />
      <AnimatePresence initial={false} onExitComplete={() => null}>
        {navModal && <NavModal setNavModal={setNavModal} navModal={navModal} />}
      </AnimatePresence>
      <div className="h-20 bg-colbg" />

      <div className="flex flex-col justify-center items-center h-screen bg-[url(assets/background/heroBg.jpg)] bg-cover bg-center">
        <h2 className="text-col2 text-4xl font-bold py-4 sm:text-left text-center">
          Resume
        </h2>

        <img src={resume} />
      </div>
    </div>
  );
};

export default Resume;
