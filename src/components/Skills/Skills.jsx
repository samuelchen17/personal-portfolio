import React from "react";
import { skillSet } from "./skillSet";

const Skills = () => {
  return (
    <div className="h-dvh bg-red-500">
      <p>Skills</p>
      <ul>
        {skillSet.map((skill) => (
          <li>{skill.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
