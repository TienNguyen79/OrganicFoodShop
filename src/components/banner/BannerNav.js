import React, { useEffect, useState } from "react";
import IconHome from "../Icons/IconHome";
import IconArrowRight from "../Icons/IconArrowRight";

const BannerNav = () => {
  const [nameUrl, setNameUrl] = useState("");

  useEffect(() => {
    // Lấy URL hiện tại
    const currentURL = window.location.href;
    // Sử dụng đối tượng URL để trích xuất phần "login"
    const url = new URL(currentURL);
    const Part1 = url.pathname.split("/")[1]; // Lấy phần đầu tiên của đường dẫn
    setNameUrl(Part1);
  }, []);
  return (
    <div className="w-full h-[120px] gradient-banner px-5 md:px-[120px] lg:px-[238px] leading-[120px] ">
      <div className="flex items-center  gap-x-3">
        <IconHome></IconHome>
        <span>
          <IconArrowRight></IconArrowRight>
        </span>
        <h3 className="text-[16px] font-normal text-gray-50 capitalize">
          {nameUrl}
        </h3>
      </div>
    </div>
  );
};

export default BannerNav;
