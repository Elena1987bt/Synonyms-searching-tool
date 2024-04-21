import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-transparent">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-end mx-auto p-6">
        <div className="  w-auto">
          <ul className="font-medium flex flex-row md:space-x-8 bg-transparent">
            <li>
              <NavLink
                to="/"
                className="block py-2 px-3 text-white text-white md:p-0 transform transition duration-300 hover:text-blue-500 hover:text-blue-500 "
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dictionary"
                className="block py-2 px-3 text-white text-white transform transition duration-300 md:p-0  md:p-0 hover:text-blue-500 "
              >
                Dictionary
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
