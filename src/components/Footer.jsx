import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white flex justify-center items-center flex-col py-6">
      <div className="text-xs">Get in touch</div>
      <div className="flex gap-[1rem] py-2">
        <div className="flex flex-col justify-center items-center gap-1">
          <AiOutlineGithub size={35} />
          <label className="text-xs">Github</label>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <FaLinkedin size={35} />
          <label className="text-xs">LinkedIn</label>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <MdOutlineEmail size={35} />
          <label className="text-xs">E-mail</label>
        </div>
      </div>
      <div className="text-xs">
        2024 Samuel Chen Portfolio Website. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
