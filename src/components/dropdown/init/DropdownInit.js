import React, { useState } from "react";
import { DropdownProvider } from "./dropdown-context2";

const DropdownInit = ({ children, ...props }) => {
  return (
    <DropdownProvider {...props}>
      <div className="relative inline-block w-full z-20 mb-5 ">{children}</div>
    </DropdownProvider>
  );
};

export default DropdownInit;
