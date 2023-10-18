import React from "react";
import { defaultImage3 } from "../../../constants/global";

const ProThumb = ({
  UrlThumb = defaultImage3,
  className = "w-[60px] h-[70px]",
}) => {
  return (
    <div className={`${className}`}>
      <img
        src={UrlThumb}
        className="w-full h-full object-cover rounded-[4px] cursor-pointer"
        alt=""
      />
    </div>
  );
};

export default ProThumb;
