import React from "react";
import image from "../../assets/authntication.svg";
import { FaUser } from "react-icons/fa";
import { MdOutlineEmail, MdOutlinePassword } from "react-icons/md";
import SocialLogin from "../../components/SocialLogin";
import Title from "../../components/Title";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="w-full bg-overlay px-5 md:py-10 rounded-md border-2 border-overlay-light overflow-hidden relative">
      <div className="grid md:grid-cols-2 p-5">
        <div className="flex order-2 h-full items-center justify-center mt-5 md:mt-0">
          <figure className="flex justify-center">
            <img className="w-[400px]" src={image} />
          </figure>
        </div>
        <div className="md:order-2 order-1">
          <div className="flex justify-center">
            <Title text={"Please login here"} />
          </div>
          <form className="flex flex-col gap-4 h-full justify-center p-5">
            <div className="relative overflow-hidden rounded-md">
              <input
                type="email"
                placeholder="Email "
                className="w-full bg-transparent border border-borderLight py-2 px-[60px] rounded-md outline-none text-white"
              />
              <div className="bg-primary absolute left-0 top-1/2 transform  -translate-y-1/2 h-full flex items-center justify-center w-[40px]">
                <MdOutlineEmail className="text-xl" />
              </div>
            </div>
            <div className="relative overflow-hidden rounded-md">
              <input
                type="password"
                placeholder="Password "
                className="w-full bg-transparent border border-borderLight py-2 px-[60px] rounded-md outline-none text-white"
              />
              <div className="bg-primary absolute left-0 top-1/2 transform  -translate-y-1/2 h-full flex items-center justify-center w-[40px]">
                <MdOutlinePassword className="text-xl" />
              </div>
            </div>

            <div className="relative overflow-hidden flex justify-end flex-col">
              <button className="bg-primary px-10 py-2 rounded-md text-lg font-semibold w-full">
                Sign Up
              </button>
              <p className="text-white text-center mt-5">
                Don't have an account?
                <Link to={"/signup"} className="ml-1">
                  Sign Up here
                </Link>
              </p>
              ddd
            </div>
            <div className="divider !my-2 before:bg-borderLight after:bg-borderLight text-primary font-semibold">
              OR
            </div>
            <div>
              <SocialLogin />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
