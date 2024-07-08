import React from "react";
import { NavLink } from "react-router-dom";
const UnauthNavbar = () => {
  return (
    <div className={`flex items-center justify-between h-12`}>
      <div>
        <h1>BigHandle</h1>
      </div>
      <div className={`flex gap-12`}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `block py-2 pr-4 pl-3 duration-200 ${
              isActive ? "text-violet-500 font-bold" : "text-gray-700"
            } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-violet-500 lg:p-0`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `block py-2 pr-4 pl-3 duration-200 ${
              isActive ? "text-violet-500 font-bold" : "text-gray-700"
            } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-violet-500 lg:p-0`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `block py-2 pr-4 pl-3 duration-200 ${
              isActive ? "text-violet-500 font-bold" : "text-gray-700"
            } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-violet-500 lg:p-0`
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            `block py-2 pr-4 pl-3 duration-200 ${
              isActive ? "text-violet-500 font-bold" : "text-gray-700"
            } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-violet-500 lg:p-0`
          }
        >
          Login
        </NavLink>
      </div>
      <div>
        <p>someemail@gmail.com</p>
      </div>
    </div>
  );
};

export default UnauthNavbar;
