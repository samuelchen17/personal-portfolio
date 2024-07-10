import React from "react";
import { SparklesCore } from "../ui/sparkles";
import Meteors from "../ui/meteors";
import { Link } from "react-router-dom";
import ScrollToLink from "../common/ScrollToLink";
import FlipWords from "../ui/flip-words";
import { motion } from "framer-motion";

const Home = () => {
  const words = ["Civil Engineer", "Software Engineer"];

  return (
    <div
      className="h-[90dvh] min-h-[600px] bg-col1 text-white flex items-center justify-center flex-col"
      id="home"
    >
      {/* <div className="overflow-hidden">
        <Meteors number={5} />
      </div> */}

      <div className="flex flex-col min-w-[300px]">
        <div className="text-white">Hello, I'm</div>
        <div className="flex-wrap">
          <div className="text-white text-4xl font-semibold mr-4">Samuel</div>
          <div className="text-col text-4xl font-semibold">Chen</div>
        </div>
        <FlipWords words={words} className="text-white text-xl" />
        <div className="">I'm a front-end developer.</div>
        <div className="flex gap-4">
          <ScrollToLink to="projects" offset={-70}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-col2 rounded-md py-2 px-4 capitalize"
            >
              projects
            </motion.button>
          </ScrollToLink>
          <Link to="/resume">
            <button className="bg-col2 rounded-md">resume</button>
          </Link>
        </div>
      </div>
      {/* <div className="w-[40rem] h-40 relative overflow-hidden">
        Gradients
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
        <div className="absolute inset-0 w-full h-full bg-gray-900 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div> */}
    </div>
  );
};

export default Home;
