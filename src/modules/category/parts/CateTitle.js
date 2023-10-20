import React from "react";

const CateTitle = ({
  className = "text-[18px] font-medium ",
  title = "Vegetables",
}) => {
  return (
    <span
      title={title}
      className={`inline-block text-gray9 ${className} group-hover:text-primary whitespace-nowrap overflow-hidden overflow-ellipsis max-w-[150px] `}
    >
      {title}
    </span>
  );
};

export default CateTitle;
