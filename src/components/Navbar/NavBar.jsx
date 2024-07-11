import React, { useState } from "react";
import { navLinks } from "./NavLinks";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import ScrollToLink from "../common/ScrollToLink";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const NavBar = ({ navModal, setNavModal }) => {
  const [hideNav, setHideNav] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous) {
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
      <div className="flex items-center w-full justify-between wrapperSmall">
        <h1 className="text-white">SCDEV</h1>
        <div>
          <ul className="sm:flex justify-end gap-4 hidden">
            {navLinks.map(({ link, id, offset }) => (
              <li key={id}>
                <ScrollToLink to={link} offset={offset}>
                  {link}
                </ScrollToLink>
              </li>
            ))}

            <Link to="/resume">
              <button className="bg-col2 py-2 px-2 rounded-full">Resume</button>
            </Link>
          </ul>
          <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <IoMenu
              className="sm:hidden flex text-white"
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
