import React from "react";
import { skillSet } from "./skillSet";
import { ContainerScroll } from "../ui/container-scroll-animation";
import { BackgroundGradient } from "../ui/background-gradient";

const Skills = () => {
  return (
    <div className="py-12 bg-col1 flex items-center justify-center" id="skills">
      <div className="wrapperSmall flex justify-center items-center flex-col">
        <p className="text-white">Skills</p>

        {/* <ContainerScroll> */}
        <div className="flex gap-4 flex-wrap items-center justify-center">
          {skillSet.map((skill, index) => (
            <div key={index}>
              <BackgroundGradient
                colour1={skill.colour1}
                colour2={skill.colour2}
                colour3={skill.colour3}
                colour4={skill.colour4}
              >
                <div className="flex flex-col justify-center items-center bg-gray-800 h-[100px] w-[100px] rounded-[22px]">
                  <div className="h-[50px] w-[50px]">
                    <img className="" src={skill.src} />
                  </div>
                  <div className="text-white">{skill.name}</div>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      {/* </ContainerScroll> */}
    </div>
  );
};

export default Skills;
