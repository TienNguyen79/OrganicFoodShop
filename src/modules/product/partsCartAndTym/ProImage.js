import React from "react";
import { defaultImage3 } from "../../../constants/global";

const ProImage = ({
  linkUrl = defaultImage3,
  className = "h-[100px] w-full",
}) => {
  return (
    <div className={`${className} p-1   overflow-hidden`}>
      <img
        src={linkUrl}
        className="w-full h-full object-cover rounded "
        alt=""
      />
    </div>
  );
};

export default ProImage;
