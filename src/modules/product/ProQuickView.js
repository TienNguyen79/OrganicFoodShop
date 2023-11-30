import React, { useState } from "react";
import Overlay from "../../components/common/Overlay";
import IconClose from "../../components/Icons/IconClose";
import ProDetailItem from "./ProDetailItem";
import { useSelector } from "react-redux";

const ProQuickView = ({
  open = "invisible",
  isClickClose,
  onClose = () => {},
  className = "top-[130px]",
}) => {
  const { dataQuickview } = useSelector((state) => state.product);

  return (
    <div
      className={`relative w-full h-full   flex justify-center items-center  ${open} ${className} `}
    >
      <Overlay open={open} onClick={onClose}></Overlay>

      <div
        className={`fixed  bg-white w-full z-50 max-w-[1200px] p-10 transition-all duration-300 rounded-lg ease-out  ${
          open === "visible" ? "translate-y-[0px]" : "-translate-y-[800px]"
        } `}
      >
        <span
          className="absolute right-[10px] top-[-34px]  cursor-pointer "
          onClick={onClose}
        >
          <IconClose></IconClose>
        </span>
        <div>
          <ProDetailItem
            data={dataQuickview}
            isClickClose={isClickClose}
            onClose={onClose}
          ></ProDetailItem>
        </div>
      </div>
    </div>
  );
};

export default ProQuickView;
