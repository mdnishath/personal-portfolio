import React from "react";
import Navbar from "../components/shared/Navbar";
import { Outlet } from "react-router-dom";
import Container from "../components/Container";
import { useAuth } from "../hooks/useAuth";

const AuthLayout = () => {
  const { isOpen } = useAuth();
  return (
    <div className="px-2 sm:px-2 md:px-3 lg:px-0">
      <Container>
        <Navbar />
        <div className="bg-surfece h-[calc(100vh-90px)] flex md:h-[calc(100vh-90px)] md:items-center relative">
          <Outlet />
        </div>
      </Container>
    </div>
  );
};

export default AuthLayout;
