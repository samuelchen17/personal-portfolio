import React, { useState } from "react";
import { navLinks } from "./NavLinks";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import NavModal from "./NavModal";
import ScrollToLink from "../common/ScrollToLink";
import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

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
      className={`flex justify-between items-center h-[70px] sticky top-0 bg-sky-600 z-30 w-full`}
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hideNav ? "hidden" : "visible"}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div>
        <div>
          <h1>SCDEV</h1>
        </div>
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
              <button className="bg-blue-900 py-2 px-2 rounded-full">
                Resume
              </button>
            </Link>
          </ul>
          <div className="text-white">
            <IoMenu
              className="sm:hidden flex"
              onClick={() => setNavModal(!navModal)}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NavBar;
