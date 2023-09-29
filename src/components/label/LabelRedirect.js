import React from "react";
import IconAR2 from "../Icons/IconAR2";
import IconArrowRight from "../Icons/IconArrowRight";

const LabelRedirect = ({ title = "", className = "font-medium" }) => {
  return (
    <div className="flex items-center gap-x-3 text-primary">
      <span className={className}>{title}</span>
      <span className="text-primary">
        <IconAR2 color="#00B207" width={15}></IconAR2>
      </span>
    </div>
  );
};

export default LabelRedirect;
