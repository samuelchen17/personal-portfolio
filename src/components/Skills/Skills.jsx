import React from "react";
import { skillSet } from "./skillSet";

import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <section
      className="py-12 bg-col12 flex-col items-center justify-center"
      id="skills"
    >
      <div className="mx-auto p-4 max-w-screen-lg text-center sm:text-left">
        <h2 className="text-col2 text-4xl font-bold py-4">SKILLS</h2>
        <p className="text-white">
          Here are the skills I have acquired, as demonstrated in my projects:
        </p>
        <div className="flex justify-center items-center flex-col">
          <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 items-center justify-center py-8">
            {skillSet.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
