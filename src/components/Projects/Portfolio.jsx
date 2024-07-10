import React from "react";
import Project from "./Project";
import { projects } from "./projects";

const Portfolio = () => {
  return (
    <div className="h-dvh" id="projects">
      <h1>Projects</h1>
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
  );
};

export default Portfolio;
