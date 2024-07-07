import React from "react";
import { skillSet } from "./skillSet";
import { ContainerScroll } from "../ui/container-scroll-animation";

const Skills = () => {
  return (
    <div className="h-dvh bg-gray-900 flex justify-center items-center flex-col">
      <p className="text-white">Skills</p>

      <ContainerScroll>
        <div className="flex gap-4 flex-wrap">
          {skillSet.map((skill) => (
            <div className="flex flex-col justify-center items-center bg-gray-800 h-[100px] w-[100px] rounded-md">
              <div className="h-[50px] w-[50px]">
                <img className="" src={skill.src} />
              </div>
              <div className="text-white">{skill.name}</div>
            </div>
          ))}
        </div>
      </ContainerScroll>
    </div>
  );
};

export default Skills;
