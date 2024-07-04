import React from "react";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center w-full h-20 fixed bg-blue-500">
      <div>
        <h1>Samuel</h1>
      </div>
      <ul className="flex justify-end">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Project</li>
      </ul>
    </div>
  );
};

export default NavBar;
