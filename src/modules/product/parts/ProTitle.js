import React from "react";

const ProTitle = ({
  title = "Green Apple",
  kind = "text-sm font-normal",
  className = "",
}) => {
  return (
    <span
      className={`block  text-gray7  whitespace-nowrap overflow-hidden overflow-ellipsis max-w-[150px] ${kind} ${className}`}
    >
      {title}
    </span>
  );
};

export default ProTitle;
