import React from "react";

const ProgressStep = ({
  text = "01",
  NameStep = "Order received",
  className = "bg-primary ",
  cssName = "text-darkPrimary ",
}) => {
  return (
    <div className="inline-flex flex-row lg:flex-col md:flex-col  items-center justify-center z-[5]   gap-y-2">
      <div
        className={`w-10 h-10 rounded-full  flex justify-center items-center text-white ${className}`}
      >
        {text}
      </div>
      <span className={`text-sm font-normal ${cssName}`}>{NameStep}</span>
    </div>
  );
};

export default ProgressStep;
