import React from "react";
import { navLinks } from "./NavLinks";
import { IoMenu } from "react-icons/io5";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center w-full h-20 sticky top-0 bg-sky-600">
      <div>
        <h1>Chenmuel</h1>
      </div>
      <div>
        <ul className="sm:flex justify-end gap-4 hidden">
          {navLinks.map((links) => (
            <li key={links.id}>{links.link}</li>
          ))}
          <button className="bg-blue-900 py-2 px-2 rounded-full">Resume</button>
        </ul>
        <div className="text-white">
          <IoMenu className="sm:hidden flex" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
