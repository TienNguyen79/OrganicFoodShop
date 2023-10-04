import React from "react";

const BannerTitle = ({
  title = "Fruit & Vegetable",
  className = "text-[36px]",
}) => {
  return <h1 className={`font-semibold text-white ${className}`}>{title}</h1>;
};

export default BannerTitle;
