import React from "react";
import { useDropdown } from "./dropdown-context2";

const ListInit = ({ children }) => {
  const { show } = useDropdown();
  return (
    <div>
      {show && (
        <div className="absolute top-full left-0 w-full bg-white shadow-sm">
          {children}
        </div>
      )}
    </div>
  );
};

export default ListInit;
