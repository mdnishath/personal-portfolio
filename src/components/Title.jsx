import React from "react";
import { toast } from "react-hot-toast";

const Title = ({ text }) => {
  return <h3 className="text-3xl font-semibold text-primary">{text}</h3>;
};

export default Title;
