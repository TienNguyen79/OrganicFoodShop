import React from "react";

const ProSale = ({ percent = 20 }) => {
  return (
    <span className="inline-block px-[10px] py-1 rounded-2xl bg-[#FBDBDA] text-danger font-medium">
      {percent}% Off
    </span>
  );
};

export default ProSale;
