import React from "react";
import Project from "./Project";
import { projects } from "./projects";

const Portfolio = () => {
  return (
    <div className="h-dvh bg-yellow-500" id="projects">
      <h1>Projects</h1>
      <div className="flex gap-8 flex-wrap">
        {projects.map(({ title, desc, projects, link, code }) => (
          <div key={title}>
            <Project
              title={title}
              desc={desc}
              projects={projects}
              link={link}
              code={code}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
