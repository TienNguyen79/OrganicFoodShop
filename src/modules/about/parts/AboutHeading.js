import React from "react";

const AboutHeading = ({
  heading = "100% Trusted Organic Food Store",
  className = "text-[40px]",
}) => {
  return (
    <div className={`${className} text-gray9 font-semibold leading-[1.2]`}>
      {heading}
    </div>
  );
};

export default AboutHeading;
