import React from "react";

const ProQuantity = ({ quantity = 5, className = "" }) => {
  return (
    <div className={`text-gray5 text-sm font-normal ${className}`}>
      x {quantity}
    </div>
  );
};

export default ProQuantity;
