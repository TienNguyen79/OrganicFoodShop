import React from "react";
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

const ShoppingCartPage = () => {
  const { control } = useForm();
  return (
    <div className="mt-10 mb-[80px]">
      <div className="text-center mb-8">
        <Label className="text-[35px]">My Shopping Cart</Label>
      </div>

      <div className="grid grid-cols-3 gap-x-6">
        <div className="col-span-2 flex flex-col">
          <Table>
            <table>
              <thead>
                <tr>
                  <th>product</th>
                  <th>price</th>
                  <th>quantity</th>
                  <th>Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="inline-flex items-center gap-x-[6px]">
                      <ProImage className="w-[100px] h-[100px]  "></ProImage>
                      <ProName className="inline-block" maxW="300px"></ProName>
                    </div>
                  </td>
                  <td>
                    <ProPrice price={20}></ProPrice>
                  </td>
                  <td>
                    <ProHandleQuantity
                      control={control}
                      name="quantity"
                    ></ProHandleQuantity>
                  </td>
                  <td className="text-gray9 font-medium text-[16px]">80$</td>
                  <td className="cursor-pointer">
                    <IconClose2></IconClose2>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="footTable">
              <Button kind="cart">Return to shop</Button>
              <Button kind="cart">Update Cart</Button>
            </div>
          </Table>

          <div className="mt-6">
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
          </div>
        </div>
        <div className="col-span-1">
          <form>
            <BoxBill>
              <Label className="text-[18px] !font-medium">Cart Total</Label>
              <div className="my-4">
                <GroupJusBeween className="border-b-[1px] py-2 ">
                  <BillLabel label="Subtotal:"></BillLabel>
                  <ProPrice className="font-semibold" price={20}></ProPrice>
                </GroupJusBeween>

                <GroupJusBeween className="border-b-[1px] py-2 ">
                  <BillLabel label="Shipping::"></BillLabel>
                  <BillLabel
                    label="Free"
                    className="font-medium text-gray9"
                  ></BillLabel>
                </GroupJusBeween>

                <GroupJusBeween className="border-b-[1px] py-2 ">
                  <BillLabel label="Total::"></BillLabel>
                  <ProPrice className="font-semibold" price={20}></ProPrice>
                </GroupJusBeween>
              </div>
              <div>
                <Button kind="primary" type="submit" className="w-full">
                  Proceed to checkout
                </Button>
              </div>
            </BoxBill>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
