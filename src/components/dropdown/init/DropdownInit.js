import React, { useState } from "react";
import { DropdownProvider } from "./dropdown-context2";

const DropdownInit = ({ children, className, ...props }) => {
  return (
    <DropdownProvider {...props}>
      <div className={`relative inline-block w-full z-[8] mb-5 ${className}`}>
        {children}
      </div>
    </DropdownProvider>
  );
};

export default DropdownInit;
