import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";

import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="paddings innerWidth n-wrapper">
      {
        isOpen ?
        <IoIosClose
            className="icon"
            size={30}
            onClick={() => setIsOpen(false)}
          />
        :
        <BiMenuAltRight
          className="icon"
          size={30}
          onClick={() => setIsOpen(true)}
        />
      }
      <nav
        className={`paddings n-container`}
      >
        <ul className={`n-list ${isOpen && "mobile"}`}>
          <li>About</li>
          <li>Experience</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
