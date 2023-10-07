import React from "react";

const ProSale = ({ discount = "50" }) => {
  return (
    <div className="absolute top-4 left-3 text-sm font-medium py-[3px] px-[8px] bg-danger rounded text-white">
      Sale <span>{discount}%</span>
    </div>
  );
};

export default ProSale;
