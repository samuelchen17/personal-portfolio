import React from "react";
import { experiences } from "./experiences";
import { MdOutlineWork } from "react-icons/md";

const Experience = () => {
  return (
    <>
      {experiences.map(({ title, company, period, achievements }) => (
        <div>
          <div className="flex items-center gap-4">
            <div className="bg-col1 py-3 px-3 rounded-full">
              <MdOutlineWork size={40} />
            </div>
            <div>
              <p>{title}</p>
              <p>{company}</p>
              <p>{period}</p>
            </div>
          </div>
          <ul className="list-disc pl-5">
            {achievements.map((achievement) => (
              <li>{achievement}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Experience;
