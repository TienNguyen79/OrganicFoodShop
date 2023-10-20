import React from "react";
import ProFeauture from "./ProFeauture";

const ProAdditionalInfo = ({ isHidden, data }) => {
  return (
    <div className={`${isHidden} grid grid-cols-3 gap-x-[80px] `}>
      <div className="col-span-2">
        <div className="flex items-center gap-x-7 mt-3">
          <span className="text-gray9 text-sm font-normal">Weight:</span>
          <span className="text-gray6 text-sm font-normal">{data?.weight}</span>
        </div>
        <div className="flex items-center gap-x-7 mt-3">
          <span className="text-gray9 text-sm font-normal">Color:</span>
          <span className="text-gray6 text-sm font-normal">Green</span>
        </div>
        <div className="flex items-center gap-x-7 mt-3">
          <span className="text-gray9 text-sm font-normal">Type:</span>
          <span className="text-gray6 text-sm font-normal">Organic</span>
        </div>
        <div className="flex items-center gap-x-7 mt-3">
          <span className="text-gray9 text-sm font-normal">Category:</span>
          <span className="text-gray6 text-sm font-normal">
            {data?.category.name}
          </span>
        </div>
        <div className="flex items-center gap-x-7 mt-3">
          <span className="text-gray9 text-sm font-normal">Stock Status:</span>
          <span className="text-gray6 text-sm font-normal">
            Available ({data?.quantity})
          </span>
        </div>
      </div>
      <div className="col-span-1">
        <ProFeauture
          urlImage={data?.imageUrl}
          percentDiscount={data?.average_rating}
          nameCate={data?.category?.name}
        ></ProFeauture>
      </div>
    </div>
  );
};

export default ProAdditionalInfo;
