import React from "react";
import Label from "../components/label/Label";
import LabelRedirect from "../components/label/LabelRedirect";
import GroupJusBeween from "../components/common/GroupJusBeween";
import BillLabel from "../modules/cart/parts/BillLabel";
import ProPrice from "../modules/product/partsCartAndTym/ProPrice";
import ProgressStep from "../modules/cart/progress/ProgressStep";
import ProgressBar from "../modules/cart/progress/ProgressBar";
import Table from "../components/table/Table";
import ProImage from "../modules/product/partsCartAndTym/ProImage";
import ProName from "../modules/product/partsCartAndTym/ProName";
import ProQuantity from "../modules/product/partsCartAndTym/ProQuantity";

const OrderDetailsPage = () => {
  return (
    <div>
      <div className="flex items-center justify-between py-4 px-3 ">
        <div className="flex items-center gap-x-2">
          <div className="relative">
            <Label className="text-[20px] ">Order Details</Label>
            <div className="absolute after:bg-primary after:absolute after:contents-'' after:w-[130px] after:h-[2px] "></div>
          </div>

          <div className="h-[4px] w-[4px] rounded-full bg-gray7 "></div>

          <span className="text-gray7 text-sm font-normal">April 24, 2021</span>
          <div className="h-[4px] w-[4px] rounded-full bg-gray7 "></div>

          <span className="text-gray7 text-sm font-normal">3 Product</span>
        </div>

        <LabelRedirect
          icon=""
          className="text-sm  font-medium"
          title="Back to List"
          url="/order_history"
        ></LabelRedirect>
      </div>

      <div className="grid grid-cols-3 mt-3 gap-x-6">
        <div className="col-span-2 flex ">
          <div className=" pl-[20px] pb-[20px] pr-[10px]  border-2 rounded-tl-lg rounded-bl-lg">
            <h1 className="text-[#999] text-sm font-medium uppercase py-[18px] border-b-2">
              Billing Address
            </h1>
            <div>
              <h1 className="text-gray9 font-medium text-[18px] mt-3">
                Dainne Russell
              </h1>
              <p className="text-gray6 text-sm font-normal mt-2">
                4140 Parker Rd. Allentown, New Mexico 31134
              </p>

              <div className="mt-9">
                <h1 className="text-[#999] text-[12px] font-medium uppercase">
                  Email
                </h1>

                <span className="text-gray9 text-sm font-normal">
                  dainne.ressell@gmail.com
                </span>
              </div>
              <div className="mt-4">
                <h1 className="text-[#999] text-[12px] font-medium uppercase">
                  Email
                </h1>

                <span className="text-gray9 text-sm font-normal">
                  dainne.ressell@gmail.com
                </span>
              </div>
            </div>
          </div>
          <div className=" pl-[20px] pb-[20px] pr-[10px]  border-2  rounded-tr-lg rounded-br-lg ">
            <h1 className="text-[#999] text-sm font-medium uppercase py-[18px] border-b-2 ">
              Shipping Address
            </h1>
            <div>
              <h1 className="text-gray9 font-medium text-[18px] mt-3">
                Dainne Russell
              </h1>
              <p className="text-gray6 text-sm font-normal mt-2">
                4140 Parker Rd. Allentown, New Mexico 31134
              </p>

              <div className="mt-9">
                <h1 className="text-[#999] text-[12px] font-medium uppercase">
                  Email
                </h1>

                <span className="text-gray9 text-sm font-normal">
                  dainne.ressell@gmail.com
                </span>
              </div>
              <div className="mt-4">
                <h1 className="text-[#999] text-[12px] font-medium uppercase">
                  Email
                </h1>

                <span className="text-gray9 text-sm font-normal">
                  dainne.ressell@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 pl-[20px]  pr-[10px]  border-2 rounded-lg">
          <div className="py-[18px] px-[10px] flex  gap-x-6 border-b-2">
            <div className=" flex flex-col">
              <h1 className="text-[#999] text-[12px] font-medium uppercase">
                Order ID
              </h1>

              <span className="text-gray9 text-sm font-normal">#4152</span>
            </div>
            <div className=" flex flex-col">
              <h1 className="text-[#999] text-[12px] font-medium uppercase">
                Pay Method
              </h1>

              <span className="text-gray9 text-sm font-normal">Cash</span>
            </div>
          </div>

          <div className="pt-3">
            <GroupJusBeween className="border-b-[1px] py-2 ">
              <BillLabel label="Subtotal:"></BillLabel>
              <ProPrice className="font-medium" price={500.44}></ProPrice>
            </GroupJusBeween>
            <GroupJusBeween className="border-b-[1px] py-2 ">
              <BillLabel label="Discount:"></BillLabel>
              <span className="inline-block px-[10px] py-1 rounded-2xl  font-medium">
                50%
              </span>
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
                className="font-semibold !text-darkPrimary"
                price={500.55}
              ></ProPrice>
            </GroupJusBeween>
          </div>
        </div>
      </div>

      <div className="mt-10 flex items-center">
        <div className="relative">
          <ProgressStep></ProgressStep>

          <ProgressBar
            className="top-[16px] left-[68px] "
            width="w-[100%]"
          ></ProgressBar>
        </div>
        <div className="relative ml-20">
          <ProgressStep></ProgressStep>

          <ProgressBar
            className="top-[16px] left-[68px] "
            width="w-[60%]"
          ></ProgressBar>
        </div>
      </div>

      <div className="mt-10">
        <Table>
          <table>
            <thead>
              <tr>
                <th>product</th>
                <th>price</th>
                <th>quantity</th>
                <th>Subtotal</th>
                <th>Evaluate</th>

                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="inline-flex items-center gap-x-[6px]">
                    <ProImage
                      className="w-[70px] h-[70px]"
                      //   linkUrl={item?.imageUrl}
                    ></ProImage>
                    <ProName
                      //   name={item?.name}
                      className="inline-block"
                      maxW="300px"
                    ></ProName>
                  </div>
                </td>
                <td>
                  {" "}
                  <ProPrice price={400}></ProPrice>
                </td>
                <td className="text-center">
                  <ProQuantity quantity={5}></ProQuantity>
                </td>
                <td>
                  <ProPrice price={500.44}></ProPrice>
                </td>
                <td>
                  <LabelRedirect
                    icon=""
                    className="text-sm  font-medium"
                    title="Đánh giá"
                  ></LabelRedirect>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="inline-flex items-center gap-x-[6px]">
                    <ProImage
                      className="w-[70px] h-[70px]"
                      //   linkUrl={item?.imageUrl}
                    ></ProImage>
                    <ProName
                      //   name={item?.name}
                      className="inline-block"
                      maxW="300px"
                    ></ProName>
                  </div>
                </td>
                <td>
                  {" "}
                  <ProPrice price={400}></ProPrice>
                </td>
                <td className="text-center">
                  <ProQuantity quantity={5}></ProQuantity>
                </td>
                <td>
                  <ProPrice price={500.44}></ProPrice>
                </td>
              </tr>

              <tr>
                <td>
                  <div className="inline-flex items-center gap-x-[6px]">
                    <ProImage
                      className="w-[70px] h-[70px]"
                      //   linkUrl={item?.imageUrl}
                    ></ProImage>
                    <ProName
                      //   name={item?.name}
                      className="inline-block"
                      maxW="300px"
                    ></ProName>
                  </div>
                </td>
                <td>
                  {" "}
                  <ProPrice price={400}></ProPrice>
                </td>
                <td className="text-center">
                  <ProQuantity quantity={5}></ProQuantity>
                </td>
                <td>
                  <ProPrice price={500.44}></ProPrice>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="inline-flex items-center gap-x-[6px]">
                    <ProImage
                      className="w-[70px] h-[70px]"
                      //   linkUrl={item?.imageUrl}
                    ></ProImage>
                    <ProName
                      //   name={item?.name}
                      className="inline-block"
                      maxW="300px"
                    ></ProName>
                  </div>
                </td>
                <td>
                  {" "}
                  <ProPrice price={400}></ProPrice>
                </td>
                <td className="text-center">
                  <ProQuantity quantity={5}></ProQuantity>
                </td>
                <td>
                  <ProPrice price={500.44}></ProPrice>
                </td>
              </tr>
            </tbody>
          </table>
        </Table>
      </div>
    </div>
  );
};

export default OrderDetailsPage;
