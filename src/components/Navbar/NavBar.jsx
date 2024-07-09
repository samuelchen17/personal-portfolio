import React, { useState } from "react";
import { navLinks } from "./NavLinks";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { navBarHeight } from "../../config/config";
import NavModal from "./NavModal";
import ScrollToLink from "../ScrollToLink";

const NavBar = () => {
  const [navModal, setNavModal] = useState(false);

  return (
    <div
      className={`flex justify-between items-center w-full h-${navBarHeight} sticky top-0 bg-sky-600 z-50`}
    >
      <div>
        <h1>Chenmuel</h1>
      </div>
      <div>
        <ul className="sm:flex justify-end gap-4 hidden">
          {navLinks.map(({ link, id, offset }) => (
            <li key={id}>
              <ScrollToLink to={link} offset={offset}>
                {link}
              </ScrollToLink>
            </li>
          ))}

          <Link to="/resume">
            <button className="bg-blue-900 py-2 px-2 rounded-full">
              Resume
            </button>
          </Link>
        </ul>
        <div className="text-white">
          <IoMenu
            className="sm:hidden flex"
            onClick={() => setNavModal(!navModal)}
          />
        </div>
      </div>
      {navModal && <NavModal setNavModal={setNavModal} navModal={navModal} />}
    </div>
  );
};

export default NavBar;
