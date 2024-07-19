import React from "react";

const ProjectCard = ({ title, desc, link, code, src, skillSet }) => {
  return (
    <div className="text-white bg-gray-800 max-w-[42rem] overflow-hidden relative py-4 px-4 rounded-md">
      <div className="max-w-[50%]">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="leading-relaxed">{desc}</p>
        <ul className="flex justify-center items-center gap-2 flex-wrap">
          {skillSet.map((skill, index) => (
            <li
              className="bg-col2/[0.7] rounded-full py-1 px-2 text-sm"
              key={index}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <img
        className="absolute top-6 -right-40 w-[30rem] rounded-md"
        src={src}
        alt={`${title} image`}
      />
    </div>
  );
};

export default ProjectCard;
