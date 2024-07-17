import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdArrowRight } from "react-icons/md";

const Project = ({ title, desc, link, code, src, skillSet }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center items-center cursor-pointer">
      <motion.div
        className="bg-gray-800 rounded-md text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-full overflow-hidden">
          <img className="object-cover" src={src} alt={`${title} image`} />
        </div>

        <p className="text-center text-xl font-bold">{title}</p>

        {isOpen && (
          <motion.div className="flex flex-col gap-3 p-4 h-full">
            <p>{desc}</p>

            <div className="flex justify-center items-center gap-2 flex-wrap">
              {skillSet.map((skill, index) => (
                <div
                  key={index}
                  className="bg-col11 py-1 px-2 rounded-full text-sm"
                >
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
                className="bg-col2 py-2 px-4 rounded-md font-semibold uppercase text-white shadow-md hover:bg-col11 flex"
              >
                Demo
                <MdArrowRight className="" size={25} />
              </motion.a>

              <motion.a
                href={code}
                target="_blank"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-col2 py-2 px-4 rounded-md font-semibold uppercase text-white shadow-md hover:bg-col11 flex"
              >
                CODE
                <MdArrowRight className="" size={25} />
              </motion.a>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Project;
