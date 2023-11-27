import React from "react";
import { Children } from "react";

const BoxBigAdmin = ({ className = "", children }) => {
  return (
    <div className={`py-8 px-10 bg-white rounded shadow-lg ${className}`}>
      {children}
    </div>
  );
};

export default BoxBigAdmin;
