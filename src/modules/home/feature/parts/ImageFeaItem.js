import React from "react";
import { defaultImage } from "../../../../constants/global";

const ImageFeaItem = ({ url = "/logo192.png" }) => {
  return (
    <div className={`w-[72px] h-[72px]`}>
      <img src={url} alt="" className="w-full h-full object-cover" />
    </div>
  );
};

export default ImageFeaItem;
