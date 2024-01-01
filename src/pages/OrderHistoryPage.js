import React, { useRef } from "react";
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
import OrderItemMobile from "../modules/product/OrderItemMobile";

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

  const [shouldShowMobileTablet, setShouldShowMobileTablet] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      // Kiểm tra kích thước màn hình mobile
      setShouldShowMobileTablet(window.innerWidth < 1024);
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
  const handleTabClick = (item) => {
    setTabClicked(item.id);
  };
  return (
    <div className="select-none">
      <div className=" py-4 px-3 ">
        <div className="relative">
          <Label className="text-[20px] ">Order History</Label>
          <div className="absolute after:bg-primary after:absolute after:contents-'' after:w-[130px] after:h-[2px] "></div>
        </div>
      </div>
      <div className="mb-4 overflow-x-auto md:w-[750px] lg:w-full w-screen py-2 ">
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
              onClick={() => handleTabClick(item)}
            >
              {item.title}
            </span>
          ))}
        </div>
      </div>
      {!shouldShowMobileTablet && dataOrderAll?.data?.length > 0 ? (
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
                      <td className="text-[18px] font-semibold text-darkPrimary text-sm">
                        #{item?.id}
                      </td>
                      <td className="text-gray-500 text-sm">
                        {convertDate(item?.created_at)}
                      </td>
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
                        <td className="flex justify-center items-center ">
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
                        </td>
                      ) : tabClicked === 5 ? (
                        <td className="flex  justify-center items-center  ">
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
                        </td>
                      ) : (
                        ""
                      )}
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </Table>
      ) : shouldShowMobileTablet && dataOrderAll?.data?.length > 0 ? (
        dataOrderAll?.data?.length > 0 &&
        dataOrderAll?.data?.map((item) => (
          <div key={item?.id} className="flex flex-col my-8 md:my-0">
            <OrderItemMobile
              item={item}
              tabClicked={tabClicked}
            ></OrderItemMobile>
          </div>
        ))
      ) : (
        <div className="w-[250px] h-[250px]  mx-auto mb-4 md:mb-0 lg:mb-0">
          <img
            src="/noOrder.png"
            className="w-full h-full object-contain"
            alt=""
          />
        </div>
      )}
      {dataOrderAll?.data?.length > 0 && dataOrderAll?.last_page > 1 && (
        <div className="mt-8 mb-8">
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
      )}
    </div>
  );
};

export default OrderHistoryPage;
