import React from "react";

const ProgressStep = ({ text = "01", NameStep = "Order received" }) => {
  return (
    <div className="inline-flex flex-col items-center justify-center z-[5]   gap-y-2">
      <div className="w-10 h-10 rounded-full bg-primary flex justify-center items-center text-white">
        {text}
      </div>
      <span className="text-darkPrimary text-sm font-normal">
        Order received
      </span>
    </div>
  );
};

export default ProgressStep;
