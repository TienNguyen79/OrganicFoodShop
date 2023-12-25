import React, { Fragment, useEffect, useState } from "react";
import Label from "../components/label/Label";
import Table from "../components/table/Table";
import ProImage from "../modules/product/partsCartAndTym/ProImage";
import ProName from "../modules/product/partsCartAndTym/ProName";
import ProPrice from "../modules/product/partsCartAndTym/ProPrice";
import ProHandleQuantity from "../modules/product/partsDetail/ProHandleQuantity";
import { useForm } from "react-hook-form";
import IconAR2 from "../components/Icons/IconAR2";
import IconClose2 from "../components/Icons/IconClose2";
import Button from "../components/button/Button";
import BoxBill from "../modules/cart/parts/BoxBill";
import GroupJusBeween from "../components/common/GroupJusBeween";
import BillLabel from "../modules/cart/parts/BillLabel";
import Input from "../components/input/Input";
import { useDispatch, useSelector } from "react-redux";
import { cartDelete, cartGetAll, cartUpdate } from "../store/cart/cart-slice";
import { getToken } from "../utils/auth";
import { handleCartDelete } from "../store/cart/cart-handler";
import { Link } from "react-router-dom";
import ProItem2Mobile from "../modules/product/ProItem2Mobile";

const ShoppingCartPage = () => {
  const { control, setValue, handleSubmit, watch } = useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartGetAll(getToken()));
  }, []);

  const { dataCartAll } = useSelector((state) => state.cart);
  console.log(
    "🚀 ~ file: ShoppingCartPage.js:29 ~ ShoppingCartPage ~ dataCartAll:",
    dataCartAll
  );

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // const Arr = [];
    // dataCartAll.map((item) => {
    //   Arr.push(item.current_price * item.pivot.quantity);
    // });
    // const total =
    //   Arr &&
    //   Arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const total = dataCartAll.reduce((accumulator, item) => {
      return accumulator + item.current_price * item.pivot.quantity;
    }, 0);
    setTotalPrice(total);
  }, [dataCartAll]);

  const handleCart = (values) => {
    console.log(
      "🚀 ~ file: ShoppingCartPage.js:52 ~ handleCart ~ values:",
      values
    );
  };
  //hien thị trong mobile
  const [shouldShowMobile, setShouldShowMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      // Kiểm tra kích thước màn hình mobile
      setShouldShowMobile(window.innerWidth < 768);
    };

    // Gọi hàm handleResize khi kích thước màn hình thay đổi
    window.addEventListener("resize", handleResize);

    // Gọi hàm handleResize ngay khi component được mount để kiểm tra kích thước ban đầu
    handleResize();

    // Xóa event listener khi component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="mt-10 mb-[80px]">
      <div className="text-center mb-8">
        <Label className="text-[35px]">My Shopping Cart</Label>
      </div>
      {dataCartAll.length > 0 && !shouldShowMobile ? (
        <form onSubmit={handleSubmit(handleCart)}>
          <div className="grid lg:grid-cols-4 gap-x-6">
            <div className="lg:col-span-3 flex flex-col ">
              <Table>
                <div>
                  <table className="table-fixed w-full">
                    <thead>
                      <tr>
                        <th>product</th>
                        <th>price</th>
                        <th>quantity</th>
                        <th>Subtotal</th>
                        {/* <th></th> */}
                      </tr>
                    </thead>
                  </table>
                </div>
                <div className="h-[400px] overflow-x-auto">
                  <table className="table-auto w-full">
                    <tbody>
                      {dataCartAll.length > 0 &&
                        dataCartAll.map((item) => (
                          <tr key={item?.id}>
                            <td>
                              <Link
                                className="inline-flex items-center gap-x-[6px]"
                                to={`/productDetails/${item?.id}`}
                              >
                                <ProImage
                                  className="w-[100px] h-[100px]"
                                  linkUrl={item?.imageUrl}
                                ></ProImage>
                                <ProName
                                  name={item?.name}
                                  className="block hover:text-primary cursor-pointer"
                                  maxW="max-w-[100px] "
                                ></ProName>
                              </Link>
                            </td>
                            <td>
                              <ProPrice
                                price={item?.current_price.toFixed(2)}
                              ></ProPrice>
                            </td>
                            <td>
                              <ProHandleQuantity
                                control={control}
                                name={`quantity_${item?.id}`} // Sử dụng name có sự khác biệt cho mỗi sản phẩm
                                quantity={item?.pivot?.quantity}
                                id={item?.id}
                                allow={true}
                              ></ProHandleQuantity>
                              {/* <input type="text" value={item?.pivot?.quantity} /> */}
                            </td>
                            <td className="text-gray9 font-medium text-[16px] ">
                              {(
                                item?.current_price * item?.pivot?.quantity
                              ).toFixed(2)}{" "}
                              $
                            </td>
                            <td>
                              <IconClose2
                                onClick={() => {
                                  dispatch(cartDelete(item?.id));
                                }}
                              ></IconClose2>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>

                <div className="footTable">
                  <Button href="/shop" kind="cart">
                    Return to shop
                  </Button>
                </div>
              </Table>

              {/* <div className="mt-6">
                <BoxBill className="flex items-center  ">
                  <Label className="text-[18px] ">Coupon Code</Label>
                  <div className="flex items-center mx-auto gap-x-4">
                    <Input
                      placeholder="Enter code..."
                      control={control}
                      name="coupon"
                      className="w-[320px] !rounded-[43px]"
                    ></Input>
                    <Button kind="secondary">Apply Coupon</Button>
                  </div>
                </BoxBill>
              </div> */}
            </div>
            <div className="lg:col-span-1 md:px-3 md:mt-4 lg:px-0 lg:mt-0">
              <BoxBill>
                <Label className="text-[18px] !font-medium">Cart Total</Label>
                <div className="my-4">
                  <GroupJusBeween className="border-b-[1px] py-2 ">
                    <BillLabel label="Subtotal:"></BillLabel>
                    <ProPrice
                      className="font-semibold"
                      price={totalPrice.toFixed(2)}
                    ></ProPrice>
                  </GroupJusBeween>

                  <GroupJusBeween className="border-b-[1px] py-2 ">
                    <BillLabel label="Shipping:"></BillLabel>
                    <BillLabel
                      label="Free"
                      className="font-medium text-gray9"
                    ></BillLabel>
                  </GroupJusBeween>

                  <GroupJusBeween className="border-b-[1px] py-2 ">
                    <BillLabel label="Total:"></BillLabel>
                    <ProPrice
                      className="font-semibold "
                      price={totalPrice.toFixed(2)}
                    ></ProPrice>
                  </GroupJusBeween>
                </div>
                <div
                  onClick={() => {
                    let data = {
                      products_order: [...dataCartAll],
                      total_price: totalPrice,
                    };
                    var arrayJSON = JSON.stringify(data);
                    localStorage.setItem("orderData", arrayJSON);
                    console.log(
                      "🚀 ~ file: ShoppingCartPage.js:60 ~ handleCart ~ data:",
                      data
                    );
                  }}
                >
                  <Button
                    kind="primary"
                    type="submit"
                    className="w-full hover:opacity-80 hover:scale-110 transition-all"
                    href="/checkout"
                  >
                    Checkout
                  </Button>
                </div>
              </BoxBill>
            </div>
          </div>
        </form>
      ) : dataCartAll.length > 0 && shouldShowMobile ? (
        <Fragment>
          <h1 className="text-end text-[18px]">
            Total:{" "}
            <span className="text-primary font-semibold ">
              {dataCartAll.length}
            </span>
          </h1>
          {dataCartAll.map((item) => (
            <ProItem2Mobile key={item.id} item={item}></ProItem2Mobile>
          ))}
          <div className="mt-8 flex flex-col gap-y-3">
            <div className="flex items-center justify-between">
              <p className="text-[20px] font-semibold">Subtotal</p>
              <h1 className="text-[20px] font-medium">
                {" "}
                ${totalPrice.toFixed(2)}
              </h1>
            </div>
            <p className="text-sm font-normal">
              Taxes and shipping calculated at checkout
            </p>

            <div
              onClick={() => {
                let data = {
                  products_order: [...dataCartAll],
                  total_price: totalPrice,
                };
                var arrayJSON = JSON.stringify(data);
                localStorage.setItem("orderData", arrayJSON);
              }}
            >
              <Button
                kind="primary"
                type="submit"
                className="w-full mt-2 hover:opacity-80 hover:scale-110 transition-all"
                href="/checkout"
              >
                Checkout
              </Button>
            </div>
          </div>
        </Fragment>
      ) : (
        <div>
          <div className="p-10 w-[250px]  md:w-[400px] lg:w-[500px]  mx-auto ">
            <img
              src="https://web.nvnstatic.net/tp/T0199/img/empty_cart.png?v=3"
              alt=""
              className=" object-contain"
            />
          </div>
          <h1 className="text-gray-700 py-5 text-[25px] text-center font-medium">
            N0 ITEMS IN CART
          </h1>
          <Button href="/shop" kind="cart" className="w-[200px] mx-auto">
            Return to shop
          </Button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCartPage;
