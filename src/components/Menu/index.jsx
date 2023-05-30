import React from "react";
import Title from "./Title";

import { BsTelephoneForward } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import ContactBox from "./ContactBox";
import ActiveMenu from "../ActiveMenu";
import FeedCard from "./FeedCard";
import { useAuth } from "../../hooks/useAuth";

const Menu = () => {
  const { isOpen, setOpen } = useAuth();
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
        <div className="flex justify-center">
          <Title text={"Social"} />
        </div>
        <div className="flex gap-3 text-2xl justify-center mt-5">
          <FaFacebookF />
          <FaTwitter />
          <FaGithub />
          <FaLinkedin />
        </div>
      </div>
    </div>
  );
};

export default Menu;
