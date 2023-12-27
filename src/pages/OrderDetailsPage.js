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
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { orderDetails, orderUserCancel } from "../store/order/order-slice";
import { authCheckToken } from "../store/auth/auth-slice";
import { convertDate } from "../constants/global";
import Button from "../components/button/Button";
import Swal from "sweetalert2";
import ProMobileInOrderDetail from "../modules/product/ProMobileInOrderDetail";

const OrderDetailsPage = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();

  useEffect(() => {
    dispatch(orderDetails(slug));
  }, []);
  useEffect(() => {
    dispatch(authCheckToken());
  }, []);

  const { dataOrderDetails } = useSelector((state) => state.order);

  const { user, accessToken } = useSelector((state) => state.auth);
  console.log(
    "🚀 ~ file: OrderDetailsPage.js:38 ~ OrderDetailsPage ~ user:",
    user
  );

  const handleCancelOrder = () => {
    Swal.fire({
      title: `Are you sure to cancel orderID  <span class="capitalize font-semibold italic underline text-darkPrimary">${slug}</span>?`,
      // text: "You won't be able to revert this!",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I'm Sure!",
    }).then((result) => {
      if (result.isConfirmed) {
        // dispatch(CateDelete({ name: item.name, id: item.id }));
        dispatch(orderUserCancel({ id: slug, page: 1 }));
      }
    });
  };

  const processOrder = (data) => {
    switch (data) {
      case "0":
        return (
          <div className="mt-10 flex items-center ml-10">
            <div className="relative">
              <ProgressStep className="bg-[#F2F2F2] !text-gray-500"></ProgressStep>

              <ProgressBar
                className="top-[16px] left-[70px] "
                width="w-[0%]"
              ></ProgressBar>
            </div>
            <div className="relative left-[90px]">
              <ProgressStep
                NameStep="Processing"
                text="02"
                className="bg-[#F2F2F2] !text-gray-500"
              ></ProgressStep>

              <ProgressBar
                className="top-[16px] left-[56px] "
                width="w-[0%]"
              ></ProgressBar>
            </div>

            <div className="relative left-[200px]">
              <ProgressStep
                NameStep="On the way"
                text="03"
                className="bg-[#F2F2F2] !text-gray-500"
              ></ProgressStep>

              <ProgressBar
                className="top-[16px] left-[57px] "
                width="w-[0%]"
              ></ProgressBar>
            </div>
            <div className="relative left-[300px]">
              <ProgressStep
                NameStep="Delivered"
                text="04"
                className="bg-[#F2F2F2] !text-gray-500"
              ></ProgressStep>
            </div>
          </div>
        );
      case "1":
        return (
          <div className="mt-10 flex items-center ml-10">
            <div className="relative">
              <ProgressStep cssName="text-primary font-medium"></ProgressStep>

              <ProgressBar
                className="top-[16px] left-[70px] "
                width="w-[50%]"
              ></ProgressBar>
            </div>
            <div className="relative left-[90px]">
              <ProgressStep
                NameStep="Processing"
                text="02"
                className="bg-[#F2F2F2] !text-gray-500"
              ></ProgressStep>

              <ProgressBar
                className="top-[16px] left-[56px] "
                width="w-[0%]"
              ></ProgressBar>
            </div>

            <div className="relative left-[200px]">
              <ProgressStep
                NameStep="On the way"
                text="03"
                className="bg-[#F2F2F2] !text-gray-500"
              ></ProgressStep>

              <ProgressBar
                className="top-[16px] left-[57px] "
                width="w-[0%]"
              ></ProgressBar>
            </div>
            <div className="relative left-[300px]">
              <ProgressStep
                NameStep="Delivered"
                text="04"
                className="bg-[#F2F2F2] !text-gray-500"
              ></ProgressStep>
            </div>
          </div>
        );
      case "2":
        return (
          <div className="mt-10 flex items-center ml-10">
            <div className="relative">
              <ProgressStep cssName="text-primary font-medium"></ProgressStep>

              <ProgressBar
                className="top-[16px] left-[70px] "
                width="w-[100%]"
              ></ProgressBar>
            </div>
            <div className="relative left-[90px]">
              <ProgressStep
                NameStep="Processing"
                text="02"
                cssName="text-primary font-medium"
              ></ProgressStep>

              <ProgressBar
                className="top-[16px] left-[56px] "
                width="w-[50%]"
              ></ProgressBar>
            </div>

            <div className="relative left-[200px]">
              <ProgressStep
                NameStep="On the way"
                text="03"
                className="bg-[#F2F2F2] !text-gray-500"
              ></ProgressStep>

              <ProgressBar
                className="top-[16px] left-[57px] "
                width="w-[0%]"
              ></ProgressBar>
            </div>
            <div className="relative left-[300px]">
              <ProgressStep
                NameStep="Delivered"
                text="04"
                className="bg-[#F2F2F2] !text-gray-500"
              ></ProgressStep>
            </div>
          </div>
        );
      case "3":
        return (
          <div className="mt-10 flex items-center ml-10">
            <div className="relative">
              <ProgressStep cssName="text-primary font-medium"></ProgressStep>

              <ProgressBar
                className="top-[16px] left-[70px] "
                width="w-[100%]"
              ></ProgressBar>
            </div>
            <div className="relative left-[90px]">
              <ProgressStep
                NameStep="Processing"
                text="02"
                cssName="text-primary font-medium"
              ></ProgressStep>

              <ProgressBar
                className="top-[16px] left-[56px] "
                width="w-[100%]"
              ></ProgressBar>
            </div>

            <div className="relative left-[200px]">
              <ProgressStep
                NameStep="On the way"
                text="03"
                cssName="text-primary font-medium"
              ></ProgressStep>

              <ProgressBar
                className="top-[16px] left-[59px] "
                width="w-[50%]"
              ></ProgressBar>
            </div>
            <div className="relative left-[300px]">
              <ProgressStep
                NameStep="Delivered"
                text="04"
                className="bg-[#F2F2F2] !text-gray-500"
              ></ProgressStep>
            </div>
          </div>
        );
      case "4":
        return (
          <div className="mt-10 flex items-center ml-10">
            <div className="relative">
              <ProgressStep cssName="text-primary font-medium"></ProgressStep>

              <ProgressBar
                className="top-[16px] left-[70px] "
                width="w-[100%]"
              ></ProgressBar>
            </div>
            <div className="relative left-[90px]">
              <ProgressStep
                NameStep="Processing"
                text="02"
                cssName="text-primary font-medium"
              ></ProgressStep>

              <ProgressBar
                className="top-[16px] left-[56px] "
                width="w-[100%]"
              ></ProgressBar>
            </div>

            <div className="relative left-[200px]">
              <ProgressStep
                NameStep="On the way"
                text="03"
                cssName="text-primary font-medium"
              ></ProgressStep>

              <ProgressBar
                className="top-[16px] left-[59px] "
                width="w-[100%]"
              ></ProgressBar>
            </div>
            <div className="relative left-[300px]">
              <ProgressStep
                NameStep="Delivered"
                text="🥳"
                cssName="text-primary font-medium"
              ></ProgressStep>
            </div>
          </div>
        );
      default:
        break;
    }
  };

  const processOrderMobile = (data) => {
    switch (data) {
      case "0":
        return (
          <div className="flex flex-col">
            <div className="flex items-start gap-x-2">
              <div className="flex flex-col justify-center items-center">
                <div className="bg-gray-100 w-[20px] h-[20px] rounded-[50%] p-[2px] flex justify-center items-center ">
                  <div className="w-[12px] h-[12px]  rounded-[50%] "></div>
                </div>
                <div className="h-[60px] w-[1px] bg-gray-100"></div>
              </div>
              <h1 className="text-gray6 text-sm font-medium">Order Revived</h1>
            </div>
            <div className="flex items-start gap-x-2">
              <div className="flex flex-col justify-center items-center">
                <div className="bg-gray-100 w-[20px] h-[20px] rounded-[50%] p-[2px] flex justify-center items-center ">
                  <div className="w-[12px] h-[12px]  rounded-[50%] "></div>
                </div>
                <div className="h-[60px] w-[1px] bg-gray-100"></div>
              </div>
              <h1 className="text-gray6 text-sm font-medium">Processing</h1>
            </div>
            <div className="flex items-start gap-x-2">
              <div className="flex flex-col justify-center items-center">
                <div className="bg-gray-100 w-[20px] h-[20px] rounded-[50%] p-[2px] flex justify-center items-center ">
                  <div className="w-[12px] h-[12px]  rounded-[50%] "></div>
                </div>
                <div className="h-[60px] w-[1px] bg-gray-100"></div>
              </div>
              <h1 className="text-gray6 text-sm font-medium">On The Way</h1>
            </div>
            <div className="flex items-start gap-x-2">
              <div className="flex flex-col justify-center items-center">
                <div className="bg-gray-100 w-[20px] h-[20px] rounded-[50%] p-[2px] flex justify-center items-center ">
                  <div className="w-[12px] h-[12px]  rounded-[50%] "></div>
                </div>
              </div>
              <h1 className="text-gray6 text-sm font-medium">Delivered</h1>
            </div>
          </div>
        );
      case "1":
        return (
          <div className="flex flex-col">
            <div className="flex items-start gap-x-2">
              <div className="flex flex-col justify-center items-center">
                <div className="bg-gray-100 w-[20px] h-[20px] rounded-[50%] p-[2px] flex justify-center items-center ">
                  <div className="w-[12px] h-[12px] bg-primary rounded-[50%] "></div>
                </div>
                <div className="h-[60px] w-[1px] bg-gray-100"></div>
              </div>
              <h1 className="text-gray6 text-sm font-medium">Order Revived</h1>
            </div>
            <div className="flex items-start gap-x-2">
              <div className="flex flex-col justify-center items-center">
                <div className="bg-gray-100 w-[20px] h-[20px] rounded-[50%] p-[2px] flex justify-center items-center ">
                  <div className="w-[12px] h-[12px]  rounded-[50%] "></div>
                </div>
                <div className="h-[60px] w-[1px] bg-gray-100"></div>
              </div>
              <h1 className="text-gray6 text-sm font-medium">Processing</h1>
            </div>
            <div className="flex items-start gap-x-2">
              <div className="flex flex-col justify-center items-center">
                <div className="bg-gray-100 w-[20px] h-[20px] rounded-[50%] p-[2px] flex justify-center items-center ">
                  <div className="w-[12px] h-[12px]  rounded-[50%] "></div>
                </div>
                <div className="h-[60px] w-[1px] bg-gray-100"></div>
              </div>
              <h1 className="text-gray6 text-sm font-medium">On The Way</h1>
            </div>
            <div className="flex items-start gap-x-2">
              <div className="flex flex-col justify-center items-center">
                <div className="bg-gray-100 w-[20px] h-[20px] rounded-[50%] p-[2px] flex justify-center items-center ">
                  <div className="w-[12px] h-[12px]  rounded-[50%] "></div>
                </div>
              </div>
              <h1 className="text-gray6 text-sm font-medium">Delivered</h1>
            </div>
          </div>
        );
      case "2":
        return (
          <div className="flex flex-col">
            <div className="flex items-start gap-x-2">
              <div className="flex flex-col justify-center items-center">
                <div className="bg-gray-100 w-[20px] h-[20px] rounded-[50%] p-[2px] flex justify-center items-center ">
                  <div className="w-[12px] h-[12px] bg-primary rounded-[50%] "></div>
                </div>
                <div className="h-[60px] w-[1px] bg-primary"></div>
              </div>
              <h1 className="text-gray6 text-sm font-medium">Order Revived</h1>
            </div>
            <div className="flex items-start gap-x-2">
              <div className="flex flex-col justify-center items-center">
                <div className="bg-gray-100 w-[20px] h-[20px] rounded-[50%] p-[2px] flex justify-center items-center ">
                  <div className="w-[12px] h-[12px] bg-primary rounded-[50%] "></div>
                </div>
                <div className="h-[60px] w-[1px] bg-gray-100"></div>
              </div>
              <h1 className="text-gray6 text-sm font-medium">Processing</h1>
            </div>
            <div className="flex items-start gap-x-2">
              <div className="flex flex-col justify-center items-center">
                <div className="bg-gray-100 w-[20px] h-[20px] rounded-[50%] p-[2px] flex justify-center items-center ">
                  <div className="w-[12px] h-[12px]  rounded-[50%] "></div>
                </div>
                <div className="h-[60px] w-[1px] bg-gray-100"></div>
              </div>
              <h1 className="text-gray6 text-sm font-medium">On The Way</h1>
            </div>
            <div className="flex items-start gap-x-2">
              <div className="flex flex-col justify-center items-center">
                <div className="bg-gray-100 w-[20px] h-[20px] rounded-[50%] p-[2px] flex justify-center items-center ">
                  <div className="w-[12px] h-[12px]  rounded-[50%] "></div>
                </div>
              </div>
              <h1 className="text-gray6 text-sm font-medium">Delivered</h1>
            </div>
          </div>
        );
      case "3":
        return (
          <div className="flex flex-col">
            <div className="flex items-start gap-x-2">
              <div className="flex flex-col justify-center items-center">
                <div className="bg-gray-100 w-[20px] h-[20px] rounded-[50%] p-[2px] flex justify-center items-center ">
                  <div className="w-[12px] h-[12px] bg-primary rounded-[50%] "></div>
                </div>
                <div className="h-[60px] w-[1px] bg-primary"></div>
              </div>
              <h1 className="text-gray6 text-sm font-medium">Order Revived</h1>
            </div>
            <div className="flex items-start gap-x-2">
              <div className="flex flex-col justify-center items-center">
                <div className="bg-gray-100 w-[20px] h-[20px] rounded-[50%] p-[2px] flex justify-center items-center ">
                  <div className="w-[12px] h-[12px] bg-primary rounded-[50%] "></div>
                </div>
                <div className="h-[60px] w-[1px] bg-primary"></div>
              </div>
              <h1 className="text-gray6 text-sm font-medium">Processing</h1>
            </div>
            <div className="flex items-start gap-x-2">
              <div className="flex flex-col justify-center items-center">
                <div className="bg-gray-100 w-[20px] h-[20px] rounded-[50%] p-[2px] flex justify-center items-center ">
                  <div className="w-[12px] h-[12px] bg-primary  rounded-[50%] "></div>
                </div>
                <div className="h-[60px] w-[1px] bg-gray-100"></div>
              </div>
              <h1 className="text-gray6 text-sm font-medium">On The Way</h1>
            </div>
            <div className="flex items-start gap-x-2">
              <div className="flex flex-col justify-center items-center">
                <div className="bg-gray-100 w-[20px] h-[20px] rounded-[50%] p-[2px] flex justify-center items-center ">
                  <div className="w-[12px] h-[12px]  rounded-[50%] "></div>
                </div>
              </div>
              <h1 className="text-gray6 text-sm font-medium">Delivered</h1>
            </div>
          </div>
        );
      case "4":
        return (
          <div className="flex flex-col">
            <div className="flex items-start gap-x-2">
              <div className="flex flex-col justify-center items-center">
                <div className="bg-gray-100 w-[20px] h-[20px] rounded-[50%] p-[2px] flex justify-center items-center ">
                  <div className="w-[12px] h-[12px] bg-primary rounded-[50%] "></div>
                </div>
                <div className="h-[60px] w-[1px] bg-primary"></div>
              </div>
              <h1 className="text-gray6 text-sm font-medium">Order Revived</h1>
            </div>
            <div className="flex items-start gap-x-2">
              <div className="flex flex-col justify-center items-center">
                <div className="bg-gray-100 w-[20px] h-[20px] rounded-[50%] p-[2px] flex justify-center items-center ">
                  <div className="w-[12px] h-[12px] bg-primary rounded-[50%] "></div>
                </div>
                <div className="h-[60px] w-[1px] bg-primary"></div>
              </div>
              <h1 className="text-gray6 text-sm font-medium">Processing</h1>
            </div>
            <div className="flex items-start gap-x-2">
              <div className="flex flex-col justify-center items-center">
                <div className="bg-gray-100 w-[20px] h-[20px] rounded-[50%] p-[2px] flex justify-center items-center ">
                  <div className="w-[12px] h-[12px] bg-primary  rounded-[50%] "></div>
                </div>
                <div className="h-[60px] w-[1px] bg-primary"></div>
              </div>
              <h1 className="text-gray6 text-sm font-medium">On The Way</h1>
            </div>
            <div className="flex items-start gap-x-2">
              <div className="flex flex-col justify-center items-center">
                <div className="bg-gray-100 w-[20px] h-[20px] rounded-[50%] p-[2px] flex justify-center items-center ">
                  <div className="w-[12px] h-[12px] bg-primary rounded-[50%] "></div>
                </div>
              </div>
              <h1 className="text-gray6 text-sm font-medium">Delivered 🥳</h1>
            </div>
          </div>
        );
      default:
        break;
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row lg:flex-row items-start gap-y-4 md:items-center  lg:items-center justify-between  py-4 px-3 ">
        <div className="flex  items-center  gap-x-2">
          <div className="relative">
            <Label className="text-[20px] ">Order Details</Label>
            <div className="absolute after:bg-primary after:absolute after:contents-'' after:w-[130px] after:h-[2px] "></div>
          </div>

          <div className="h-[4px] w-[4px] rounded-full bg-gray7 "></div>

          <span className="text-gray7 text-sm font-normal">
            {convertDate(dataOrderDetails?.created_at)}
          </span>
          <div className="h-[4px] w-[4px] rounded-full bg-gray7 "></div>

          <span className="text-gray7 text-sm font-normal">
            {dataOrderDetails?.products_order?.length} Product
          </span>
        </div>
        <div className="flex items-center w-full justify-between md:w-auto lg:w-auto gap-x-6">
          {dataOrderDetails?.approval_status === "0" && (
            <Button
              kind="discard"
              className="!py-2 hover:text-white hover:bg-danger transition-all"
              onClick={handleCancelOrder}
            >
              Cancel Order
            </Button>
          )}
          {dataOrderDetails?.approval_status === "5" && (
            <div
              onClick={() => {
                let data = {
                  products_order: [...dataOrderDetails?.products_order],
                  total_price: dataOrderDetails?.total_price,
                };
                var arrayJSON = JSON.stringify(data);
                localStorage.setItem("orderData", arrayJSON);
              }}
            >
              <Button
                kind="secondary2"
                href="/checkout"
                className="!py-2 hover:text-white hover:bg-primary transition-all"
              >
                Buy Back
              </Button>
            </div>
          )}

          <LabelRedirect
            icon=""
            className="text-sm  font-medium"
            title="Back to List"
            url="/order_history"
          ></LabelRedirect>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-y-4 lg:grid-cols-3 mt-3 gap-x-6">
        <div className="  md:col-span-2 lg:col-span-2 flex flex-col md:flex-row lg:flex-row gap-y-6">
          <div className=" pl-[20px] pb-[20px] pr-[10px]  border-2 rounded-tl-lg rounded-bl-lg">
            <h1 className="text-[#999] text-sm font-medium uppercase py-[18px] border-b-2">
              Shop Address
            </h1>
            <div>
              <h1 className="text-gray9 font-medium text-[18px] mt-3">ADMIN</h1>
              <p className="text-gray6 text-sm font-normal mt-2">
                Thường Tín, Hà Nội
              </p>

              <div className="mt-9">
                <h1 className="text-[#999] text-[12px] font-medium uppercase">
                  Email
                </h1>

                <span className="text-gray9 text-sm font-normal">
                  adminNMT@gmail.com
                </span>
              </div>
              <div className="mt-4">
                <h1 className="text-[#999] text-[12px] font-medium uppercase">
                  Phone
                </h1>

                <span className="text-gray9 text-sm font-normal">
                  0919945678
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
                {dataOrderDetails?.name}
              </h1>
              <p className="text-gray6 text-sm font-normal mt-2">
                {dataOrderDetails?.address_shipping}
              </p>

              <div className="mt-9">
                <h1 className="text-[#999] text-[12px] font-medium uppercase">
                  Email
                </h1>

                <span className="text-gray9 text-sm font-normal">
                  {dataOrderDetails?.email}
                </span>
              </div>
              <div className="mt-4">
                <h1 className="text-[#999] text-[12px] font-medium uppercase">
                  Phone
                </h1>

                <span className="text-gray9 text-sm font-normal">
                  {dataOrderDetails?.phone_number}
                </span>
              </div>
            </div>
            {dataOrderDetails?.note != null && (
              <p className="text-gray6 font-medium text-sm mt-2">
                <span className="text-primary">Note: </span>
                {dataOrderDetails?.note}
              </p>
            )}
          </div>
        </div>
        <div className="md:col-span-1 lg:col-span-1 pl-[20px]  pr-[10px]  border-2 rounded-lg">
          <div className="py-[18px] px-[10px] flex  gap-x-6 border-b-2">
            <div className=" flex flex-col">
              <h1 className="text-[#999] text-[12px] font-medium uppercase">
                Order ID
              </h1>

              <span className="text-gray9 text-sm font-normal">
                ${dataOrderDetails?.id}
              </span>
            </div>
            <div className=" flex flex-col">
              <h1 className="text-[#999] text-[12px] font-medium uppercase">
                Pay Method
              </h1>

              <span className="text-gray9 text-sm font-normal uppercase">
                {dataOrderDetails?.payment_method}
              </span>
            </div>
          </div>

          <div className="pt-3">
            <GroupJusBeween className="border-b-[1px] py-2 ">
              <BillLabel label="Subtotal:"></BillLabel>
              <ProPrice
                className="font-medium"
                price={dataOrderDetails?.total_price}
              ></ProPrice>
            </GroupJusBeween>
            <GroupJusBeween className="border-b-[1px] py-2 ">
              <BillLabel label="Discount:"></BillLabel>
              <span className="inline-block px-[10px] py-1 rounded-2xl  font-medium">
                0%
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
                price={dataOrderDetails?.total_price}
              ></ProPrice>
            </GroupJusBeween>
          </div>
        </div>
      </div>

      {/* <div className="mt-10 flex items-center">
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
      </div> */}
      {/* thanh tiến trình */}
      <div className="md:block lg:block hidden">
        {processOrder(dataOrderDetails?.approval_status)}
      </div>

      <div className="md:hidden lg:hidden block mt-8">
        <h1 className="text-gray-700 text-[20px] font-medium my-3">
          Shipping Information
        </h1>
        {processOrderMobile(dataOrderDetails?.approval_status)}
      </div>

      <div className="mt-10 hidden md:block">
        <Table>
          <table>
            <thead>
              <tr>
                <th>product</th>
                <th>price</th>
                <th>quantity</th>
                <th>Subtotal</th>
                {dataOrderDetails?.approval_status === "4" && <th>Evaluate</th>}

                <th></th>
              </tr>
            </thead>
            <tbody>
              {dataOrderDetails?.products_order?.length > 0 &&
                dataOrderDetails?.products_order?.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="inline-flex items-center gap-x-[6px]">
                        <ProImage
                          className="w-[70px] h-[70px]"
                          linkUrl={item?.image}
                        ></ProImage>
                        <ProName
                          name={item?.name}
                          className="inline-block whitespace-nowrap overflow-hidden overflow-ellipsis max-w-[200px]"
                          maxW="300px"
                          title={item?.name}
                        ></ProName>
                      </div>
                    </td>
                    <td>
                      {" "}
                      <ProPrice price={item?.price?.toFixed(2)}></ProPrice>
                    </td>
                    <td className="text-center">
                      <ProQuantity quantity={item?.quantity}></ProQuantity>
                    </td>
                    <td>
                      <ProPrice
                        price={(item?.price * item?.quantity)?.toFixed(2)}
                      ></ProPrice>
                    </td>
                    {dataOrderDetails?.approval_status === "4" && (
                      <td>
                        <LabelRedirect
                          icon=""
                          className="text-sm  font-medium"
                          title="Evaluate"
                        ></LabelRedirect>
                      </td>
                    )}
                  </tr>
                ))}
            </tbody>
          </table>
        </Table>
      </div>
      <div className="my-10 md:hidden lg:hidden flex flex-col gap-y-3">
        <h1 className="text-gray-700 text-[20px] font-medium">All Product</h1>
        {dataOrderDetails?.products_order?.length > 0 &&
          dataOrderDetails?.products_order?.map((item) => (
            <div key={item.id}>
              <ProMobileInOrderDetail item={item}></ProMobileInOrderDetail>
            </div>
          ))}
      </div>
    </div>
  );
};

export default OrderDetailsPage;
