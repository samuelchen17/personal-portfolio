import React from "react";
import { MdOutlineWork } from "react-icons/md";

import Experience from "./Experience";

const About = () => {
  return (
    <section
      className="flex-col justify-center bg-gray-800 items-center py-12 min-h-[90svh]"
      id="about"
    >
      <div className="mx-auto p-4 max-w-screen-lg ">
        <h2 className="text-col2 text-4xl font-bold py-4 sm:text-left text-center">
          ABOUT ME
        </h2>
        <div className="text-white flex flex-col text-opacity-40 gap-4 text-2xl">
          <p className="">
            I am a highly motivated{" "}
            <span className="text-white"> aspiring developer</span> with a
            background in civil engineering. My experience as a project manager
            has equipped me with problem-solving and critical thinking skills
            which I aim to bring into the software field.
          </p>
          <p className="">
            During the final months of my graduate program, I joined the
            <span className="text-white"> DevOps Engineering Team</span>, which
            provided me with invaluable exposure to the software development
            field. This experience solidified my decision to pursue a career in
            software engineering.
          </p>

          <p className="">
            I have experience in
            <span className="text-white">
              {" "}
              front-end development (React, JavaScript, HTML, CSS){" "}
            </span>
            and I'm currently looking into{" "}
            <span className="text-white">
              back-end development (Node.js, MongoDB, SQL)
            </span>
            . I continuously strive to expand my knowledge by learning new
            technologies and applying these skills to enhance my projects.
          </p>
        </div>
        <div>
          <h2 className="text-col2 text-4xl font-bold py-4 sm:text-left text-center uppercase">
            Experience
          </h2>
          <div className="text-white">
            <Experience />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
