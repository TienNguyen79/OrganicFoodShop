import React from "react";

const ProPrice = ({ price = 10, className = "font-normal", unit = "$" }) => {
  return (
    <span className={`text-gray9 ${className}`}>
      {price}
      {unit}
    </span>
  );
};

export default ProPrice;
