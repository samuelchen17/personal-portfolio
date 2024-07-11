import React from "react";
import Project from "./Project";
import { projects } from "./projects";

const Portfolio = () => {
  return (
    <div className="py-12 bg-gray-800" id="projects">
      <div className="mx-auto p-4 max-w-screen-lg">
        <h2 className="text-col2 text-4xl font-bold py-4">Projects</h2>
        <p className="text-center sm:text-left text-white">
          Here are some of my works:
        </p>
        <br />
        <div className="grid projects gap-8">
          {projects.map(
            ({ title, desc, projects, link, code, src, skillSet }) => (
              <div key={title}>
                <Project
                  title={title}
                  desc={desc}
                  projects={projects}
                  link={link}
                  code={code}
                  src={src}
                  skillSet={skillSet}
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
