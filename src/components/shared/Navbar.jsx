import React, { useState } from "react";
import ActiveLink from "../ActiveLink";
import logo from "../../assets/logo.svg";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";
import { CgMenuLeft } from "react-icons/cg";
import { useAuth } from "../../hooks/useAuth";
import Menu from "../Menu";

const Navbar = () => {
  const [dark, setDark] = useState(false);
  const { isOpen, setOpen } = useAuth();
  console.log(isOpen);
  const user = false;

  return (
    <nav className="flex items-center py-3 h-[90px]">
      <figure>
        <img className=" w-[180px] lg:w-[250px]" src={logo} alt="Logo" />
      </figure>

      <div className="w-full flex justify-end items-center gap-1">
        {dark ? (
          <BsSun className="text-white text-xl md:text-2xl" />
        ) : (
          <BsMoonStarsFill className="text-primary text-xl md:text-2xl" />
        )}
        <div>
          <ul className="flex">
            {!user ? (
              <>
                <li>
                  <ActiveLink to={"/login"}>Login</ActiveLink>
                </li>
                <li>
                  <ActiveLink to={"/signup"}>Sign Up</ActiveLink>
                </li>
              </>
            ) : (
              <li>
                <ActiveLink>Logout</ActiveLink>
              </li>
            )}
          </ul>
        </div>
        <div className="">
          <div
            onClick={() => setOpen(!isOpen)}
            className="rounded-full border border-border p-2 flex justify-center items-center cursor-pointer"
          >
            <CgMenuLeft className="text-primary text-2xl" />
          </div>
          {isOpen && (
            <div className="absolute h-full bg-primary w-[300px] right-0 top-0 p-5 z-10">
              <Menu />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
