import React from "react";
import { useDropdown } from "./dropdown-context2";

const ListInit = ({ children, className = "" }) => {
  const { show } = useDropdown();
  return (
    <div>
      {show && (
        <div
          className={`absolute top-full left-0 w-full h-[195px] overflow-y-scroll scroll-hidden  bg-white shadow-sm ${className}`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default ListInit;
