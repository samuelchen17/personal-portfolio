import React from "react";
import { SparklesCore } from "../ui/sparkles";
import Meteors from "../ui/meteors";
import { navBarHeight } from "../../config/config";
import { Link } from "react-router-dom";
import ScrollToLink from "../ScrollToLink";

const Home = () => {
  return (
    <div
      className={`h-dvh bg-gray-900 text-white flex items-center justify-center flex-col relative pt-${navBarHeight}`}
      id="home"
    >
      {/* <div className="overflow-hidden">
        <Meteors number={5} />
      </div> */}

      <div className="flex flex-col">
        <div className="text-sky-400">Hello, I'm Sam.</div>
        <div className="">I'm a front-end developer.</div>
        <div className="flex gap-4">
          <ScrollToLink to="projects">
            <button className="bg-blue-400 rounded-full py-2 px-4 outline outline-blue-400">
              Projects
            </button>
          </ScrollToLink>
          <Link to="/resume">
            <button className="bg-blue-400 rounded-full">resume</button>
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
