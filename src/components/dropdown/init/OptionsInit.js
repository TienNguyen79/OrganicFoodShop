import React from "react";
import { useDropdown } from "./dropdown-context2";

const OptionsInit = (props) => {
  const { onClick, className = "" } = props;
  const { setShow } = useDropdown();

  const handleClick = () => {
    onClick && onClick(); //khi có onClick thì thực hiện hàm onClick
    setShow(false); //đồng thời setShow = false để đóng dropdown
  };

  return (
    <div
      className={`px-5 py-4 cursor-pointer flex items-center justify-between  ${className} `}
      onClick={handleClick}
    >
      {props.children}
    </div>
  );
};

export default OptionsInit;
