import React from "react";

const ProgressBar = ({ className = "", width = "w-[50%]" }) => {
  return (
    <div
      className={`${className} absolute w-[160px] h-[10px] rounded-lg bg-[#F2F2F2] border-t border-b border-r`}
    >
      <div className={`${width} h-[8px] rounded-lg  bg-primary `}></div>
    </div>
  );
};

export default ProgressBar;
