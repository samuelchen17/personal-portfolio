import React from "react";
import { skillSet } from "./skillSet";

const Skills = () => {
  return (
    <div className="h-dvh bg-gray-500">
      <p>Skills</p>
      <ul>
        {skillSet.map((skill) => (
          <div>
            <li>{skill.name}</li>
            <img className="h-[50px]" src={skill.src} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
