import React from "react";
import {
  defaultImage,
  defaultImage2,
  defaultImage3,
} from "../../../constants/global";

const ProImage = ({ linkUrl = defaultImage3 }) => {
  return (
    <div className="h-[260px] w-full p-1  mx-auto  overflow-hidden ">
      <img
        src={linkUrl}
        className="w-full h-full object-cover rounded "
        alt=""
      />
    </div>
  );
};

export default ProImage;
