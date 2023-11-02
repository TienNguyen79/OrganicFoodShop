import React from "react";

const BoxOption = ({ children, className = "" }) => {
  return (
    <div className={`absolute bg-white shadow-lg rounded-md p-2 ${className}`}>
      {children}
    </div>
  );
};

export default BoxOption;
