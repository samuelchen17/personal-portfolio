import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollToLink from "../common/ScrollToLink";
import FlipWords from "../design/ui/flip-words";
import { motion } from "framer-motion";
import { MdArrowRight } from "react-icons/md";
import { socialLinks } from "../Socials/socialLinks";
import bgImg from "../../assets/background/heroBg.jpg";

const Home = () => {
  const words = ["Former Civil Engineer", "Software Engineer"];

  return (
    <section
      style={{ backgroundImage: `url(${bgImg})` }}
      className="relative bg-center h-[90svh] min-h-[600px] bg-black bg-cover text-white flex items-center justify-center flex-col"
      id="home"
    >
      <div className="z-10">
        <div className="flex flex-col min-w-[300px] px-4 pb-28 pt-4 max-w-[800px]">
          <div className="text-white md:text-3xl text-2xl">Hello, I'm</div>
          <div className="flex-wrap">
            <div className="text-white text-6xl font-semibold mr-4 md:text-9xl">
              Samuel
            </div>
            <div className="text-col text-col2 text-6xl font-semibold  md:text-9xl">
              Chen
            </div>
          </div>
          <FlipWords
            words={words}
            className="text-white text-xl md:text-4xl "
          />
          <div className="md:text-2xl">
            I'm passionate about crafting digital solutions and bringing
            innovative ideas to life through code!
          </div>
          <div className="flex gap-4 my-2">
            <ScrollToLink to="projects">
              <motion.button
                className="bg-col2 py-2 px-4 rounded-md font-semibold uppercase text-white shadow-md hover:text-col2 hover:bg-white flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                projects
                {/* <MdArrowRight className="hidden sm:flex" size={25} /> */}
              </motion.button>
            </ScrollToLink>
            <Link to="/resume">
              <motion.button
                className="bg-col2 py-2 px-4 rounded-md font-semibold uppercase text-white shadow-md hover:text-col2 hover:bg-white sm:hidden"
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
      </div>
    </section>
  );
};

export default Home;
