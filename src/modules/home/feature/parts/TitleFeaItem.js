import React from "react";

const TitleFeaItem = ({ title = "This is title" }) => {
  return (
    <span className="text-gray9 text-[16px] font-semibold mt-4">{title}</span>
  );
};

export default TitleFeaItem;
