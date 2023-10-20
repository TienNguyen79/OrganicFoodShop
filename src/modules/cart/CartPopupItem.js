import React from "react";
import ProImage from "../product/partsCartAndTym/ProImage";
import ProName from "../product/partsCartAndTym/ProName";
import ProQuantity from "../product/partsCartAndTym/ProQuantity";
import ProPrice from "../product/partsCartAndTym/ProPrice";
import IconClose2 from "../../components/Icons/IconClose2";

const CartPopupItem = () => {
  return (
    <div className="flex items-center justify-between mt-6">
      <div className="flex items-center gap-x-2">
        <ProImage className="w-[80px] h-[80px]"></ProImage>
        <div>
          <ProName className="text-sm"></ProName>
          <div className="flex items-baseline gap-x-1">
            <ProPrice></ProPrice>
            <ProQuantity></ProQuantity>
          </div>
        </div>
      </div>
      <div className="cursor-pointer">
        <IconClose2></IconClose2>
      </div>
    </div>
  );
};

export default CartPopupItem;
