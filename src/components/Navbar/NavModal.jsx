import { Link } from "react-router-dom";
import { navLinks } from "./NavLinks";
import ScrollToLink from "../common/ScrollToLink";
import { motion } from "framer-motion";

const slideIn = {
  hidden: { x: "100vw", opacity: 0 },
  visible: {
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
      className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-90 z-50 flex justify-center items-center"
      onClick={(event) => event.stopPropagation()}
      variants={slideIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="flex justify-center flex-col items-center gap-4 text-white">
        {navLinks.map(({ link, id, offset }) => (
          <div key={id} onClick={() => setNavModal(!navModal)}>
            <ScrollToLink to={link} offset={offset}>
              <motion.button
                className="uppercase font-semibold text-2xl"
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.9 }}
              >
                {link}
              </motion.button>
            </ScrollToLink>
          </div>
        ))}

        <Link to="/resume">
          <button className="bg-col2 text-white py-2 px-4 rounded-full font-semibold text-2xl">
            RESUME
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default NavModal;
