import React from "react";
import Title from "./Title";

import { BsTelephoneForward } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import ContactBox from "./ContactBox";
import ActiveMenu from "../ActiveMenu";
import ActiveLink from "../ActiveLink";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  const { isOpen, setOpen, logOut, setLoading } = useAuth();
  const { user } = useAuth();
  const menuOptions = (
    <ul className="flex flex-col">
      <li className="">
        <ActiveMenu to={"/"}>Home</ActiveMenu>
        <ActiveMenu to={"/portfolio"}>Portfolio</ActiveMenu>
        <ActiveMenu to={"/services"}>Services</ActiveMenu>
        <ActiveMenu to={"/blog"}>Blog</ActiveMenu>
        <ActiveMenu to={"/contact"}>Contact</ActiveMenu>
      </li>
    </ul>
  );

  const handleLogout = async () => {
    await logOut();
    setLoading(false);
    navigate("/login");
  };
  return (
    <div className="relative">
      <AiOutlineClose
        onClick={() => setOpen(!isOpen)}
        className="text-3xl cursor-pointer text-surfece z-20 absolute top-0 right-0"
      />
      <div className="grid grid-cols-1">
        <div className="flex flex-col">
          <Title text={"Navigation"} />
          <div>{menuOptions}</div>
        </div>
        <div className="border-b-2 mt-5 border-[#39d68a]"></div>
        <div className=" my-5">
          <Title text={"Contact Info"} />
          <div className="mt-5 flex flex-col gap-4">
            <ContactBox
              contact={"(+880) 1767591988"}
              icon={BsTelephoneForward}
            />
            <ContactBox
              contact={"nishath.khandakar@gmail.com"}
              icon={MdOutlineMail}
            />
            <ContactBox contact={"Dhaka,Bangladesh"} icon={GoLocation} />
          </div>
        </div>
      </div>
      <div className="border-b-2 mt-5 border-[#39d68a]"></div>
      <div className="mt-5">
        <div className="flex ">
          <Title text={"Social"} />
        </div>
        <div className="flex gap-3 text-2xl  mt-5">
          <FaFacebookF />
          <FaTwitter />
          <FaGithub />
          <FaLinkedin />
        </div>
      </div>
      <div className="border-b-2 mt-5 border-[#39d68a]"></div>
      <div className="mt-5">
        <div className="flex">
          <Title text={"Authentication"} />
        </div>
        <div className="md:flex ">
          {!user ? (
            <ul className="flex w-full text-surfece">
              <li>
                <ActiveLink
                  normal={"text-surfece"}
                  active={"text-surfece"}
                  to={"/login"}
                >
                  Login
                </ActiveLink>
              </li>
              <li>
                <ActiveLink
                  className={"text-surfece"}
                  active={"text-surfece"}
                  to={"/signup"}
                >
                  Sign Up
                </ActiveLink>
              </li>
            </ul>
          ) : (
            <div className="w-full">
              <figure>
                <img
                  className="w-[60px] h-[60px] rounded-full object-cover  border-surfece border-2 my-3"
                  src={user?.photoURL}
                  alt="Profile"
                />
              </figure>
              <p className="text-lg font-semibold">{user?.displayName}</p>
              <button
                onClick={handleLogout}
                className=" px-10 py-2 bg-surfece text-text-dark font-semibold text-lg rounded-md w-full mt-4"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
