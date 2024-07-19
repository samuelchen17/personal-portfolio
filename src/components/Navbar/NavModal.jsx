import { Link } from "react-router-dom";
import { navLinks } from "./NavLinks";
import ScrollToLink from "../common/ScrollToLink";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { socialLinks } from "../Socials/socialLinks";

const slideIn = {
  initial: { x: "100vw", opacity: 0 },
  animate: {
    x: "0",
    opacity: 1,
    transition: { type: "tween", duration: 0.4, ease: "easeOut" },
  },
  exit: {
    x: "100vw",
    opacity: 0,
    transition: { type: "tween", duration: 0.2, ease: "easeIn" },
  },
};

const NavModal = ({ setNavModal, navModal }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-90 z-50 justify-center items-center"
      onClick={(event) => event.stopPropagation()}
      variants={slideIn}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.button
        className="fixed right-3 top-3"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <IoMdClose
          className="text-white hover:text-col2"
          size={50}
          onClick={() => setNavModal(false)}
        />
      </motion.button>
      <div className="flex justify-center flex-col items-center gap-4 text-white h-svh">
        {navLinks.map(({ link, id, offset }) => (
          <div key={id} onClick={() => setNavModal(!navModal)}>
            <ScrollToLink to={link} offset={offset}>
              <motion.button
                className="uppercase font-semibold text-2xl hover:text-col2"
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.9 }}
              >
                {link}
              </motion.button>
            </ScrollToLink>
          </div>
        ))}
        <div className="">
          <Link to="/resume">
            <motion.button
              className="bg-col2 py-2 px-4 rounded-md font-semibold uppercase text-white shadow-md hover:text-col2 hover:bg-white text-2xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setNavModal(!navModal)}
            >
              Resume
            </motion.button>
          </Link>
        </div>
        <div className="flex justify-center items-center gap-8">
          {socialLinks.map(({ title, href, icon }) => (
            <div key={title}>
              <motion.button
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
              >
                <a
                  href={href}
                  target="_blank"
                  className="flex flex-col justify-center items-center gap-1 hover:text-col2"
                >
                  {icon}
                </a>
              </motion.button>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default NavModal;
