import React from "react";
import { defaultImage3 } from "../../../constants/global";

const ProThumb = ({
  UrlThumb = defaultImage3,
  className = "w-[60px] h-[70px]",
  click,
  item,
  selectedThumb,
  setSelectedThumb,
}) => {
  console.log("🚀 ~ file: ProThumb.js:9 ~ click:", click);
  return (
    <div
      className={`${className}  ${
        item.id === selectedThumb ? "border border-primary" : ""
      }  `}
      onMouseEnter={() => setSelectedThumb(item.id)}
    >
      <img
        src={UrlThumb}
        className="w-full h-full object-cover p-[2px] rounded-[4px] cursor-pointer"
        alt=""
      />
    </div>
  );
};

export default ProThumb;
