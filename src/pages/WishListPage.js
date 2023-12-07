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
import { Link } from "react-router-dom";

const WishListPage = () => {
  const dispatch = useDispatch();

  console.log("🚀 ~ file: WishListPage.js:19 ~ getToken:999", getToken());
  useEffect(() => {
    dispatch(wishListGetAll(getToken()));
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
      {dataWishListAll.length > 0 ? (
        <div>
          <Table>
            <div className="w-full">
              <table className="table-fixed w-full">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>price</th>
                    <th>Stock Status</th>
                    <th>Actions</th>
                    {/* <th></th> */}
                  </tr>
                </thead>
              </table>
            </div>
            <div className="h-[400px] overflow-x-auto">
              <table className="table-auto w-full">
                <tbody className="">
                  {dataWishListAll.length > 0 &&
                    dataWishListAll.map((item) => (
                      <tr key={item?.id}>
                        <td>
                          <Link
                            className="inline-flex items-center gap-x-[6px] "
                            to={`/productDetails/${item?.id}`}
                          >
                            <ProImage
                              className="w-[100px] h-[100px]"
                              linkUrl={item?.imageUrl}
                            ></ProImage>

                            <ProName
                              name={item?.name}
                              className="inline-block  hover:text-primary"
                              maxW="max-w-[160px]"
                            ></ProName>
                          </Link>
                        </td>
                        <td>
                          <ProPrice
                            priceOld={item?.price?.slice(0, 5)}
                            currentPrice={item?.current_price?.toFixed(2)}
                          ></ProPrice>
                        </td>
                        <td>
                          <ProLabel
                            className="inline-block"
                            kind={
                              item?.quantity > 0 ? "Instock" : "Out of Stock"
                            }
                            label={
                              item?.quantity > 0 ? "Instock" : "Out of Stock"
                            }
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
            </div>

            <div className="footTable">
              {" "}
              <div className="flex gap-x-2 items-center">
                <span className="text-gray9 text-sm font-normal">
                  Payment:{" "}
                </span>
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
      ) : (
        <div>
          <div className="p-10 w-[500px]  mx-auto ">
            <img
              src="https://www.shopperswarehouse.com/assets/e_website/assets/site_image/empty_wishlist.png"
              alt=""
              className=" object-contain"
            />
          </div>

          <Button href="/shop" kind="cart" className="w-[200px] mx-auto">
            Return to shop
          </Button>
        </div>
      )}
    </div>
  );
};

export default WishListPage;
