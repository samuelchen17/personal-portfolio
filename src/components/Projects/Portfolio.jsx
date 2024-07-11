import React from "react";
import Project from "./Project";
import { projects } from "./projects";

const Portfolio = () => {
  return (
    <div className="py-12 bg-gray-800" id="projects">
      <div className="wrapperSmall">
        <h2 className="text-col2 text-4xl font-bold">Projects</h2>
        <br />
        <div className="flex gap-8 flex-wrap">
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
