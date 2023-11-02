import React from "react";
import { defaultImage2 } from "../../../constants/global";

const AboutImage = ({
  linkUrl = defaultImage2,
  w = "100px",
  h = "100px",
  className = "rounded-md",
}) => {
  return (
    <div className={`w-[${w}] h-[${h}]`}>
      <img
        src={linkUrl}
        className={`w-full h-full object-cover ${className}`}
        alt="tt"
      />
    </div>
  );
};

export default AboutImage;
