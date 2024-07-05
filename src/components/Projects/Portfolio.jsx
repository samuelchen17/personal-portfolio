import React from "react";
import Project from "./Project";

const Portfolio = () => {
  return (
    <div className="h-dvh bg-yellow-500">
      <h1>Projects</h1>
      <div>
        <Project />
        <Project />
      </div>
    </div>
  );
};

export default Portfolio;
