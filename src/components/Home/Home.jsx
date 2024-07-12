import React from "react";
import { Link } from "react-router-dom";
import ScrollToLink from "../common/ScrollToLink";
import FlipWords from "../ui/flip-words";
import { motion } from "framer-motion";
import { MdArrowRight } from "react-icons/md";
import { socialLinks } from "../Socials/socialLinks";

const Home = () => {
  const words = ["Former Civil Engineer", "Software Engineer"];

  return (
    <section
      className="h-[90svh] min-h-[600px] bg-col1 text-white flex items-center justify-center flex-col pt-16"
      id="home"
    >
      <div className="flex flex-col min-w-[300px]">
        <div className="text-white">Hello, I'm</div>
        <div className="flex-wrap">
          <div className="text-white text-4xl font-semibold mr-4">Samuel</div>
          <div className="text-col text-col2 text-4xl font-semibold">Chen</div>
        </div>
        <FlipWords words={words} className="text-white text-xl" />
        <div className="">I'm a front-end developer.</div>
        <div className="flex gap-4 my-2">
          <ScrollToLink to="projects">
            <motion.button
              className="bg-col2 py-2 px-4 rounded-md font-semibold uppercase text-white flex items-center justify-center shadow-md"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              projects
              {/* <MdArrowRight className="hidden sm:flex" size={25} /> */}
            </motion.button>
          </ScrollToLink>
          <Link to="/resume">
            <motion.button
              className="bg-col2 py-2 px-4 rounded-md font-semibold uppercase text-white sm:hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Resume
            </motion.button>
          </Link>
        </div>
        <div className="sm:flex items-center gap-2 hidden">
          {socialLinks.map(({ title, href, icon }) => (
            <div key={title}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <a
                  href={href}
                  target="_blank"
                  className="flex flex-col justify-center items-center gap-1"
                >
                  {icon}
                </a>
              </motion.button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
