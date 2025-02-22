import React from "react";
import { experiences } from "./experiences";
import { MdOutlineWork } from "react-icons/md";
import SectionHeading from "../design/ui-styling/SectionHeading";

const Experience = () => {
  return (
    <>
      <SectionHeading>Experience</SectionHeading>
      <div className="text-white">
        {experiences.map(({ title, company, period, achievements }) => (
          <div className="text-opacity-40 text-white py-2" key={title}>
            <div className="flex items-center gap-4">
              <div className="bg-col1 py-3 px-3 rounded-full">
                <MdOutlineWork className="text-white" size={40} />
              </div>
              <div>
                <p className="text-2xl font-semibold text-white">{title}</p>
                <p>{company}</p>
                <p>{period}</p>
              </div>
            </div>
            <ul className="list-disc sm:pl-20 pl-6 text-xl py-2">
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default Experience;
