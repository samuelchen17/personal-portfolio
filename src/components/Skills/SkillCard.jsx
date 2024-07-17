import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";

const SkillCard = ({ skill }) => {
  return (
    <div>
      <BackgroundGradient
        colour1={skill.colour1}
        colour2={skill.colour2}
        colour3={skill.colour3}
        colour4={skill.colour4}
      >
        <div className="flex flex-col justify-center items-center py-4 px-6 sm:px-10 bg-gray-800 rounded-[22px]">
          <div className="flex flex-col gap-3 justify-center items-center">
            <img
              className="h-[70px] w-[70px] lg:h-[80px] lg:w-[80px]"
              src={skill.src}
              alt={`${skill.name} icon`}
            />
            <div className="text-white text-xl">{skill.name}</div>
          </div>
        </div>
      </BackgroundGradient>
    </div>
  );
};

export default SkillCard;
