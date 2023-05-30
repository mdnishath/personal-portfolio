import React, { useEffect, useState } from "react";
import Item from "./Item";
import "./scrole.css";

const services = () => {
  const [services, setServices] = useState([]);

  //fetch services
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  console.log(services);
  return (
    <div className="scrollbar-container">
      <div className="scrollbar-content">
        <div className="grid grid-cols-3 gap-5 py-4 px-4  h-[620px] ">
          {services.map((item) => (
            <Item key={item.id} item={item} />
          ))}{" "}
        </div>
      </div>
    </div>
  );
};

export default services;
