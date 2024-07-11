import React, { useState } from "react";

const Project = ({ title, desc, project, link, code, src, skillSet }) => {
  const [click, setClick] = useState(false);

  return (
    <div className="bg-col1 rounded-md overflow-hidden text-white px-2 py-2 shadow-md shadow-white">
      <div className="">
        <img className="rounded-md" src={src} alt={`${title} image`} />
      </div>
      <p className="py-2 text-center">{title}</p>
      <div className="">
        <p>{desc}</p>
        <div className="flex justify-center items-center gap-2 flex-wrap">
          {skillSet.map((skill) => (
            <div className="bg-blue-500 py-1 px-2 rounded-full">{skill}</div>
          ))}
        </div>
        <div className="flex justify-center gap-4">
          <a
            href={link}
            target="_blank"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Demo
          </a>
          <a
            href={code}
            target="_blank"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
