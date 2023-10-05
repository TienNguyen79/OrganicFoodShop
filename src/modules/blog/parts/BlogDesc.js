import React from "react";

const BlogDesc = ({ children, className = "text-[14px] mb-4" }) => {
  return (
    <span
      className={`${className} block text-start text-gray9 font-medium hover:text-primary cursor-pointer `}
    >
      {children}
    </span>
  );
};

export default BlogDesc;
