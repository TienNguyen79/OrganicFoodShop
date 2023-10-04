import React from "react";

const BannerText = ({ text = "text", className = "text-sm font-normal" }) => {
  return <span className={`block text-[#FFF] ${className}`}>{text}</span>;
};

export default BannerText;
