import React from "react";
import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";
import { useAuth } from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import useAxiosSecure from "../hooks/useAxiosSecure";

const SocialLogin = () => {
  const [axiosSecure] = useAxiosSecure();
  const { googleLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  //google Login
  const handleGoogleLogin = async () => {
    try {
      const res = await googleLogin();
      await axiosSecure.post("/users", {
        name: res.user.displayName,
        email: res.user.email,
        image: res.user.photoURL,
        role: "user",
      });

      toast.success("You are loged in");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="flex gap-5 justify-center">
      <div className="bg-primary text-surfece px-3 py-3 rounded-full cursor-pointer">
        <BsGithub />
      </div>
      <div
        onClick={handleGoogleLogin}
        className="bg-primary text-surfece px-3 py-3 rounded-full cursor-pointer"
      >
        <BsGoogle />
      </div>
      <div className="bg-primary text-surfece px-3 py-3 rounded-full cursor-pointer">
        <BsFacebook />
      </div>
    </div>
  );
};

export default SocialLogin;
