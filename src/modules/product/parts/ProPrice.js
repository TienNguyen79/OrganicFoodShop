import React from "react";

const ProPrice = ({
  priceOld = "20.99",
  currentPrice = "14.99",
  unit = "$",
  hover = "",
}) => {
  return (
    <div className={`flex items-center ${hover}`}>
      <span className="block text-gray9 font-medium text-[16px]">
        <span>{unit}</span>
        {currentPrice}
      </span>
      <span className="block text-gray4 font-normal text-[16px] line-through ml-[2px]">
        <span>{unit}</span>
        {priceOld}
      </span>
    </div>
  );
};

export default ProPrice;
