import React, { useEffect, useState } from "react";
import AdNavbar from "../../modules/admin/navBar/AdNavbar";
import IconBell from "../../components/Icons/IconBell";
import DropdownInit from "../../components/dropdown/init/DropdownInit";
import SelectInit from "../../components/dropdown/init/SelectInit";
import usePagination from "../../hooks/usePagination";
import {
  orderAdmiUpdateStatusOrder,
  orderAdminCancel,
  orderAdminFilter,
  orderAdminGet,
} from "../../store/order/order-slice";
import Swal from "sweetalert2";
import ListInit from "../../components/dropdown/init/ListInit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEye,
  faPenToSquare,
  faRectangleXmark,
  faSquareCheck,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import OptionsInit from "../../components/dropdown/init/OptionsInit";
import Table from "../../components/table/Table";
import { convertStatus } from "../../constants/global";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import IconPagiNext from "../../components/Icons/IconPagiNext";
import IconPagiPrev from "../../components/Icons/IconPagiPrev";
import { useDispatch, useSelector } from "react-redux";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/button/Button";
import { CustomerGetAll } from "../../store/user/user-slice";
const statusOrder = [
  {
    id: 1,
    name: "   Order received",
  },
  {
    id: 2,
    name: "Processing",
  },
  {
    id: 3,
    name: "On the way",
  },
  {
    id: 4,
    name: " Delivered",
  },
  {
    id: 5,
    name: " Canceled",
  },
];
const ShipHomePage = () => {
  const [isFixNav, setIsFixNav] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const dispatch = useDispatch();
  const [IdStatus, setIdStatus] = useState(1);
  const [NameStatus, setNameStatus] = useState("Order received");

  const { dataOrderAll } = useSelector((state) => state.order);

  console.log(
    "🚀 ~ file: ShipHomePage.js:84 ~ ShipHomePage ~ dataOrderAll:",
    dataOrderAll
  );

  const { handlePageClick, pageCount, nextPage } = usePagination(
    dataOrderAll,
    dataOrderAll?.per_page
  );

  const {
    handlePageClick: handlePageClick2,
    pageCount: pageCount2,
    nextPage: nextPage2,
  } = usePagination(dataOrderAll, dataOrderAll?.per_page);

  //   useEffect(() => {
  //     dispatch(orderAdminFilter({ status: "2", page: nextPage2 }));
  //   }, []);

  useEffect(() => {
    if (IdStatus !== "") {
      dispatch(orderAdminFilter({ status: IdStatus, page: nextPage2 }));
    }
  }, [IdStatus, dispatch, nextPage, nextPage2]);

  useEffect(() => {
    dispatch(CustomerGetAll());
  }, []);

  //cancel
  const handleCancelOrder = (item) => {
    Swal.fire({
      title: `Are you sure to Cancel OrderID <span class="capitalize font-semibold italic underline text-darkPrimary">#${item?.id}</span> ?`,
      // text: "You won't be able to revert this!",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I'm Sure!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(
          orderAdminCancel({
            id: item.id,
            page: dataOrderAll?.current_page,
            status: item?.approval_status,
          })
        );
      }
    });
  };

  //processing
  const handleProcessingOrder = (item) => {
    Swal.fire({
      title: `Are you sure to process the  OrderID <span class="capitalize font-semibold italic underline text-darkPrimary">#${item?.id}</span> ?`,
      // text: "You won't be able to revert this!",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I'm Sure!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(
          orderAdmiUpdateStatusOrder({
            id: item?.id,
            page: dataOrderAll?.current_page,
            status: item?.approval_status,
          })
        );
      }
    });
  };
  //on the way
  const handleOntheWayOrder = (item) => {
    Swal.fire({
      title: `You definitely want to deliver the OrderID <span class="capitalize font-semibold italic underline text-darkPrimary">#${item?.id}</span> ?`,
      // text: "You won't be able to revert this!",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I'm Sure!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(
          orderAdmiUpdateStatusOrder({
            id: item?.id,
            page: dataOrderAll?.current_page,
            status: item?.approval_status,
          })
        );
      }
    });
  };

  //delivered success

  const handleDeliveredSuccessOrder = (item) => {
    Swal.fire({
      title: `The OrderID <span class="capitalize font-semibold italic underline text-darkPrimary">#${item?.id}</span> has been delivered !`,
      // text: "You won't be able to revert this!",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I'm Sure!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(
          orderAdmiUpdateStatusOrder({
            id: item?.id,
            page: dataOrderAll?.current_page,
            status: item?.approval_status,
          })
        );
      }
    });
  };
  return (
    <div className=" bg-[#F4F5FA] flex flex-col min-h-screen ">
      <div
        className={` pl-[50px] z-20
          py-5 pr-10 fixed top-0 left-0 right-0 transition-all 
          ${
            scrollPosition > 0
              ? "bg-white shadow-lg rounded-b-xl "
              : "bg-[#F4F5FA]"
          }`}
      >
        <div className="flex items-center justify-between ">
          <div className="w-[60px] ">
            <img
              src="/logoMT2.png"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className=" font-medium text-[18px] text-darkPrimary">
            "Swift delivery, reliable service – your satisfaction, our
            priority!"
          </div>
          <div className="flex items-center gap-x-3 cursor-pointer">
            <span>
              <IconBell></IconBell>
            </span>
            <div className="flex items-center gap-x-2">
              <div className="w-[40px] h-[40px]">
                <img
                  src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/avatars/1.png"
                  className="w-full h-full object-cover rounded-full"
                  alt=""
                />
              </div>

              <h3 className="text-[18px]  font-semibold text-darkPrimary">
                <span className="text-[14px] font-medium text-gray-600">
                  Hello
                </span>{" "}
                Tiến
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[130px] px-[70px]">
        <div className="relative flex justify-between items-center bg-white p-5 mt-10 rounded-md">
          <div>
            <h1 className="text-[20px] font-medium text-gray-700">
              Congratulations Shipper Tiến! 🎉
            </h1>
            <p className="pt-4 text-gray5">
              There were a total of{" "}
              <span className="text-primary font-medium text-[20px]">12</span>{" "}
              orders today
              <br />
              Have a good day 😍
            </p>
          </div>
          <div className="w-[300px] h-[200px] absolute right-3 bottom-0">
            <img
              src="/personDashboard.png"
              className="w-full h-full object-cover"
              alt="personDashboard"
            />
          </div>
        </div>
        <div>
          <div className="mt-[50px] ml-2 w-[240px]">
            <DropdownInit>
              <SelectInit
                placeholder={`${NameStatus || "Filter Status"}`}
                className="bg-white !text-gray5 !font-medium"
              ></SelectInit>
              <ListInit className="w-full !shadow-lg rounded-md mt-2 ">
                <div
                  className="flex justify-center p-3 bg-purple-300 cursor-pointer text-white hover:opacity-80"
                  onClick={() => {
                    setIdStatus("");
                    setNameStatus("");
                  }}
                >
                  <span className=" inline-block pt-1 px-4 text-center ">
                    <FontAwesomeIcon icon={faXmark} size="xl" />
                  </span>
                </div>
                {statusOrder.map((item) => (
                  <OptionsInit
                    key={item?.id}
                    className="hover:bg-[#e6f7d9] text-gray5 font-medium  "
                    onClick={() => {
                      setIdStatus(item.id);
                      setNameStatus(item.name);
                    }}
                  >
                    {item?.name}
                  </OptionsInit>
                ))}
              </ListInit>
            </DropdownInit>
          </div>
          <div>
            <Table>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>CustomerID</th>
                    <th>Total Price</th>
                    <th>Status</th>
                    {IdStatus !== 5 && IdStatus !== 4 && <th>Handle</th>}

                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {dataOrderAll?.data?.length > 0 &&
                    dataOrderAll?.data?.map((item) => (
                      <tr key={item?.id} className="bg-white">
                        <td className="!text-center">#{item?.id}</td>
                        <td className="!text-center">Apr 15 2023</td>
                        <td className="!text-center">{item?.user_id}</td>
                        <td className="!text-center">${item?.total_price}</td>
                        <td className="!text-center">
                          {convertStatus(item?.approval_status)}
                        </td>

                        {item?.approval_status === "1" ? (
                          <td className=" flex items-center justify-center gap-x-5 ">
                            <span
                              className="block py-[9px] hover:text-primary  cursor-pointer"
                              onClick={() => handleProcessingOrder(item)}
                            >
                              <button className="py-2 px-3 bg-gradient-to-r from-green-400 to-green-600 text-white font-medium rounded-[4px] hover:scale-110 transition-all">
                                Processing
                              </button>
                            </span>
                          </td>
                        ) : item?.approval_status === "2" ? (
                          <td className=" flex items-center justify-center gap-x-5 ">
                            <span
                              className="block py-[9px] hover:text-primary  cursor-pointer"
                              onClick={() => handleOntheWayOrder(item)}
                            >
                              <button className="py-2 px-3 bg-gradient-to-r from-green-400 to-green-600 text-white font-medium rounded-[4px] hover:scale-110 transition-all">
                                On the way
                              </button>
                            </span>
                          </td>
                        ) : item?.approval_status === "3" ? (
                          <td className=" flex items-center justify-center gap-x-5 ">
                            <span
                              className="block py-[9px] hover:text-primary  cursor-pointer"
                              onClick={() => handleDeliveredSuccessOrder(item)}
                            >
                              <button className="py-2 px-3 bg-gradient-to-r from-green-400 to-green-600 text-white font-medium rounded-[4px] hover:scale-110 transition-all">
                                Delivered Success
                              </button>
                            </span>
                          </td>
                        ) : (
                          ""
                        )}

                        <td className="!text-center">
                          <div className="flex items-center justify-center gap-x-4">
                            <Link
                              className="border p-2"
                              to={`/admin/order/${item.id}`}
                            >
                              <FontAwesomeIcon icon={faEye} size="lg" />
                            </Link>
                            {IdStatus !== 5 && IdStatus !== 4 && (
                              <span
                                className="block py-[9px] cursor-pointer border p-2 "
                                onClick={() => handleCancelOrder(item)}
                              >
                                <FontAwesomeIcon
                                  icon={faRectangleXmark}
                                  size="xl"
                                />
                              </span>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </Table>
          </div>
          {dataOrderAll?.last_page > 1 && IdStatus === "" && (
            <div className="flex justify-center items-center pt-10 ">
              <ReactPaginate
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
          {dataOrderAll?.last_page > 1 && IdStatus !== "" && (
            <div className="flex justify-center items-center pt-10 ">
              <ReactPaginate
                breakLabel="..."
                nextLabel={<IconPagiNext></IconPagiNext>}
                onPageChange={handlePageClick2}
                pageRangeDisplayed={5} //đến khoảng số thứ 5 thì có dấu ...
                pageCount={pageCount2}
                previousLabel={<IconPagiPrev></IconPagiPrev>}
                renderOnZeroPageCount={null}
                className="pagination justify-center"
              />
            </div>
          )}
        </div>
      </div>
      <div className={` py-8 mx-auto mt-auto `}>
        <h1 className="text-[#89868d] font-normal text-[16px]  opacity-80">
          © CopyRight by{" "}
          <span className="text-[rgba(75,192,192,1)] text-[18px] font-semibold font-sans">
            Nguyễn Mạnh Tiến
          </span>
        </h1>
      </div>
    </div>
  );
};

export default ShipHomePage;
