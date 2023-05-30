import React from "react";
import { Outlet } from "react-router-dom";
import Sidbar from "../components/Dashboard/Sidbar";

const DashboardLayout = () => {
  return (
    <div className="flex bg-surfece h-screen">
      <div className="w-[300px] bg-overlay fixed h-full shadow-sidbar-left">
        <Sidbar />
      </div>
      <div className="md:ml-[300px] p-5  w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
