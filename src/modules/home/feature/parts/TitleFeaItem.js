import React from "react";

const TitleFeaItem = ({ title = "This is title" }) => {
  return (
    <span className="block text-gray9 md:text-sm lg:text-[16px] font-semibold mt-4">
      {title}
    </span>
  );
};

export default TitleFeaItem;
