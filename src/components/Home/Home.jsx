import React from "react";

const Home = () => {
  return (
    <div className=" h-dvh bg-gray-900 text-white flex items-center justify-center">
      <div className="flex flex-col">
        <div className="text-sky-400">Hello, I'm Sam.</div>
        <div className="">I'm a front-end developer.</div>
        <div className="flex gap-4">
          <button className="bg-blue-400 rounded-full">Projects</button>
          <button className="bg-blue-400 rounded-full">resume</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
