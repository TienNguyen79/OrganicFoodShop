import React from "react";
import { defaultImage } from "../../../constants/global";

const CateImage = ({ linkUrl = defaultImage }) => {
  return (
    <div className="w-[80px] h-[80px] mx-auto mb-5">
      <img src={linkUrl} className="w-full h-full object-cover" alt="" />
    </div>
  );
};

export default CateImage;
