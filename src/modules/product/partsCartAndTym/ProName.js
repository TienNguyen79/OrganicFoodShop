import React from "react";

const ProName = ({
  name = "Fresh Indian Orange",
  className = "",
  maxW = "max-w-[150px]",
}) => {
  return (
    <span
      title={name}
      className={`block text-gray9 font-normal whitespace-nowrap overflow-hidden overflow-ellipsis ${maxW} ${className}`}
    >
      {name}
    </span>
  );
};

export default ProName;
