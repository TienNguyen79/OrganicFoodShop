import React from "react";
import { useDropdown } from "./dropdown-context";

const List = ({ children }) => {
  const { show } = useDropdown();
  return (
    <div>
      {show && (
        <div className="  w-full bg-white pb-5 text-text3 mt-2 z-20  border-b-2">
          {children}
        </div>
      )}
    </div>
  );
};

export default List;
