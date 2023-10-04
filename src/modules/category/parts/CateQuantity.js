import React from "react";

const CateQuantity = ({
  number = "165 Products",
  className = "text-sm font-normal",
}) => {
  return <span className={`${className} block text-gray5`}>{number}</span>;
};

export default CateQuantity;
