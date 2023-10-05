import React from "react";

const UserRole = ({ role = "customer", className = "" }) => {
  return (
    <span className={`block text-gray4 text-sm font-normal ${className}`}>
      {role}
    </span>
  );
};

export default UserRole;
