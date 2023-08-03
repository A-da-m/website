import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4">
      <div>
        <div className="w-12 h-12 from-green-700 to-green-900 bg-gradient-to-b rounded-full flex items-center justify-center">
          <h3 className="text-xl font-bold">AA</h3>
        </div>
      </div>
      <div className="gap-2 flex">
        <a
          href="https://www.linkedin.com/in/abbasadamh/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-gray-400"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/A-da-m"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-gray-400"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
