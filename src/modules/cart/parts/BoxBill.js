import React from "react";

const BoxBill = ({ children, className = "" }) => {
  return (
    <div className={`p-6 border border-[##E6E6E6] rounded-lg  ${className}`}>
      {children}
    </div>
  );
};

export default BoxBill;
