import React, { useEffect, useState } from "react";
import LayoutAdminAct from "../../layout/LayoutAdminAct";
import Table from "../../components/table/Table";
import {
  convertDateTime,
  convertStatus,
  defaultImage3,
} from "../../constants/global";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenToSquare,
  faRectangleXmark,
  faSquareCheck,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  orderAdmiUpdateStatusOrder,
  orderAdminCancel,
  orderAdminFilter,
  orderAdminGet,
  orderUserFilter,
} from "../../store/order/order-slice";
import usePagination from "../../hooks/usePagination";
import ReactPaginate from "react-paginate";
import IconPagiNext from "../../components/Icons/IconPagiNext";
import IconPagiPrev from "../../components/Icons/IconPagiPrev";
import DropdownInit from "../../components/dropdown/init/DropdownInit";
import SelectInit from "../../components/dropdown/init/SelectInit";
import ListInit from "../../components/dropdown/init/ListInit";
import { faCircleXmark, faXmark } from "@fortawesome/free-solid-svg-icons";
import OptionsInit from "../../components/dropdown/init/OptionsInit";
import Swal from "sweetalert2";
const statusOrder = [
  {
    id: 0,
    name: "Wait for confirm",
  },
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

const AdOrderPage = () => {
  const dispatch = useDispatch();
  const [IdStatus, setIdStatus] = useState("");
  const [NameStatus, setNameStatus] = useState();
  console.log(
    "🚀 ~ file: AdOrderPage.js:56 ~ AdOrderPage ~ NameStatus:",
    NameStatus
  );
  console.log(
    "🚀 ~ file: AdOrderPage.js:55 ~ AdOrderPage ~ IdStatus:",
    IdStatus
  );
  const { dataOrderAll } = useSelector((state) => state.order);

  const { handlePageClick, pageCount, nextPage } = usePagination(
    dataOrderAll,
    dataOrderAll?.per_page
  );

  const {
    handlePageClick: handlePageClick2,
    pageCount: pageCount2,
    nextPage: nextPage2,
  } = usePagination(dataOrderAll, dataOrderAll?.per_page);

  useEffect(() => {
    if (IdStatus !== "") {
      dispatch(orderAdminFilter({ status: IdStatus, page: nextPage2 }));
    } else {
      dispatch(orderAdminGet(nextPage));
    }
  }, [IdStatus, dispatch, nextPage, nextPage2]);

  const handleConfirmOrder = (item) => {
    Swal.fire({
      title: `Are you sure to confirm OrderID <span class="capitalize font-semibold italic underline text-darkPrimary">#${item?.id}</span> ?`,
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
          })
        );
        console.log("ok");
      }
    });
  };

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
          orderAdminCancel({ id: item.id, page: dataOrderAll?.current_page })
        );
      }
    });
  };
  return (
    <LayoutAdminAct label="Order List" content="Manage My Orders">
      <div className="mt-[10px] ml-2 w-[240px]">
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
                {IdStatus === 0 && <th>Handle</th>}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {dataOrderAll?.data?.length > 0 &&
                dataOrderAll?.data?.map((item) => (
                  <tr key={item?.id} className="bg-white">
                    <td className="!text-center">#{item?.id}</td>
                    <td className="!text-center">
                      {convertDateTime(item?.created_at)}
                    </td>
                    <td className="!text-center">{item?.user_id}</td>
                    <td className="!text-center">${item?.total_price}</td>
                    <td className="!text-center">
                      {convertStatus(item?.approval_status)}
                    </td>
                    {IdStatus === 0 && (
                      <td className=" flex items-center justify-center gap-x-5 ">
                        <span
                          className="block py-[9px] hover:text-primary  cursor-pointer"
                          onClick={() => handleConfirmOrder(item)}
                        >
                          <FontAwesomeIcon icon={faSquareCheck} size="xl" />
                        </span>
                        <span
                          className="block py-[9px] cursor-pointer hover:text-danger"
                          onClick={() => handleCancelOrder(item)}
                        >
                          <FontAwesomeIcon icon={faRectangleXmark} size="xl" />
                        </span>
                      </td>
                    )}
                    <td className="!text-center">
                      <div className="flex items-center justify-center gap-x-4">
                        <Link
                          className="border p-2"
                          to={`/admin/order/${item.id}`}
                        >
                          <FontAwesomeIcon icon={faEye} size="lg" />
                        </Link>

                        <Link className="border p-2">
                          <FontAwesomeIcon icon={faTrashCan} size="lg" />
                        </Link>
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
    </LayoutAdminAct>
  );
};

export default AdOrderPage;
