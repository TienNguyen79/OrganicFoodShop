import React from "react";

const CateTitle = ({
  className = "text-[18px] font-medium ",
  title = "Vegetables",
}) => {
  return (
    <span
      className={`inline-block text-gray9 ${className} group-hover:text-primary whitespace-nowrap overflow-hidden overflow-ellipsis max-w-[200px] `}
    >
      {title}
    </span>
  );
};

export default CateTitle;
