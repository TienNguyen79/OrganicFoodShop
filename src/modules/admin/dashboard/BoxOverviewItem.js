import React from "react";
import IconHeart from "../../../components/Icons/IconHeart";

const BoxOverviewItem = ({
  icon = <IconHeart></IconHeart>,
  title = "Today Sale",
  unit = "",
  colorIcon,
  quantity = 12345678,
}) => {
  return (
    <div className="flex items-center  justify-between bg-white rounded-md shadow-lg py-4 px-6">
      <div className={`${colorIcon}`}>{icon}</div>
      <div>
        <h1 className="text-[16px] font-medium text-gray-700">{title}</h1>
        <span className="block text-[22px] font-semibold text-gary9 pt-2">
          {unit} {quantity}
        </span>
      </div>
    </div>
  );
};

export default BoxOverviewItem;
