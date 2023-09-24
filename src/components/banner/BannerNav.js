import React from "react";
import IconHome from "../Icons/IconHome";
import IconArrowRight from "../Icons/IconArrowRight";

const BannerNav = () => {
  return (
    <div className="w-full h-[120px] gradient-banner px-[238px] leading-[120px] ">
      <div className="flex items-center  gap-x-3">
        <IconHome></IconHome>
        <span>
          <IconArrowRight></IconArrowRight>
        </span>
        <h3 className="text-[16px] font-normal text-gray-50">Home</h3>
      </div>
    </div>
  );
};

export default BannerNav;
