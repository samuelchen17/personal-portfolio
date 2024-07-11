import React from "react";
import Meteors from "../ui/meteors";

const About = () => {
  return (
    <div
      className="flex justify-center bg-gray-800 items-center py-12 min-h-[90svh]"
      id="about"
    >
      <div className="mx-auto p-4 max-w-screen-lg ">
        <h2 className="text-col2 text-4xl font-bold py-4 sm:text-left text-center">
          ABOUT ME
        </h2>
        <div className="text-white">
          <div>
            I am a highly motivated aspiring developer with a background in
            civil engineering, I aim to bring the problem solving skills and i
            aim to bring my I am a driven and enthusiastic aspiring software
            engineer with a strong foundation in civil engineering, which has
            honed my problem-solving abilities and keen attention to detail. My
            passion for software development fuels my desire to utilize my
            diverse skill set in contributing to innovative and impactful
            projects.
          </div>
          <div>
            I am excited to be part of a vibrant and dynamic environment that
            champions continuous learning and development while fostering
            professional growth within a positive and inclusive company culture.
            In my spare time you'll catch me down windy roads on my motorcycle.
          </div>
          <div>
            I am a highly motivated although my time my time as in the project
            management team has equipped me with the skills needed to work
            cohesively with people from different teams. I aim to bring my
            skills and expertise into this new field, my problem solving skills
            and acute thinking capabilities
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
