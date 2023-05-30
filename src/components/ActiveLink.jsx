import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children, normal, active }) => {
  console.log(normal, active);
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${
          isActive ? active : normal
        }  w-full block py-2 md:px-4 px-2 rounded-sm duration-200 ease-linear font-semibold uppercase text-sm md:text-lg`
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
