import React from "react";
import IconAR2 from "../Icons/IconAR2";
import IconArrowRight from "../Icons/IconArrowRight";
import { Link } from "react-router-dom";

const LabelRedirect = ({
  title = "",
  className = "font-medium",
  url = "/#",
  icon = <IconAR2 color="#00B207" width={15}></IconAR2>,
}) => {
  return (
    <Link to={url}>
      <div className="flex items-center gap-x-3 text-primary">
        <span className={className}>{title}</span>
        <span className="text-primary">{icon}</span>
      </div>
    </Link>
  );
};

export default LabelRedirect;
