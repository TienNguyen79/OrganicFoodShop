import React from "react";

const ProStart = ({ children, className = "" }) => {
  return (
    <div className={`flex items-center gap-x-[2px] mt-[6px] ${className}`}>
      {children}
    </div>
  );
};

export default ProStart;
