import React from "react";

const BillLabel = ({
  label = "label",
  className = "text-gray7 font-normal",
}) => {
  return <span className={`block  text-sm  ${className}`}>{label}</span>;
};

export default BillLabel;
