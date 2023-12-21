import React from "react";

const DescFeaItem = ({ contentDesc = "This is content" }) => {
  return (
    <p className="block md:text-[12px] lg:text-sm text-gray4 font-normal mt-[8px]">
      {contentDesc}
    </p>
  );
};

export default DescFeaItem;
