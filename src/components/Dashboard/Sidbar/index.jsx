import React from "react";
// import {useAuth} from '../../../hooks/useAuth'
import profile from "../../../assets/nishath.png";
const Sidbar = () => {
  // const { user } = useAuth();
  return (
    <div className="p-5">
      <div className="flex flex-col items-center justify-center">
        <figure>
          <img
            className="w-[100px] h-[100px] rounded-full border border-borderLight"
            src={profile}
            alt="profile"
          />
        </figure>
        <p className="mt-5 text-lg font-semibold text-text-dark">
          Md Nishath Khandakar
        </p>
      </div>
    </div>
  );
};

export default Sidbar;
