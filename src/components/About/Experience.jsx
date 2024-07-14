import React from "react";
import { experiences } from "./experiences";
import { MdOutlineWork } from "react-icons/md";

const Experience = () => {
  return (
    <>
      <h2 className="text-col2 text-4xl font-bold py-4 sm:text-left text-center uppercase">
        Experience
      </h2>
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
            <ul className="list-disc pl-20 text-xl py-2">
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
