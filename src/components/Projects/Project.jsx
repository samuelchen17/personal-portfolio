import React from "react";

const Project = ({ title, desc, project, link, code, src }) => {
  return (
    <div className="bg-red-500">
      <p>{title}</p>
      <img src={src} />
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
  );
};

export default Project;
