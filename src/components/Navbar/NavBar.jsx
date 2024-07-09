import React from "react";
import { navLinks } from "./NavLinks";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { navBarHeight } from "../../config/config";

const NavBar = () => {
  return (
    <div
      className={`flex justify-between items-center w-full h-${navBarHeight} fixed top-0 bg-sky-600 z-50`}
    >
      <div>
        <h1>Chenmuel</h1>
      </div>
      <div>
        <ul className="sm:flex justify-end gap-4 hidden">
          {navLinks.map((links) => (
            <Link to={`/#${links.link}`} offset="50" key={links.id}>
              <li>{links.link}</li>
            </Link>
          ))}

          <Link to="/resume">
            <button className="bg-blue-900 py-2 px-2 rounded-full">
              Resume
            </button>
          </Link>
        </ul>
        <div className="text-white">
          <IoMenu className="sm:hidden flex" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
