import React from "react";
import LabelRedirect from "../components/label/LabelRedirect";
import Table from "../components/table/Table";
import Label from "../components/label/Label";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { orderGetDataAll, orderUserFilter } from "../store/order/order-slice";
import { useState } from "react";
import { convertDate, convertStatus } from "../constants/global";
import ReactPaginate from "react-paginate";
import IconPagiNext from "../components/Icons/IconPagiNext";
import IconPagiPrev from "../components/Icons/IconPagiPrev";
import { useSpring, animated } from "react-spring";

const tabs = [
  {
    id: 0,
    title: "Pending",
  },
  {
    id: 1,
    title: " Order received",
  },
  {
    id: 2,
    title: "Processing",
  },
  {
    id: 3,
    title: "Currently Delivering",
  },
  {
    id: 4,
    title: "Delivered",
  },
  {
    id: 5,
    title: "Canceled",
  },
];

const itemsPerPage = 10;
const OrderHistoryPage = () => {
  //Phân trang
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [nextPage, setNextPage] = useState(1);

  const [tabClicked, setTabClicked] = useState(0);

  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(orderGetDataAll(nextPage));
  // }, [nextPage]);

  //lọc theo trạng thái đơn hàng
  useEffect(() => {
    dispatch(orderUserFilter({ status: tabClicked, page: nextPage }));
  }, [dispatch, nextPage, tabClicked]);

  const { dataOrderAll } = useSelector((state) => state.order);

  //xử lí phân trang
  useEffect(() => {
    if (!dataOrderAll.data || !dataOrderAll.total) return;
    setPageCount(Math.ceil(dataOrderAll.total / itemsPerPage)); //xem có tất cả bao nhiêu trang vd có 5 trang (1 2 3 4 5)
  }, [dataOrderAll.data, itemOffset]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % dataOrderAll.total;
    setItemOffset(newOffset); //theo dõi vị trí bắt đầu của mục dữ liệu trên trang hiện tại khi bạn thực hiện phân trang hoặc điều hướng qua các trang dữ liệu.
    setNextPage(event.selected + 1);
  };

  return (
    <div className="select-none">
      <div className=" py-4 px-3 ">
        <div className="relative">
          <Label className="text-[20px] ">Order History</Label>
          <div className="absolute after:bg-primary after:absolute after:contents-'' after:w-[130px] after:h-[2px] "></div>
        </div>
      </div>
      <div className="mb-4 overflow-x-auto py-2 ">
        <div className="flex  items-center mt-[10px] ">
          {tabs.map((item) => (
            <span
              key={item.id}
              className={`text-gray5  flex items-center justify-center min-w-[200px]  text-center  text-[16px] font-medium p-4   
             cursor-pointer ${
               item.id === tabClicked
                 ? " bg-[#e6f7d9] rounded text-primary after:h-[2px]"
                 : ""
             } `}
              onClick={() => {
                setTabClicked(item.id);
              }}
            >
              {item.title}
            </span>
          ))}
        </div>
      </div>

      <Table>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>Total</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {dataOrderAll?.data?.length > 0 &&
              dataOrderAll?.data?.map((item) => {
                return (
                  <tr key={item.id}>
                    <td className="text-gray8 text-sm">#{item?.id}</td>
                    <td>{convertDate(item?.created_at)}</td>
                    <td
                      className="text-sm font-medium whitespace-nowrap overflow-hidden overflow-ellipsis max-w-[170px]"
                      title={
                        item?.total_price +
                        " (" +
                        item?.products_order?.length +
                        ") Product"
                      }
                    >
                      <span className="text-gray8 text-[16px] font-semibold">
                        ${item?.total_price}
                      </span>{" "}
                      <span
                        className="text-gray8 text-sm font-medium "
                        title="Product"
                      >
                        ({item?.products_order?.length} Product)
                      </span>
                    </td>
                    <td>{convertStatus(item?.approval_status)}</td>
                    {tabClicked !== 4 ? (
                      <td>
                        <LabelRedirect
                          icon=""
                          className="text-sm  font-medium"
                          title="View Details"
                          url={`/order_details/${item?.id}`}
                        ></LabelRedirect>
                      </td>
                    ) : (
                      <div>
                        <td className="flex leading-[61px] justify-center items-center ">
                          <LabelRedirect
                            icon=""
                            className="text-sm  font-medium"
                            title=" Details"
                            url={`/order_details/${item?.id}`}
                          ></LabelRedirect>

                          <LabelRedirect
                            icon=""
                            className="text-sm  font-medium"
                            title=" Review"
                            url={`#`}
                          ></LabelRedirect>
                        </td>
                      </div>
                    )}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </Table>
      <div className="mt-8 ">
        <ReactPaginate
          // key={watchCate} //key duy nhất đảm bảo rằng component sẽ được unmount và mount lại khi thay đổi radio category
          breakLabel="..."
          nextLabel={<IconPagiNext></IconPagiNext>}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5} //đến khoảng số thứ 5 thì có dấu ...
          pageCount={pageCount}
          previousLabel={<IconPagiPrev></IconPagiPrev>}
          renderOnZeroPageCount={null}
          className="pagination justify-center"
        />
      </div>
    </div>
  );
};

export default OrderHistoryPage;
