import React from "react";
import { MdOutlineWork } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";

import Experience from "./Experience";
import SectionHeading from "../design/ui-styling/SectionHeading";

const About = () => {
  return (
    <section
      className="flex-col justify-center items-center py-12 min-h-[90svh] bg-gray-950"
      id="about"
    >
      <div className="mx-auto p-4 max-w-screen-lg ">
        <SectionHeading>About me</SectionHeading>
        <div className="text-white flex flex-col text-opacity-50 gap-4 sm:text-2xl text-xl">
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
        <div className="pt-12">
          <Experience />
        </div>
        <div className="pt-12">
          <SectionHeading>education</SectionHeading>
          <div className="text-opacity-50 text-white py-4">
            <div className="flex items-center gap-4">
              <div className="bg-col1 py-3 px-3 rounded-full">
                <FaGraduationCap className="text-white" size={40} />
              </div>
              <div>
                <p className="text-2xl font-semibold text-white">
                  University of Auckland
                </p>
                <p>
                  Bachelor of Engineering (Honours), Civil and Environmental
                  Engineering
                </p>
                <p>Graduated: 2021</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-12">
          <SectionHeading>courses</SectionHeading>

          <div className="text-opacity-50 text-white py-4">
            <div className="flex items-center gap-4">
              <div className="bg-col1 py-3 px-3 rounded-full">
                <FaGraduationCap className="text-white" size={40} />
              </div>

              <div>
                <p className="text-2xl font-semibold text-white">HavardX</p>
                <p>CS50: Introduction to Computer Science</p>
                <p>Completed: 2024</p>
              </div>
            </div>
          </div>

          <div className="text-opacity-50 text-white py-4">
            <div className="flex items-center gap-4">
              <div className="bg-col1 py-3 px-3 rounded-full">
                <FaGraduationCap className="text-white" size={40} />
              </div>
              <div>
                <p className="text-2xl font-semibold text-white">
                  FreeCodeCamp
                </p>
                <p>
                  JavaScript Algorithms and Data Structures, Responsive Web
                  Design
                </p>
                <p>Completed: 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
