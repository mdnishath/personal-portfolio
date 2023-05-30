import React from "react";
import image from "../../assets/nishath.png";
import Title from "./Title";
const FeedCard = () => {
  return (
    <div className="flex gap-4 bg-[#39d68a] bg-opacity-90 p-2 rounded-md">
      <div className="flex-shrink-0">
        <figure>
          <img className="w-[80px]" src={image} alt="Feed title" />
        </figure>
      </div>
      <div>
        <Title text={"New Feed example"} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
        </p>
      </div>
    </div>
  );
};

export default FeedCard;
