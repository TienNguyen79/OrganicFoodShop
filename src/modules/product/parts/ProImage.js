import React from "react";
import {
  defaultImage,
  defaultImage2,
  defaultImage3,
} from "../../../constants/global";
import { Link } from "react-router-dom";

const ProImage = ({
  linkUrl = defaultImage3,
  className = "h-[260px] w-full",
  href,
}) => {
  if (href) {
    return (
      <Link to={href}>
        <div className={`${className} p-1  mx-auto  overflow-hidden`}>
          <img
            src={linkUrl}
            className="w-full h-full object-cover rounded "
            alt=""
          />
        </div>
      </Link>
    );
  }
  return (
    <div className={`${className} p-1  mx-auto  overflow-hidden`}>
      <img
        src={linkUrl}
        className="w-full h-full object-cover rounded "
        alt=""
      />
    </div>
  );
};

export default ProImage;
