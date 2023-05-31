import React from "react";
import { PuffLoader } from "react-spinners";

const GlobalLoader = () => {
  return (
    <div className="fixed bg-surfece top-0 left-0 w-full flex justify-center items-center h-full">
      <PuffLoader color="#36d7b7" />
    </div>
  );
};

export default GlobalLoader;
