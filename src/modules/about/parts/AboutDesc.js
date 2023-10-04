import React from "react";

const AboutDesc = ({
  children,
  className = "text-[14px] text-gray5 font-normal ",
}) => {
  return <div className={`${className}`}>{children}</div>;
};

export default AboutDesc;
