import React, { useState } from "react";
import image from "../../assets/authntication.svg";
import { FaUser } from "react-icons/fa";
import { MdOutlineEmail, MdOutlinePassword } from "react-icons/md";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import SocialLogin from "../../components/SocialLogin";
import Title from "../../components/Title";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [showPaword, setShowPassword] = useState(false);

  const onSubmit = (data) => console.log(data);
  return (
    <div className="w-full bg-overlay px-5 md:py-10 rounded-md border-2 border-overlay-light overflow-hidden relative">
      <div className="grid md:grid-cols-2 py-5 md:py-0 md:p-5">
        <div className="flex order-2 h-full items-center justify-center mt-5 md:mt-0">
          <figure className="flex justify-center">
            <img className="w-[400px]" src={image} />
          </figure>
        </div>
        <div className="md:order-2 order-1">
          <div className="flex justify-center">
            <Title text={"Please login here"} />
          </div>
          <form className="flex flex-col gap-4 h-full justify-center md:p-5">
            <div className="relative overflow-hidden rounded-md">
              <input
                type="email"
                {...register("email", {
                  required: "Email is requred",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Email is invalid",
                  },
                })}
                placeholder="Email "
                className="w-full bg-transparent border border-borderLight py-2 px-[60px] rounded-md outline-none text-white"
              />
              <div className="bg-primary absolute left-0 top-1/2 transform  -translate-y-1/2 h-full flex items-center justify-center w-[40px]">
                <MdOutlineEmail className="text-xl" />
              </div>
            </div>
            <div>
              {errors.email && (
                <span className="text-red-400">{errors.email.message}</span>
              )}
            </div>
            <div className="relative overflow-hidden rounded-md">
              <input
                type={showPaword ? "text" : "password"}
                {...register("password", {
                  required: "Password is requred",
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{6,15}$/,
                    message:
                      "Password must contain at least one uppercase letter, one lowercase letter, one special character, one number, and be 6-15 characters long",
                  },
                })}
                placeholder="Password"
                className="w-full bg-transparent border border-borderLight py-2 px-[60px] rounded-md outline-none text-white"
              />

              <div className="bg-primary  absolute left-0 top-1/2 transform  -translate-y-1/2 h-full flex items-center justify-center w-[40px]">
                <MdOutlinePassword className="text-xl" />
              </div>
              {showPaword ? (
                <div
                  onClick={() => setShowPassword(!showPaword)}
                  className="bg-primary cursor-pointer absolute right-0 top-1/2 transform  -translate-y-1/2 h-full flex items-center justify-center w-[40px]"
                >
                  <AiFillEyeInvisible className="text-xl" />
                </div>
              ) : (
                <div
                  onClick={() => setShowPassword(!showPaword)}
                  className="bg-primary cursor-pointer absolute right-0 top-1/2 transform  -translate-y-1/2 h-full flex items-center justify-center w-[40px]"
                >
                  <AiFillEye className="text-xl" />
                </div>
              )}
            </div>
            <div>
              {errors.password && (
                <span className="text-red-400">{errors.password.message}</span>
              )}
            </div>

            <div className="relative overflow-hidden flex justify-end flex-col">
              <button className="bg-primary px-10 py-2 rounded-md text-lg font-semibold w-full">
                Login
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
