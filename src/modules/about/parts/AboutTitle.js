import React from "react";

const AboutTitle = ({
  title = "Healthy & natural food for lovers of healthy food.",
  className = "text-[18px]",
}) => {
  return <span className={`text-gray9 font-medium ${className}`}>{title}</span>;
};

export default AboutTitle;
