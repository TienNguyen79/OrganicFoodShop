import React from "react";

const ProTitle = ({ title = "Chinese Cabbage", className = "" }) => {
  return (
    <h2 className={`${className} text-gray9 text-[30px] font-semibold`}>
      {title}
    </h2>
  );
};

export default ProTitle;
