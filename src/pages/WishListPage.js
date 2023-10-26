import React from "react";
import Label from "../components/label/Label";
import Table from "../components/table/Table";
import ProImage from "../modules/product/partsCartAndTym/ProImage";
import ProName from "../modules/product/partsCartAndTym/ProName";
import ProPrice from "../modules/product/partsDetail/ProPrice";
import ProLabel from "../modules/product/partsDetail/ProLabel";
import Button from "../components/button/Button";
import IconClose2 from "../components/Icons/IconClose2";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  cartAddNew,
  wishListAddNew,
  wishListDelete,
  wishListGetAll,
} from "../store/cart/cart-slice";
import { getToken } from "../utils/auth";

const WishListPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wishListGetAll());
  }, []);

  const { dataWishListAll } = useSelector((state) => state.cart);
  console.log(
    "🚀 ~ file: WishListPage.js:23 ~ WishListPage ~ dataWishListAll:",
    dataWishListAll
  );
  return (
    <div className="mt-10 mb-[80px]">
      <div className="text-center mb-8">
        <Label className="text-[35px]">My Wishlist</Label>
      </div>

      <div>
        <Table>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>price</th>
                <th>Stock Status</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody style={{ maxHeight: "200px", overflowY: "auto" }}>
              {dataWishListAll.length > 0 &&
                dataWishListAll.map((item) => (
                  <tr key={item?.id}>
                    <td>
                      <div className="inline-flex items-center gap-x-[6px]">
                        <ProImage
                          className="w-[100px] h-[100px]"
                          linkUrl={item?.imageUrl}
                        ></ProImage>
                        <ProName
                          name={item?.name}
                          className="inline-block"
                          maxW="300px"
                        ></ProName>
                      </div>
                    </td>
                    <td>
                      <ProPrice
                        priceOld={item?.price.toFixed(2)}
                        currentPrice={item?.current_price.toFixed(2)}
                      ></ProPrice>
                    </td>
                    <td>
                      <ProLabel
                        className="inline-block"
                        kind={item?.quantity > 0 ? "Instock" : "Out of Stock"}
                        label={item?.quantity > 0 ? "Instock" : "Out of Stock"}
                      ></ProLabel>
                    </td>
                    <td>
                      <Button
                        onClick={() => {
                          dispatch(
                            cartAddNew({
                              product_id: item?.pivot?.product_id,
                              quantity: 1,
                              token: getToken(),
                            })
                          );
                        }}
                        kind="primary"
                        className="transition-all  hover:opacity-80 hover:scale-110"
                      >
                        Add to Cart
                      </Button>
                    </td>
                    <td>
                      <IconClose2
                        onClick={() => {
                          dispatch(wishListDelete(item?.pivot?.product_id));
                        }}
                      ></IconClose2>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          <div className="footTable">
            {" "}
            <div className="flex gap-x-2 items-center">
              <span className="text-gray9 text-sm font-normal">Payment: </span>
              <div className="flex gap-x-2 items-center">
                <img src="/ApplePay.png" alt="" />
                <img src="/Visa.png" alt="" />
                <img src="/Discover.png" alt="" />
                <img src="/Mastercard.png" alt="" />
              </div>
            </div>
          </div>
        </Table>
      </div>
    </div>
  );
};

export default WishListPage;
