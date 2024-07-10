import React, { useState } from "react";
import NavBar from "../components/Navbar/NavBar";
import NavModal from "../components/Navbar/NavModal";
import { AnimatePresence } from "framer-motion";

const Resume = () => {
  const [navModal, setNavModal] = useState(false);
  return (
    <div>
      <NavBar navModal={navModal} setNavModal={setNavModal} />
      <AnimatePresence initial={false} onExitComplete={() => null}>
        {navModal && <NavModal setNavModal={setNavModal} navModal={navModal} />}
      </AnimatePresence>
      <div className="bg-red-600 h-dvh">Resume</div>
    </div>
  );
};

export default Resume;
