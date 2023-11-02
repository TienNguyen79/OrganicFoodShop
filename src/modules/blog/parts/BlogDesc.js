import React from "react";

const BlogDesc = ({
  children,
  className = "text-[14px] mb-4 hover:text-primary cursor-pointer",
}) => {
  return (
    <span className={`${className} block text-start text-gray9 font-medium  `}>
      {children}
    </span>
  );
};

export default BlogDesc;
