import React from "react";
import { navLinks } from "./NavLinks";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center w-full h-20 sticky top-0 bg-blue-700">
      <div>
        <h1>Chenmuel</h1>
      </div>
      <ul className="flex justify-end gap-4">
        {navLinks.map((links) => (
          <li key={links.id}>{links.link}</li>
        ))}
        <button className="bg-blue-900 py-2 px-2 rounded-full">Resume</button>
      </ul>
    </div>
  );
};

export default NavBar;
