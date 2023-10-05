import React from "react";

const BlogLabel = ({
  label = "label text",
  number = "",
  className = "text-gray7 ",
  kind = "",
}) => {
  return (
    <div className={`flex flex-1 text-sm font-normal  ${className}`}>
      <span className="block mr-1">{number}</span>
      <span className={`${kind}`}>{label}</span>
    </div>
  );
};

export default BlogLabel;
