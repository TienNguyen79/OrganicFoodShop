import React from "react";

const CateQuantity = ({
  number = "165",
  className = "text-sm font-normal",
}) => {
  return (
    <span className={`${className} block text-gray5`}>{number} Products</span>
  );
};

export default CateQuantity;
