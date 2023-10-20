import React from "react";
import Overlay from "../../components/common/Overlay";
import IconClose from "../../components/Icons/IconClose";
import Button from "../../components/button/Button";
import CartPopupItem from "./CartPopupItem";

const CartPopup = ({
  openCart = "invisible",
  isClickClose,
  onClose = () => {},
}) => {
  return (
    <div className="relative">
      <Overlay open={openCart} onClick={onClose}></Overlay>
      <div
        className={`fixed bg-white top-0 z-50 right-0 bottom-0 w-[400px] p-10 flex flex-col ${openCart}`}
      >
        <div className="flex items-center justify-between">
          <span className="text-gray9 text-[20px] font-medium">
            Shopping Card (2)
          </span>
          <span className="cursor-pointer" onClick={onClose}>
            <IconClose color="black"></IconClose>
          </span>
        </div>
        <div className="flex-1 overflow-y-auto scroll-hidden ">
          <CartPopupItem></CartPopupItem>
          <CartPopupItem></CartPopupItem>
          <CartPopupItem></CartPopupItem>
          <CartPopupItem></CartPopupItem>
          <CartPopupItem></CartPopupItem>
          <CartPopupItem></CartPopupItem>
          <CartPopupItem></CartPopupItem>
        </div>

        <div>
          <div className="flex items-center justify-between py-6">
            <span className="text-gray9 text-[16px] font-normal">
              2 Product
            </span>
            <span className="text-gray9 text-[16px] font-semibold">$26.00</span>
          </div>
          <div className="flex flex-col gap-y-3">
            <Button kind="primary">CheckOut</Button>
            <Button kind="secondary">Go to Cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;
