import React from "react";
import LayoutAdminAct from "../../layout/LayoutAdminAct";
import Table from "../../components/table/Table";
import { useForm } from "react-hook-form";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import {
  convertUserStatus,
  defaultImage3,
  userRole,
  userStatus,
} from "../../constants/global";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faCrown, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import {
  CustomerDelete,
  CustomerGetAll,
  CustomerRole,
  CustomerSearch,
  CustomerStatus,
} from "../../store/user/user-slice";
import usePagination from "../../hooks/usePagination";
import ReactPaginate from "react-paginate";
import IconPagiNext from "../../components/Icons/IconPagiNext";
import IconPagiPrev from "../../components/Icons/IconPagiPrev";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import { debounce } from "lodash";
import { authCheckToken } from "../../store/auth/auth-slice";
const AdCustomerPage = () => {
  const { control } = useForm();
  const dispatch = useDispatch();
  const [nameCustomer, setNameCustomer] = useState("");
  console.log(
    "🚀 ~ file: AdCustomerPage.js:40 ~ AdCustomerPage ~ nameCustomer:",
    nameCustomer
  );
  const { dataAllCustomer } = useSelector((state) => state.user);
  console.log(
    "🚀 ~ file: AdCustomerPage.js:47 ~ AdCustomerPage ~ dataAllCustomer:",
    dataAllCustomer
  );

  const { handlePageClick, pageCount, nextPage } = usePagination(
    dataAllCustomer,
    10
  );

  useEffect(() => {
    dispatch(CustomerSearch(nameCustomer));
  }, [dispatch, nameCustomer]);

  useEffect(() => {
    dispatch(CustomerGetAll(nextPage));
  }, [nextPage]);

  const { user } = useSelector((state) => state.auth);
  console.log("🚀 ~ file: AdCustomerPage.js:67 ~ AdCustomerPage ~ user:", user);
  useEffect(() => {
    dispatch(authCheckToken());
  }, []);

  const handleUpdateRole = (item) => {
    if (item.permission === userRole.USER) {
      Swal.fire({
        title: `Are you sure you want <span class="capitalize font-semibold italic underline text-darkPrimary"> ${item?.name} </span> as Admin?`,
        text: "",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, I'm sure!",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(
            CustomerRole({
              user_id: item.id,
              page: dataAllCustomer?.current_page, //get trang để biết cập nhật customer trang nào
            })
          );
        }
      });
    } else if (item.permission === userRole.ADMIN) {
      Swal.fire({
        title: `Are you sure you want  <span class="capitalize font-semibold italic underline text-darkPrimary">${item?.name}</span> to be the User?`,
        text: "",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, I'm sure!",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(
            CustomerRole({
              user_id: item.id,
              page: dataAllCustomer?.current_page, //get trang để biết cập nhật customer trang nào
            })
          );
        }
      });
    }
  };

  const handleUpdateStatus = (item) => {
    if (item.status === userStatus.ACTIVE) {
      Swal.fire({
        title: `Are you sure you want Ban <span class="capitalize font-semibold italic underline text-darkPrimary"> ${item?.name} </span> ?`,
        text: "",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, I'm sure!",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(
            CustomerStatus({
              user_id: item.id,
              page: dataAllCustomer?.current_page, //get trang để biết cập nhật customer trang nào
            })
          );
        }
      });
    } else if (item.permission === userStatus.BAN) {
      Swal.fire({
        title: `Are you sure you want UnBan <span class="capitalize font-semibold italic underline text-darkPrimary"> ${item?.name} </span>?`,
        text: "",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, I'm sure!",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(
            CustomerStatus({
              user_id: item.id,
              page: dataAllCustomer?.current_page, //get trang để biết cập nhật customer trang nào
            })
          );
        }
      });
    }
  };

  return (
    <LayoutAdminAct label="Customer List" content="Manage My Customers">
      <div>
        <div className="flex items-center justify-between my-5 px-3">
          <Input
            control={control}
            name="search"
            className="!w-[300px]"
            placeholder="Search my Customer..."
            setNameCustomer={setNameCustomer}
          ></Input>
          <Button
            href="/admin/add_customer"
            kind="secondary2"
            className="hover:bg-primary hover:text-white transition-all"
          >
            + Add Customer
          </Button>
        </div>
        <Table>
          <table className="shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr>
                <th>ID</th>
                <th>Customer</th>
                <th>PhoneNumber</th>
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {dataAllCustomer?.data?.length > 0 &&
                dataAllCustomer?.data?.map((item) => (
                  <tr key={item?.id} className={`bg-white`}>
                    <td className="!text-center">#{item?.id}</td>
                    <td className="!text-center">
                      <div className="flex items-center gap-x-3">
                        <div className="w-[60px] h-[60px]">
                          <img
                            src={item?.avata}
                            className="w-full h-full object-cover"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col justify-center items-start ">
                          <h1 className="text-gray6 font-semibold">
                            {item?.name}
                          </h1>
                          <p className="text-sm font-normal text-gray4">
                            {item?.email}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="!text-center ">{item?.phone_number}</td>
                    <td
                      className="!text-center cursor-pointer transition-all hover:scale-125 hover:text-primary"
                      onClick={() => handleUpdateRole(item)}
                    >
                      {item?.permission === userRole.USER ? (
                        <span title="USER" className="text-[#4286f4]">
                          <FontAwesomeIcon icon={faUser} size="lg" />
                        </span>
                      ) : item?.permission === userRole.ADMIN ? (
                        <span title="ADMIN" className="text-[#FFC231]">
                          <FontAwesomeIcon icon={faCrown} size="lg" />
                        </span>
                      ) : (
                        ""
                      )}
                    </td>
                    <td
                      className="!text-center cursor-pointer transition-all hover:scale-110"
                      onClick={() => handleUpdateStatus(item)}
                    >
                      {convertUserStatus(item?.status)}
                    </td>
                    <td className="!text-center">
                      <div className="flex items-center justify-center gap-x-4">
                        <Link className="border p-2">
                          <FontAwesomeIcon icon={faEye} size="lg" />
                        </Link>
                        {/* <Link
                          className="border p-2"
                          to={"/admin/update_customer"}
                        >
                          <FontAwesomeIcon icon={faPenToSquare} size="lg" />
                        </Link> */}
                        <div
                          className="border p-2 cursor-pointer"
                          onClick={() => {
                            Swal.fire({
                              title: `Are you sure to delete <span class="capitalize font-semibold italic underline text-darkPrimary"> ${item?.name} </span>?`,
                              text: "You won't be able to revert this!",
                              icon: "warning",
                              showCancelButton: true,
                              confirmButtonColor: "#3085d6",
                              cancelButtonColor: "#d33",
                              confirmButtonText: "Yes, delete it!",
                            }).then((result) => {
                              if (result.isConfirmed) {
                                dispatch(
                                  CustomerDelete({
                                    id: item?.id,
                                    name: item?.name,
                                  })
                                );
                              }
                            });
                          }}
                        >
                          <FontAwesomeIcon icon={faTrashCan} size="lg" />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </Table>
      </div>
      {dataAllCustomer?.last_page > 1 && (
        <div className="flex justify-center items-center pt-10 ">
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
    </LayoutAdminAct>
  );
};

export default AdCustomerPage;
