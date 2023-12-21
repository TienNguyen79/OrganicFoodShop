import React from "react";

const ProPrice = ({
  priceOld = "20.99",
  currentPrice = "14.99",
  unit = "$",
  hover = "",
}) => {
  return (
    <div className={`flex items-center ${hover}`}>
      <span className="block text-gray9 font-medium md:text-[14px] lg:text-[16px]">
        <span>{unit}</span>
        {currentPrice}
      </span>
      <span className=" flex text-gray4 font-normal md:text-[14px] lg:text-[16px] line-through ml-[2px]">
        <span>{unit}</span>
        <span
          title={priceOld}
          className="block whitespace-nowrap overflow-hidden md:text-[14px] lg:text-[16px] overflow-ellipsis max-w-[60px]"
        >
          {priceOld}
        </span>
      </span>
    </div>
  );
};

export default ProPrice;
