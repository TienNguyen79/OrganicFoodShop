import React from "react";
import { defaultImage3 } from "../../../constants/global";

const UserAvatar = ({
  linkUrl = defaultImage3,
  className = "w-[56px] h-[56px]",
}) => {
  return (
    <div className={`${className} p-1  mx-auto  overflow-hidden`}>
      <img
        src={linkUrl}
        className="w-full h-full object-cover rounded-full "
        alt=""
      />
    </div>
  );
};

export default UserAvatar;
