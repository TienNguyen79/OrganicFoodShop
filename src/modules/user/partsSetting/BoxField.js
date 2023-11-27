import React from "react";

const BoxField = ({ children, className = "" }) => {
  return (
    <div className={`flex flex-col gap-y-[6px] ${className}`}>{children}</div>
  );
};

export default BoxField;
