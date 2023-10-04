import React from "react";
import CateImage from "./parts/CateImage";
import CateTitle from "./parts/CateTitle";
import CateQuantity from "./parts/CateQuantity";

const CategoryItem = () => {
  return (
    <div className="pt-[32px] pb-[24px] border  border-gray-200 bg-white flex flex-col justify-center items-center rounded-md mb-[80px] shadowgreen hover:border hover:border-primary cursor-pointer group ">
      <CateImage></CateImage>
      <CateTitle></CateTitle>
      <CateQuantity></CateQuantity>
    </div>
  );
};

export default CategoryItem;
