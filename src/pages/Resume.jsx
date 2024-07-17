import React, { useState } from "react";
import NavBar from "../components/Navbar/NavBar";
import NavModal from "../components/Navbar/NavModal";
import { AnimatePresence } from "framer-motion";
import resume from "../../public/resume/resume.jpg";
import resumePdf from "../../public/resume/resume.pdf";
import { motion } from "framer-motion";
import { MdDownload } from "react-icons/md";
import { PiDnaFill } from "react-icons/pi";

const Resume = () => {
  const [navModal, setNavModal] = useState(false);
  return (
    <div>
      <NavBar navModal={navModal} setNavModal={setNavModal} />
      <AnimatePresence initial={false} onExitComplete={() => null}>
        {navModal && <NavModal setNavModal={setNavModal} navModal={navModal} />}
      </AnimatePresence>
      <div className="h-20 bg-colbg" />
      <div className="flex flex-col justify-center items-center bg-[url(assets/background/heroBg.jpg)] bg-cover bg-center min-h-svh">
        <motion.a
          className="bg-col2 py-2 px-4 rounded-md font-semibold uppercase text-white shadow-md hover:bg-col11 flex items-center justify-center my-6"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href={resumePdf}
          download={true}
          target="_blank"
        >
          download <MdDownload size={25} />
        </motion.a>

        <img src={resume} />
      </div>
    </div>
  );
};

export default Resume;
