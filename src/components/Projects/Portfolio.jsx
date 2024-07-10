import React from "react";
import Project from "./Project";
import { projects } from "./projects";

const Portfolio = () => {
  return (
    <div className="py-12" id="projects">
      <div className="wrapperSmall">
        <h1>Projects</h1>
        <br />
        <div className="flex gap-8 flex-wrap">
          {projects.map(({ title, desc, projects, link, code, src }) => (
            <div key={title}>
              <Project
                title={title}
                desc={desc}
                projects={projects}
                link={link}
                code={code}
                src={src}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
