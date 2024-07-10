import { Link } from "react-router-dom";
import { navLinks } from "./NavLinks";
import ScrollToLink from "../common/ScrollToLink";

const NavModal = ({ setNavModal, navModal }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-80 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={(event) => event.stopPropagation()}
    >
      <ul className="flex justify-center flex-col items-center gap-4 text-white">
        {navLinks.map(({ link, id, offset }) => (
          <li key={id} onClick={() => setNavModal(!navModal)}>
            <ScrollToLink to={link} offset={offset}>
              {link}
            </ScrollToLink>
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
