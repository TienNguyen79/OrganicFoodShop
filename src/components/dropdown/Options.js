import React from "react";
import { useDropdown } from "./dropdown-context";

const Options = (props) => {
  const { onClick } = props;
  // const { setShow } = useDropdown();

  const handleClick = () => {
    onClick && onClick(); //khi có onClick thì thực hiện hàm onClick
    // setShow(false); //đồng thời setShow = false để đóng dropdown
  };

  return (
    <div
      className="pb-3 py-4 cursor-pointer flex items-center justify-between  hover:text-primary"
      onClick={handleClick}
    >
      {props.children}
    </div>
  );
};

export default Options;
