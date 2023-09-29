import React from "react";
import { defaultImage } from "../../../constants/global";

const ProImage = ({ linkUrl = defaultImage }) => {
  return (
    <div className="h-[200px] w-[200px]  mx-auto my-6">
      <img src={linkUrl} className="w-full h-full object-cover" alt="" />
    </div>
  );
};

export default ProImage;
