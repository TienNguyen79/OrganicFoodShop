import React from "react";

const UserComment = ({ children, className = "text-gray7 font-normal" }) => {
  return <p className={`text-sm ${className}`}>{children}</p>;
};

export default UserComment;
