import { Link } from "react-router-dom";
import { navLinks } from "./NavLinks";

const NavModal = ({ setNavModal, navModal }) => {
  return (
    <div
      className="fixed bg-slate-900 bg-opacity-50 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      //   onClick={(event) => event.stopPropagation()}
    >
      <ul className="justify-end gap-4 text-white">
        {navLinks.map(({ link, id }) => (
          <li onClick={() => setNavModal(!navModal)}>
            <Link to={`/#${link}`} offset={50} key={id}>
              {link}
            </Link>
          </li>
        ))}

        <Link to="/resume">
          <button className="bg-blue-900 py-2 px-2 rounded-full">Resume</button>
        </Link>
      </ul>
    </div>
  );
};

export default NavModal;
