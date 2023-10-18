import React from "react";

const ProPrice = ({
  priceOld = "20.99",
  currentPrice = "14.99",
  unit = "$",
}) => {
  return (
    <div className={`flex items-center  gap-x-1 mt-4`}>
      <span className=" flex text-gray4 font-normal text-[20px] line-through ml-[2px]">
        <span>{unit}</span>
        <span
          title={priceOld}
          className="block whitespace-nowrap overflow-hidden overflow-ellipsis max-w-[60px]"
        >
          {priceOld}
        </span>
      </span>
      <span className="block text-darkPrimary font-medium text-[24px]">
        <span>{unit}</span>
        {currentPrice}
      </span>
    </div>
  );
};

export default ProPrice;
