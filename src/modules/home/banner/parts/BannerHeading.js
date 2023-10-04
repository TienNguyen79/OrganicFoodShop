import React from "react";

const BannerHeading = ({
  heading = "100% Organic",
  className = "text-[#FFF]",
}) => {
  return (
    <span className={` font-medium uppercase ${className}`}>{heading}</span>
  );
};

export default BannerHeading;
