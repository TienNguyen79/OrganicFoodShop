import React from "react";
import ProImage from "./partsCartAndTym/ProImage";
import ProName from "./partsCartAndTym/ProName";
import ProPrice from "./partsCartAndTym/ProPrice";
import ProQuantity from "./partsCartAndTym/ProQuantity";

const ProMobileInOrderDetail = ({ item }) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex gap-x-4">
          <ProImage
            className="w-[70px] h-[70px]"
            linkUrl={item?.image}
          ></ProImage>
          <div className="flex flex-col gap-y-3">
            <ProName name={item?.name} maxW="max-w-[200px]"></ProName>
            <div className="flex items-center gap-x-2">
              <ProPrice price={item?.price?.toFixed(2)}></ProPrice>
              <ProQuantity quantity={item?.quantity}></ProQuantity>
            </div>
          </div>
        </div>
        <div>
          <ProPrice
            price={(item?.price * item?.quantity)?.toFixed(2)}
            className="text-[16px] font-semibold"
          ></ProPrice>
        </div>
      </div>
    </div>
  );
};

export default ProMobileInOrderDetail;
