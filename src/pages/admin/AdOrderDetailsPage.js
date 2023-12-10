import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { orderAdminGetDetails } from "../../store/order/order-slice";
import LayoutAdminAct from "../../layout/LayoutAdminAct";
import LabelRedirect from "../../components/label/LabelRedirect";
import BoxBigAdmin from "../../modules/admin/BoxBigAdmin";
import ProgressStep from "../../modules/cart/progress/ProgressStep";
import ProgressBar from "../../modules/cart/progress/ProgressBar";
import Label from "../../components/label/Label";
import { convertDate } from "../../constants/global";
import GroupJusBeween from "../../components/common/GroupJusBeween";
import BillLabel from "../../modules/cart/parts/BillLabel";
import Table from "../../components/table/Table";
import ProImage from "../../modules/product/partsCartAndTym/ProImage";
import ProName from "../../modules/product/partsCartAndTym/ProName";
import ProQuantity from "../../modules/product/partsCartAndTym/ProQuantity";
import ProPrice from "../../modules/product/partsCartAndTym/ProPrice";
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

const AdOrderDetailsPage = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();

  useEffect(() => {
    dispatch(orderAdminGetDetails(slug));
  }, []);

  const { dataOrderDetails } = useSelector((state) => state.order);
  console.log(
    "🚀 ~ file: AdOrderDetailsPage.js:15 ~ AdOrderDetailsPage ~ dataOrderAll:",
    dataOrderDetails
  );
  return (
    <LayoutAdminAct label={`Order Details `} content="Manage My Orders">
      <div className="flex justify-end py-2">
        <LabelRedirect
          title="Back List"
          className="font-semibold hover:opacity-80"
          icon={""}
          url="/admin/order"
        ></LabelRedirect>
      </div>
      <BoxBigAdmin className="rounded-md">
        <div>
          <div className="flex items-center justify-between py-4 px-3 ">
            <div className="flex items-center gap-x-2">
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
            <div>
              {dataOrderDetails?.approval_status === "5" && (
                <h1 className="text-danger font-medium text-[28px] mt-8">
                  Order has been cancelled
                </h1>
              )}
            </div>
          </div>

          <div className="grid grid-cols-3 mt-3 gap-x-6">
            <div className="col-span-2 flex ">
              <div className=" pl-[20px] pb-[20px] pr-[10px]  border-2 rounded-tl-lg rounded-bl-lg">
                <h1 className="text-[#999] text-sm font-medium uppercase py-[18px] border-b-2">
                  Shop Address
                </h1>
                <div>
                  <h1 className="text-gray9 font-medium text-[18px] mt-3">
                    ADMIN
                  </h1>
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
            <div className="col-span-1 pl-[20px]  pr-[10px]  border-2 rounded-lg">
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
          <div className="ml-[60px] ">
            {processOrder(dataOrderDetails?.approval_status)}
          </div>

          <div className="mt-10">
            <Table>
              <table>
                <thead>
                  <tr>
                    <th className="text-left">product</th>
                    <th className="text-left">price</th>
                    <th className="text-left">quantity</th>
                    <th className="text-left">Subtotal</th>
                    {dataOrderDetails?.approval_status === "4" && (
                      <th>Evaluate</th>
                    )}

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
                              className="inline-block  whitespace-nowrap overflow-hidden overflow-ellipsis max-w-[480px]"
                              maxW="300px"
                            ></ProName>
                          </div>
                        </td>
                        <td>
                          {" "}
                          <ProPrice price={item?.price.toFixed(2)}></ProPrice>
                        </td>
                        <td className="text-center">
                          <ProQuantity quantity={item?.quantity}></ProQuantity>
                        </td>
                        <td>
                          <ProPrice
                            price={(item?.price * item?.quantity).toFixed(2)}
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
        </div>
      </BoxBigAdmin>
    </LayoutAdminAct>
  );
};

export default AdOrderDetailsPage;
