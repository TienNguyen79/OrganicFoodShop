import React from "react";

const UserName = ({ name = "TienCriss", className = " text-[16px]" }) => {
  return (
    <span className={`block text-gray9 font-semibold ${className}`}>
      {name}
    </span>
  );
};

export default UserName;
