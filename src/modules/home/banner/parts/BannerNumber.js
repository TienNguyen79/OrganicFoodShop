import React from "react";

const BannerNumber = ({
  number = "11.99",
  className = "text-[20px] font-normal ",
  unit = "",
}) => {
  return (
    <span className={`block  text-white ${className} `}>
      <span>{unit}</span> {number}
    </span>
  );
};

export default BannerNumber;
