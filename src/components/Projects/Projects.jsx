import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "./projects";
import SectionHeading from "../design/ui-styling/SectionHeading";

const Projects = () => {
  return (
    <section className="py-12 bg-gray-950" id="projects">
      <div className="mx-auto p-4 max-w-screen-lg">
        <SectionHeading>projects</SectionHeading>
        <p className="text-center text-white text-xl">
          Here are some of my works:
        </p>
        <br />
        <div className="flex flex-col gap-8 items-center">
          {projects.map((project, index) => (
            <React.Fragment key={index}>
              <ProjectCard {...project} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
