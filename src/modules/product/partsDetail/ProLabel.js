import React from "react";

const ProLabel = ({ label = "InStock", kind = "Instock", className = "" }) => {
  if (kind === "Instock") {
    return (
      <span
        className={`${className} bg-softPrimary text-primary block py-1 px-2 rounded-[4px]`}
      >
        {label}
      </span>
    );
  }

  return (
    <span
      className={`${className} bg-[#FBDBDA] text-danger block py-1 px-2 rounded-[4px]`}
    >
      {label}
    </span>
  );
};

export default ProLabel;
