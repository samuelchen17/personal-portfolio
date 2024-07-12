import React from "react";
import { socialLinks } from "./Socials/socialLinks";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white flex justify-center items-center flex-col py-6">
      <div className="text-xs">Get in touch</div>
      <div className="flex gap-4 py-2">
        {socialLinks.map(({ title, href, icon }) => (
          <div key={title}>
            <a
              href={href}
              target="_blank"
              className="flex flex-col justify-center items-center gap-1"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {icon}
              </motion.button>
              <label className="text-xs">{title}</label>
            </a>
          </div>
        ))}
      </div>
      <div className="text-xs">
        Copyright © 2024 Samuel Chen Portfolio Website.
      </div>
    </div>
  );
};

export default Footer;
