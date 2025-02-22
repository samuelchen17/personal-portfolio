import React, { useState } from "react";
import { navLinks } from "./NavLinks";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import ScrollToLink from "../common/ScrollToLink";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const NavBar = ({ navModal, setNavModal }) => {
  const [hideNav, setHideNav] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 100) {
      setHideNav(true);
    } else {
      setHideNav(false);
    }
  });

  return (
    <motion.div
      className="h-20 fixed bg-gray-900 z-30 w-full flex"
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hideNav ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className="flex items-center w-full justify-between mx-auto p-4 max-w-screen-2xl">
        <ScrollToLink to="home" offset={-70}>
          <h1 className="text-white font-bold text-2xl hover:cursor-pointer">
            SCDEV
          </h1>
        </ScrollToLink>
        <div className="flex">
          <ul className="sm:flex gap-4 hidden text-white items-center">
            {navLinks.map(({ link, id, offset }) => (
              <li key={id}>
                <motion.button
                  className="uppercase font-semibold hover:text-col2"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ScrollToLink to={link} offset={offset}>
                    {link}
                  </ScrollToLink>
                </motion.button>
              </li>
            ))}
            <Link to="/resume">
              <motion.button
                className="bg-col2 py-2 px-4 rounded-md font-semibold uppercase text-white shadow-md hover:text-col2 hover:bg-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Resume
              </motion.button>
            </Link>
          </ul>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <MdMenu
              className="sm:hidden flex text-white hover:text-col2"
              onClick={() => setNavModal(!navModal)}
              size={40}
            />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default NavBar;
