import React, { useState } from "react";
import ActiveLink from "../ActiveLink";
import logo from "../../assets/logo.svg";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";
import { CgMenuLeft } from "react-icons/cg";
import { useAuth } from "../../hooks/useAuth";
import Menu from "../Menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dark, setDark] = useState(false);
  const { isOpen, setOpen } = useAuth();
  const { user } = useAuth();

  return (
    <nav className="flex flex-shrink-0 items-center py-3 h-[90px]">
      <Link to={"/"}>
        <figure>
          <img className=" w-full lg:w-[250px]" src={logo} alt="Logo" />
        </figure>
      </Link>

      <div className="w-full flex flex-grow justify-end items-center gap-4">
        {dark ? (
          <BsSun className="text-white text-xl md:text-2xl" />
        ) : (
          <BsMoonStarsFill className="text-primary text-xl md:text-2xl" />
        )}
        <div className="hidden md:flex ">
          <ul className="flex">
            {!user && (
              <div className="flex">
                <li>
                  <ActiveLink
                    normal={"text-text"}
                    active={"text-primary"}
                    to={"/login"}
                  >
                    Login
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink
                    normal={"text-text"}
                    active={"text-primary"}
                    to={"/signup"}
                  >
                    Sign Up
                  </ActiveLink>
                </li>
              </div>
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
            <div className="fixed h-full bg-primary w-[300px] right-0 top-0 p-5 z-10">
              <Menu />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
