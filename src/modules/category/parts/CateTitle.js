import React from "react";

const CateTitle = ({
  className = "text-[18px] font-medium ",
  title = "Vegetables",
}) => {
  return (
    <span className={`text-gray9 ${className} group-hover:text-primary `}>
      {title}
    </span>
  );
};

export default CateTitle;
