import React from "react";

const GroupJusBeween = ({ children, className }) => {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      {children}
    </div>
  );
};

export default GroupJusBeween;
