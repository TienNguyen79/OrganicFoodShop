import React from "react";

const BoxSettings = ({ children, label = "Label 1", className = "" }) => {
  return (
    <div className={`border-[1px]  rounded-lg ${className}`}>
      <h1 className="text-[20px] font-medium text-gray9 py-4 px-6 border-b-[1px]">
        {label}
      </h1>
      <div className="p-6">{children}</div>
    </div>
  );
};

export default BoxSettings;
