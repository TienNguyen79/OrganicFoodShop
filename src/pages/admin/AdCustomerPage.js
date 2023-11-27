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
import { CustomerGetAll } from "../../store/user/user-slice";
import usePagination from "../../hooks/usePagination";
import ReactPaginate from "react-paginate";
import IconPagiNext from "../../components/Icons/IconPagiNext";
import IconPagiPrev from "../../components/Icons/IconPagiPrev";
const AdCustomerPage = () => {
  const { control } = useForm();
  const dispatch = useDispatch();

  const { dataAllCustomer } = useSelector((state) => state.user);

  const { handlePageClick, pageCount, nextPage } = usePagination(
    dataAllCustomer,
    10
  );

  useEffect(() => {
    dispatch(CustomerGetAll(nextPage));
  }, [nextPage]);
  console.log(
    "🚀 ~ file: AdCustomerPage.js:28 ~ AdCustomerPage ~ dataAllCustomer:",
    dataAllCustomer
  );
  return (
    <LayoutAdminAct label="Customer List" content="Manage My Customers">
      <div>
        <div className="flex items-center justify-between my-5 px-3">
          <Input
            control={control}
            name="search"
            className="!w-[300px]"
            placeholder="Search my Customer..."
          ></Input>
          <Button href="/admin/add_customer" kind="secondary2">
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
                  <tr key={item?.id} className="bg-white">
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
                    <td className="!text-center">{item?.phone_number}</td>
                    <td className="!text-center">
                      {item?.permission === userRole.USER ? (
                        <span title="USER">
                          <FontAwesomeIcon icon={faUser} size="lg" />
                        </span>
                      ) : item?.permission === userRole.ADMIN ? (
                        <span title="ADMIN">
                          <FontAwesomeIcon icon={faCrown} size="lg" />
                        </span>
                      ) : (
                        ""
                      )}
                    </td>
                    <td className="!text-center">
                      {convertUserStatus(item?.status)}
                    </td>
                    <td className="!text-center">
                      <div className="flex items-center justify-center gap-x-4">
                        <Link className="border p-2">
                          <FontAwesomeIcon icon={faEye} size="lg" />
                        </Link>
                        <Link
                          className="border p-2"
                          to={"/admin/update_customer"}
                        >
                          <FontAwesomeIcon icon={faPenToSquare} size="lg" />
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
    </LayoutAdminAct>
  );
};

export default AdCustomerPage;
