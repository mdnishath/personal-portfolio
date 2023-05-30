import React from "react";
import profile from "../../assets/nishath.png";

const Sidbar = () => {
  return (
    <div className="py-8">
      <figure>
        <img
          className="w-[140px]  mx-auto rounded-full bg-overlay-light border-2 border-borderLight"
          src={profile}
          alt="Nishath"
        />
      </figure>
      <p className="text-2xl text-text text-center font-bold mt-4">
        Hy! I'm Nishath
      </p>
      <p className="font-semibold text-center text-primary mt-2">
        Full Stack Developer
      </p>
      <div className="mt-5 sm:mt-5 md:mt-20">
        <p className="text-base text-center text-text mt-2">
          help@nishath.com.bd
        </p>
        <p className="text-base text-center text-text mt-2">+880-1767-591988</p>
      </div>
      <div className="mt-5 sm:mt-5 md:mt-20">
        <button className="bg-primary text-black py-2 w-full rounded-full text-base font-semibold">
          Hire Me!
        </button>
        <button className="bg-overlay-light text-text py-2 w-full rounded-full text-base font-semibold mt-4">
          Download CV
        </button>
      </div>
    </div>
  );
};

export default Sidbar;
