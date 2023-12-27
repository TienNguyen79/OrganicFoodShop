import React from "react";
import { convertDate, convertStatus } from "../../constants/global";
import LabelRedirect from "../../components/label/LabelRedirect";

const OrderItemMobile = ({ item, tabClicked }) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#FFF] py-4 px-3 rounded border-b-[1px]">
        <div className="flex gap-x-5  items-center w-full ">
          <span className="block text-[18px] font-semibold text-darkPrimary">
            #{item?.id}
          </span>
          <div className="flex flex-row md:flex-col justify-between w-full md:w-[400px]   gap-y-2">
            <div>
              <span className="text-gray8 text-[16px] font-semibold">
                ${item?.total_price}
              </span>{" "}
              <span className="text-gray8 text-sm font-medium ">
                x ({item?.products_order?.length} product)
              </span>
            </div>

            <p className="pr-2 text-gray-500 text-sm">
              {convertDate(item?.created_at)}
            </p>
          </div>
          <span className="hidden md:block w-full">
            {" "}
            {convertStatus(item?.approval_status)}
          </span>
        </div>
        <div className="flex justify-between md:justify-end items-center  w-full mt-3">
          <div className="block md:hidden ">
            {" "}
            {convertStatus(item?.approval_status)}
          </div>{" "}
          {/* Mục đích để hiện lên cái review */}
          {tabClicked !== 4 && tabClicked !== 5 ? (
            <td>
              <LabelRedirect
                icon=""
                className="text-sm  font-medium"
                title="View Details"
                url={`/order_details/${item?.id}`}
              ></LabelRedirect>
            </td>
          ) : tabClicked === 4 ? (
            <div>
              <td>
                <div className="flex justify-center items-center ">
                  <LabelRedirect
                    icon=""
                    className="text-sm  font-medium"
                    title=" Details"
                    url={`/order_details/${item?.id}`}
                  ></LabelRedirect>
                  <div className="w-[2px]  h-[19px] bg-slate-300 mx-1"></div>
                  <LabelRedirect
                    icon=""
                    className="text-sm  font-medium pl-2 "
                    title=" Review"
                    url={`#`}
                  ></LabelRedirect>
                </div>
              </td>
            </div>
          ) : tabClicked === 5 ? (
            <td>
              <div className="flex  justify-center items-center  ">
                <LabelRedirect
                  icon=""
                  className="text-sm  font-medium hover:opacity-80"
                  title=" Details"
                  url={`/order_details/${item?.id}`}
                ></LabelRedirect>
                {/* <div className="w-[2px]  h-[19px] bg-slate-300 mx-1"></div>
                          <LabelRedirect
                            icon=""
                            className="text-sm text-danger pl-2   font-semibold hover:opacity-80"
                            title=" Buy back"
                            url={`#`}
                          ></LabelRedirect> */}
              </div>
            </td>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderItemMobile;
