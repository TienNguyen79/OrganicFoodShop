import React from "react";

const ProPrice = ({ priceOld = "$20.99", currentPrice = "$14.99" }) => {
  return (
    <div className="flex items-center">
      <span className="block text-gray9 font-medium text-[16px]">
        {currentPrice}
      </span>
      <span className="block text-gray4 font-normal text-[16px] line-through ml-[2px]">
        {priceOld}
      </span>
    </div>
  );
};

export default ProPrice;
