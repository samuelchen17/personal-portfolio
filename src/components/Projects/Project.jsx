import React, { useState } from "react";
import { motion } from "framer-motion";

const Project = ({ title, desc, link, code, src, skillSet }) => {
  const [click, setClick] = useState(false);

  return (
    <div className="bg-col1 rounded-md overflow-hidden text-white shadow-md">
      <div className="">
        <img className="rounded-md" src={src} alt={`${title} image`} />
      </div>
      <p className="py-2 text-center">{title}</p>
      <div className="">
        {/* <p>{desc}</p> */}
        {/* <div className="flex justify-center items-center gap-2 flex-wrap">
          {skillSet.map((skill, index) => (
            <div key={index} className="bg-col py-1 px-2 rounded-full">
              {skill}
            </div>
          ))}
        </div> */}
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
      </div>
    </div>
  );
};

export default Project;
