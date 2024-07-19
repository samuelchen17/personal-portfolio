import React from "react";
import { skillSet } from "./skillSet";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import SectionHeading from "../design/ui-styling/SectionHeading";

const fadeInAnimation = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.07 * index,
    },
  }),
};

const Skills = () => {
  return (
    <section
      className="py-12 bg-col12 flex-col items-center justify-center"
      id="skills"
    >
      <div className="mx-auto p-4 max-w-screen-lg text-center sm:text-left">
        <SectionHeading>skills</SectionHeading>
        <p className="text-white text-xl">
          Here are the skills I have acquired, as demonstrated in my projects:
        </p>
        <div className="flex justify-center items-center flex-col">
          <ul className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 items-center justify-center py-8">
            {skillSet.map((skill, index) => (
              <motion.li
                key={index}
                variants={fadeInAnimation}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
              >
                <SkillCard skill={skill} />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
