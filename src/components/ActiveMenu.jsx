import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${
          isActive ? "text-surfece" : "text-surfece"
        }  w-full block py-2 px-4 rounded-sm duration-200 ease-linear font-semibold uppercase`
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
