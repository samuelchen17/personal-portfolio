import React from "react";

const About = () => {
  return (
    <section
      className="flex justify-center bg-gray-800 items-center py-12 min-h-[90svh]"
      id="about"
    >
      <div className="mx-auto p-4 max-w-screen-lg ">
        <h2 className="text-col2 text-4xl font-bold py-4 sm:text-left text-center">
          ABOUT ME
        </h2>
        <div className="text-white">
          <div>
            I am a highly motivated aspiring developer with a background in
            civil engineering. My decision to transition to the software space
            stems from my ambitions and passion towards software development.
          </div>
          <div>
            My time as a project manager in civil engineering has equipped me
            with skills such as problem solving and critical thinking, being
            able to work cohesively with my peers to come up with solutions with
            the ever-changing variables on site. I aim to bring my skills and
            expertise into the software space. My passion for software
            development fuels my desire to utilize my diverse skill set in
            contributing to innovative and impactful projects.
          </div>
          <div>
            I am excited to be part of a vibrant and dynamic environment that
            promotes continuous learning and development while fostering
            professional growth within a positive and inclusive company culture.
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
