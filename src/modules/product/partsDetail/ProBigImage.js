import React from "react";
import { defaultImage3 } from "../../../constants/global";

const ProBigImage = ({
  imageUrl = defaultImage3,
  className = "h-full w-full",
}) => {
  return (
    <div className={`${className}  `}>
      <img
        src={imageUrl}
        className="w-full h-full object-cover rounded "
        alt=""
      />
    </div>
  );
};

export default ProBigImage;
