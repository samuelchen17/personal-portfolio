import React from "react";
import { SparklesCore } from "../ui/sparkles";
import Meteors from "../ui/meteors";
import { Link } from "react-router-dom";
import ScrollToLink from "../common/ScrollToLink";
import FlipWords from "../ui/flip-words";

const Home = () => {
  const words = ["Former Civil Engineer", "Current Software Engineer"];

  return (
    <div
      className="h-dvh bg-gray-800 text-white flex items-center justify-center flex-col relative"
      id="home"
    >
      {/* <div className="overflow-hidden">
        <Meteors number={5} />
      </div> */}

      <div className="flex flex-col">
        <div className="text-sky-400">Hello, I'm Sam.</div>

        <FlipWords words={words} className="text-white" />

        <br />
        <div className="">I'm a front-end developer.</div>
        <div className="flex gap-4">
          <div className="bg-blue-400 rounded-full py-2 px-4 outline outline-blue-400">
            <ScrollToLink to="projects" offset={-70}>
              Projects
            </ScrollToLink>
          </div>
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
