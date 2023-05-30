import React from "react";
import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";

const SocialLogin = () => {
  return (
    <div className="flex gap-5 justify-center">
      <div className="bg-primary text-surfece px-3 py-3 rounded-full cursor-pointer">
        <BsGithub />
      </div>
      <div className="bg-primary text-surfece px-3 py-3 rounded-full cursor-pointer">
        <BsGoogle />
      </div>
      <div className="bg-primary text-surfece px-3 py-3 rounded-full cursor-pointer">
        <BsFacebook />
      </div>
    </div>
  );
};

export default SocialLogin;
