import React from "react";
import { useAuth } from "../../../hooks/useAuth";
import profile from "../../../assets/nishath.png";
import { FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import ActiveLink from "../../ActiveLink";
const Sidbar = () => {
  const { user } = useAuth();
  const isAdmin = true;
  return (
    <div className="p-5">
      <div className="flex flex-col">
        <figure>
          <img
            className="w-[100px] h-[100px] rounded-full border border-borderLight"
            src={user?.photoURL}
            alt="profile"
          />
        </figure>
        <p className="mt-5 text-lg font-semibold text-text-dark">
          {user?.displayName}
        </p>
      </div>
      <div className="border-b-2 my-5 border-borderLight"></div>
      <div className="flex flex-col gap-6 bg-overlay-light py-4 px-4 rounded-md ">
        <div className="flex gap-3">
          <FaUsers className="text-primary text-3xl" />
          <ActiveLink
            normal={"text-text"}
            active={"text-primary"}
            to={"/dashboard/add-service"}
          >
            <p className="text-lg ">Add Service</p>
          </ActiveLink>
        </div>

        <div className="flex gap-3">
          <FaUsers className="text-primary text-3xl" />
          <ActiveLink
            normal={"text-text"}
            active={"text-primary"}
            to={"/dashboard/services"}
          >
            <p className="text-lg">Manage Services</p>
          </ActiveLink>
        </div>

        <div className="flex">
          <div className="flex gap-3">
            <FaUsers className="text-primary text-3xl" />
            <ActiveLink
              normal={"text-text"}
              active={"text-primary"}
              to={"/dashboard/users"}
            >
              <p className="text-lg">All Users</p>
            </ActiveLink>
          </div>
        </div>
      </div>
      <div className="border-b-2 my-5 border-borderLight"></div>
    </div>
  );
};

export default Sidbar;
