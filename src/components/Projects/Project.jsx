import React from "react";

const Project = ({ title, desc, project, link, code, src }) => {
  return (
    <div className="bg-blue-950 rounded-md overflow-hidden text-white">
      <div className="py-2 px-2">
        <img className="rounded-md" src={src} />
      </div>
      <p className="py-2 text-center">{title}</p>
      <div className="hidden">
        <p>{desc}</p>
        <div className="flex justify-between">
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
          <button>read more</button>
        </div>
      </div>
    </div>
  );
};

export default Project;
