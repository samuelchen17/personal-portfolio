import React, { useState } from "react";
import { motion } from "framer-motion";

const Project = ({ title, desc, link, code, src, skillSet }) => {
  const [isOpen, setIsOpen] = useState(false);

  const expand = {
    initial: { x: "100vw", opacity: 0 },
    animate: {
      x: "0",
      opacity: 1,
      transition: { type: "tween", duration: 0.4, ease: "easeOut" },
    },
    exit: {
      x: "100vw",
      opacity: 0,
      transition: { type: "tween", duration: 0.2, ease: "easeIn" },
    },
  };

  return (
    <motion.div
      className="bg-col12 rounded-md overflow-hidden text-white shadow-md shadow-white"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="">
        <img className="rounded-md" src={src} alt={`${title} image`} />
      </div>
      <p className="py-2 text-center">{title}</p>
      {isOpen && (
        <motion.div {...expand}>
          <p>{desc}</p>
          <div className="flex justify-center items-center gap-2 flex-wrap">
            {skillSet.map((skill, index) => (
              <div key={index} className="bg-col11 py-1 px-2 rounded-full">
                {skill}
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-4">
            <motion.a
              href={link}
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-col2 py-2 px-4 rounded-md font-semibold uppercase text-white shadow-md hover:bg-col11"
            >
              Demo
            </motion.a>

            <motion.a
              href={code}
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-col2 py-2 px-4 rounded-md font-semibold uppercase text-white shadow-md hover:bg-col11"
            >
              Code
            </motion.a>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Project;
