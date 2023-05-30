import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import Sidbar from "../components/shared/Sidbar";
import Container from "../components/Container";
import { useAuth } from "../hooks/useAuth";
import Menu from "../components/Menu";

const RootLayout = () => {
  const { isOpen } = useAuth();
  return (
    <div className="px-2 sm:px-2 md:px-3 lg:px-0">
      <Container>
        <Navbar />
        <div className="flex bg-surfece flex-col md:flex-row gap-8 justify-center items-center  h-[calc(100%-90px)] md:h-[calc(100vh-90px)]">
          <div className="md:w-[250px] w-full md:h-[650px] flex-shrink-0 bg-overlay px-5 rounded-md border-2 border-overlay-light overflow-hidden">
            <Sidbar />
          </div>
          <main className="flex-grow">
            <div className=" overflow-y-scroll md:h-[650px] bg-overlay rounded-md border-2 border-overlay-light relative md:p-5">
              <Outlet />
            </div>
          </main>
        </div>
        {/* <Footer /> */}
      </Container>
    </div>
  );
};

export default RootLayout;
