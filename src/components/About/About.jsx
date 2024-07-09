import React from "react";
import Meteors from "../ui/meteors";
import { navBarHeight } from "../../config/config";

const About = () => {
  return (
    <div
      className={`bg-blue-950 h-dvh text-white relative pt-${navBarHeight}`}
      id="about"
    >
      <div>
        <h1>ABOUT</h1>
        <div>
          I am a driven and enthusiastic aspiring software engineer with a
          strong foundation in civil engineering, which has honed my
          problem-solving abilities and keen attention to detail. My passion for
          software development fuels my desire to utilize my diverse skill set
          in contributing to innovative and impactful projects.
        </div>
        <div>
          I am excited to be part of a vibrant and dynamic environment that
          champions continuous learning and development while fostering
          professional growth within a positive and inclusive company culture.
          In my spare time you'll catch me down windy roads on my motorcycle.
        </div>
      </div>
    </div>
  );
};

export default About;
