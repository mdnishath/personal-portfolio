import React from "react";
import { Outlet } from "react-router-dom";
import Sidbar from "../components/Dashboard/Sidbar";
import { useAuth } from "../hooks/useAuth";
import GlobalLoader from "../loader/GlobalLoader";

const DashboardLayout = () => {
  const { loading } = useAuth();
  if (loading) {
    return (
      <div className="fixed top-0 left-0 w-full flex justify-center items-center h-full">
        <GlobalLoader />
      </div>
    );
  }
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
