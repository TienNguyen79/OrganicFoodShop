import React from "react";
import { defaultImage3 } from "../../../constants/global";

const BlogImage = ({
  linkUrl = defaultImage3,
  className = "h-[300px] w-full",
}) => {
  return (
    <div className={`${className}   mx-auto  overflow-hidden`}>
      <img
        src={linkUrl}
        className="w-full h-full object-cover rounded-t-lg "
        alt=""
      />
    </div>
  );
};

export default BlogImage;
