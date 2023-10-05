import React from "react";

const BlogDate = ({ day = "18", mon = "NOV", className = "" }) => {
  return (
    <div
      className={`absolute flex flex-col text-center rounded px-[15px] py-[6px] bg-[#FFF] ${className}`}
    >
      <span className="text-gray9 text-[18px] font-medium">{day}</span>
      <span className="uppercase text-gray5 text-[12px] font-medium">
        {mon}
      </span>
    </div>
  );
};

export default BlogDate;
