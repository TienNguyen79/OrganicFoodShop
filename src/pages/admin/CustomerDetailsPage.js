import React from "react";
import LayoutAdminAct from "../../layout/LayoutAdminAct";
import UserAvatar from "../../modules/user/parts/UserAvatar";
import UserName from "../../modules/user/parts/UserName";
import BoxField from "../../modules/user/partsSetting/BoxField";
import BoxBigAdmin from "../../modules/admin/BoxBigAdmin";
import UserRole from "../../modules/user/parts/UserRole";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import Table from "../../components/table/Table";
import {
  convertDate,
  convertStatus,
  convertUserStatus,
  defaultImage3,
  userRole,
} from "../../constants/global";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CustomerDetails } from "../../store/user/user-slice";
import usePagination from "../../hooks/usePagination";
import ReactPaginate from "react-paginate";
import IconPagiNext from "../../components/Icons/IconPagiNext";
import IconPagiPrev from "../../components/Icons/IconPagiPrev";
import { useState } from "react";
const itemsPerPage = 10;
const CustomerDetailsPage = () => {
  //   //Phân trang
  //   const [pageCount, setPageCount] = useState(0);
  //   const [itemOffset, setItemOffset] = useState(0);
  //   const [nextPage, setNextPage] = useState(1);

  const dispatch = useDispatch();
  const { slug } = useParams();
  const { dataAllCustomer } = useSelector((state) => state.user);
  console.log(
    "🚀 ~ file: CustomerDetailsPage.js:40 ~ CustomerDetailsPage ~ dataAllCustomer:",
    dataAllCustomer
  );

  //   const { handlePageClick, pageCount, nextPage } = usePagination(
  //     dataAllCustomer?.order_details,
  //     10
  //   );

  useEffect(() => {
    dispatch(CustomerDetails({ id: slug, page: 1 }));
  }, [dispatch, slug]);

  //   //xử lí phân trang
  //   useEffect(() => {
  //     if (
  //       !dataAllCustomer?.order_details.data ||
  //       !dataAllCustomer?.order_details.total
  //     )
  //       return;
  //     setPageCount(
  //       Math.ceil(dataAllCustomer?.order_details.total / itemsPerPage)
  //     ); //xem có tất cả bao nhiêu trang vd có 5 trang (1 2 3 4 5)
  //   }, [dataAllCustomer?.order_details.data, itemOffset]);

  //   const handlePageClick = (event) => {
  //     const newOffset =
  //       (event.selected * itemsPerPage) % dataAllCustomer?.order_details.total;
  //     setItemOffset(newOffset); //theo dõi vị trí bắt đầu của mục dữ liệu trên trang hiện tại khi bạn thực hiện phân trang hoặc điều hướng qua các trang dữ liệu.
  //     setNextPage(event.selected + 1);
  //   };
  return (
    <LayoutAdminAct label="Customer Detail" content="Manage My Customers">
      <div className="grid grid-cols-3 gap-x-2">
        <div className="col-span-1">
          <BoxBigAdmin className="rounded-md">
            <div className="flex flex-col gap-y-2 items-center justify-center">
              <UserAvatar
                className="w-[100px] h-[100px]"
                linkUrl={dataAllCustomer?.user?.avata}
              ></UserAvatar>
              <UserName
                name={dataAllCustomer?.user?.name}
                className="!text-gray6  text-[18px]"
              ></UserName>
              <UserRole
                role={`${
                  dataAllCustomer?.user?.permission === userRole.USER
                    ? "User"
                    : dataAllCustomer?.user?.permission === userRole.ADMIN
                    ? "Admin"
                    : ""
                }`}
              ></UserRole>
            </div>
            <div className="flex items-center py-4 justify-center gap-x-10">
              <div className="flex items-center gap-x-3 ">
                <span className="blog bg-[#e6f7d9] text-[#56ca00] p-2 rounded-md ">
                  <FontAwesomeIcon icon={faCartShopping} size="lg" />
                </span>
                <div>
                  <h3 className="text-gray7 font-semibold">
                    {dataAllCustomer?.order_details?.data?.length}
                  </h3>
                  <p className="text-gray5 font-normal">Order</p>
                </div>
              </div>
              <div className="flex items-center gap-x-3 ">
                <span className="blog bg-[#e6f7d9] text-[#56ca00] py-2 px-3 rounded-md ">
                  <FontAwesomeIcon icon={faDollarSign} size="lg" />
                </span>
                <div>
                  <h3 className="text-gray7 font-semibold">$19291234</h3>
                  <p className="text-gray5 font-normal">Spent</p>
                </div>
              </div>
            </div>

            <div>
              <h1 className="text-gray-500 font-semibold border-b-2 pb-3">
                DETAILS
              </h1>

              <div className="mt-4 flex flex-col gap-y-3">
                <div className="flex items-center gap-x-3">
                  <h1 className="text-gray7 font-medium">CustomerID:</h1>
                  <span className="block text-gray5 font-normal">
                    #{dataAllCustomer?.user?.id}
                  </span>
                </div>
                <div className="flex items-center gap-x-3">
                  <h1 className="text-gray7 font-medium">Email:</h1>
                  <span className="block text-gray5 font-normal">
                    {dataAllCustomer?.user?.email}
                  </span>
                </div>
                <div className="flex items-center gap-x-3">
                  <h1 className="text-gray7 font-medium">Status:</h1>
                  <span className="block text-gray5 font-normal">
                    {convertUserStatus(dataAllCustomer?.user?.status)}
                  </span>
                </div>
                <div className="flex items-center gap-x-3">
                  <h1 className="text-gray7 font-medium">Contact:</h1>
                  <span className="block text-gray5 font-normal">
                    {dataAllCustomer?.user?.phone_number}
                  </span>
                </div>
                <div className="flex items-center gap-x-3">
                  <h1 className="text-gray7 font-medium">City</h1>
                  <span className="block text-gray5 font-normal">
                    {
                      dataAllCustomer?.user?.billing_address?.address.split(
                        ","
                      )[3]
                    }
                  </span>
                </div>
              </div>
            </div>
          </BoxBigAdmin>
        </div>
        <div className="col-span-2">
          <BoxBigAdmin>
            <div>
              <h1 className="text-gray-500 text-[20px] font-semibold  pb-3">
                Order History
              </h1>
              <div>
                <Table>
                  <table>
                    <thead>
                      <tr>
                        <th>Order ID</th>
                        <th>Date</th>
                        <th>Total</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataAllCustomer?.order_details?.data?.length > 0 &&
                        dataAllCustomer?.order_details?.data?.map((item) => (
                          <tr key={item?.id} className="bg-white">
                            <td className="!text-center">{item?.id}</td>
                            <td className="!text-center">
                              <div className="flex items-center gap-x-3">
                                <div className=" ">
                                  <h1 className="text-gray6 font-normal">
                                    {convertDate(item?.created_at)}
                                  </h1>
                                </div>
                              </div>
                            </td>
                            <td
                              className="text-sm font-medium whitespace-nowrap overflow-hidden overflow-ellipsis max-w-[170px]"
                              title={""}
                            >
                              <span className="text-gray8 text-[16px] font-semibold">
                                {item?.total_price}
                              </span>{" "}
                              <span
                                className="text-gray8 text-sm font-medium "
                                title="Product"
                              >
                                ({item.products_order.length} Product)
                              </span>
                            </td>
                            <td className="!text-center">
                              {convertStatus(item?.approval_status)}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </Table>
              </div>
            </div>

            {/* <div className="mt-8 ">
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
            </div> */}
          </BoxBigAdmin>
        </div>
      </div>
    </LayoutAdminAct>
  );
};

export default CustomerDetailsPage;
