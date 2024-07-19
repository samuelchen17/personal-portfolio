import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MdArrowRight } from "react-icons/md";

const ProjectCard = ({ title, desc, link, code, src, skillSet }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleRate = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityRate = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <motion.div ref={ref} style={{ scale: scaleRate, opacity: opacityRate }}>
      <div className="text-white bg-gray-800 hover:bg-gray-900 max-w-[675px] overflow-hidden relative py-4 px-4 rounded-md sm:h-[23rem] flex flex-col items-center sm:items-start group">
        <div className="sm:max-w-[50%] flex flex-col h-full">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="leading-relaxed my-2">{desc}</p>
          <div className="mt-auto flex flex-col gap-4">
            <ul className="flex justify-center items-center gap-2 flex-wrap">
              {skillSet.map((skill, index) => (
                <li
                  className="bg-col2/[0.6] rounded-full py-1 px-2 text-sm"
                  key={index}
                >
                  {skill}
                </li>
              ))}
            </ul>
            <div className="flex justify-center gap-4 mb-4 sm:mb-0">
              {link && (
                <motion.a
                  href={link}
                  target="_blank"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-col2 py-2 px-4 rounded-md font-semibold uppercase text-white shadow-md hover:text-col2 hover:bg-white flex"
                >
                  Demo
                  <MdArrowRight className="" size={25} />
                </motion.a>
              )}

              <motion.a
                href={code}
                target="_blank"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-col2 py-2 px-4 rounded-md font-semibold uppercase text-white shadow-md hover:text-col2 hover:bg-white flex"
              >
                CODE
                <MdArrowRight className="" size={25} />
              </motion.a>
            </div>
          </div>
        </div>
        <img
          className="sm:absolute sm:top-12 sm:-right-[190px] sm:w-[30rem] rounded-md sm:group-hover:-translate-x-3 sm:group-hover:translate-y-3 sm:group-hover:-rotate-2 shadow-3xl"
          src={src}
          alt={`${title} image`}
        />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
