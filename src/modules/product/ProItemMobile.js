import React from "react";
import ProImage from "./parts/ProImage";
import ProName from "./partsCartAndTym/ProName";
import ProLabel from "./partsDetail/ProLabel";
import IconClose from "../../components/Icons/IconClose";
import IconClose2 from "../../components/Icons/IconClose2";
import Button from "../../components/button/Button";
import ProPrice from "./parts/ProPrice";
import { getToken } from "../../utils/auth";
import { cartAddNew, wishListDelete } from "../../store/cart/cart-slice";
import { useDispatch } from "react-redux";

const ProItemMobile = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="border-b-[1px] py-3 px-2">
      <div className="flex items-center gap-x-1 ">
        <ProImage
          className="w-[80px] h-[80px]"
          linkUrl={item?.imageUrl}
        ></ProImage>
        <div className="flex flex-col gap-y-2  flex-1">
          <ProName maxW="max-w-[220px]" name={item?.name}></ProName>
          <ProLabel
            className="w-[150px] text-center"
            kind={item?.quantity > 0 ? "Instock" : "Out of Stock"}
            label={item?.quantity > 0 ? "Instock" : "Out of Stock"}
          ></ProLabel>
        </div>
        <span>
          <IconClose2
            onClick={() => {
              dispatch(wishListDelete(item?.pivot?.product_id));
            }}
          ></IconClose2>
        </span>
      </div>
      <div className="mt-2 flex justify-between px-2 items-center">
        <ProPrice
          className="block text-[14px]"
          priceOld={item?.price?.slice(0, 5)}
          currentPrice={item?.current_price?.toFixed(2)}
        ></ProPrice>
        <button
          kind="primary"
          className="text-primary font-semibold"
          onClick={() => {
            dispatch(
              cartAddNew({
                product_id: item?.pivot?.product_id,
                quantity: 1,
                token: getToken(),
              })
            );
          }}
        >
          + Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProItemMobile;
