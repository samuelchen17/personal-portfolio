import React, { useState } from "react";
import NavBar from "../components/Navbar/NavBar";
import NavModal from "../components/Navbar/NavModal";
import Footer from "../components/Footer";
import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ErrorPage = () => {
  const [navModal, setNavModal] = useState(false);
  return (
    <div className="h-dvh bg-col12 text-white">
      <NavBar navModal={navModal} setNavModal={setNavModal} />
      <AnimatePresence initial={false} onExitComplete={() => null}>
        {navModal && <NavModal setNavModal={setNavModal} navModal={navModal} />}
      </AnimatePresence>
      <div className="h-20 bg-colbg" />

      <div className="py-4 px-4 mx-auto flex flex-col gap-4 max-w-screen-lg">
        <h2 className="text-col2 text-9xl font-bold">404</h2>
        <p className="text-2xl">Page Not Found 😔</p>
        <Link to="/">
          <motion.button
            className="bg-col2 py-2 px-4 rounded-md font-semibold uppercase text-white shadow-md hover:bg-col11"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Home
          </motion.button>
        </Link>
      </div>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default ErrorPage;
