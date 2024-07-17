import React from "react";
import Project from "./Project";
import { projects } from "./projects";

const Portfolio = () => {
  return (
    <section className="py-12 bg-gray-950" id="projects">
      <div className="mx-auto p-4 max-w-screen-lg">
        <h2 className="text-col2 text-4xl font-bold py-4 text-center sm:text-left">
          Projects
        </h2>
        <p className="text-center sm:text-left text-white text-xl">
          Here are some of my works:
        </p>
        <br />
        <div className="grid md:grid-cols-2 gap-4 justify-center">
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
    </section>
  );
};

export default Portfolio;
