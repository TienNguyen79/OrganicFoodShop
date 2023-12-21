import React from "react";
import ImageFeaItem from "./parts/ImageFeaItem";
import TitleFeaItem from "./parts/TitleFeaItem";
import DescFeaItem from "./parts/DescFeaItem";

const UtilsFeautureItem = ({ data }) => {
  return (
    <div className="flex flex-col justify-center items-center py-5 md:py-10 lg:py-10 after:absolute after:top-full after:content-[''] after:w-[260px] after:h-[1px] after:bg-gray-200  after:hover:bg-primary after:hover:h-[2px]  ">
      <ImageFeaItem url={data.url}></ImageFeaItem>
      <TitleFeaItem title={data.title}></TitleFeaItem>
      <DescFeaItem contentDesc={data.contentDesc}></DescFeaItem>
    </div>
  );
};

export default UtilsFeautureItem;
