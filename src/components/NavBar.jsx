import React from "react";
import Contact from "./Contact";
import Footer from "./Footer";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center w-full h-20 sticky top-0 bg-blue-500">
      <div>
        <h1>Samuel</h1>
      </div>
      <ul className="flex justify-end gap-4">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
        <button className="bg-blue-900 py-2 px-2 rounded-full">Resume</button>
      </ul>
    </div>
  );
};

export default NavBar;
