import React from "react";
import { Link } from "react-router-dom";

const HoverLink = ({ to, children }) => {
  return (
    <li>
      <Link
        to={to}
        className="relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blazeOrange after:left-0 after:-bottom-1 after:transition-all after:duration-500 hover:after:w-full cursor-pointer"
      >
        {children}
      </Link>
    </li>
  );
};

export default HoverLink;
