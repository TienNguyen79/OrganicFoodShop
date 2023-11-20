import React, { useEffect } from "react";
import UserAvatar from "../modules/user/parts/UserAvatar";
import UserName from "../modules/user/parts/UserName";
import UserRole from "../modules/user/parts/UserRole";
import LabelRedirect from "../components/label/LabelRedirect";
import Table from "../components/table/Table";
import Label from "../components/label/Label";
import { useDispatch, useSelector } from "react-redux";
import { orderGetDataAll } from "../store/order/order-slice";
import { convertDate, convertStatus } from "../constants/global";
import { authCheckToken } from "../store/auth/auth-slice";
import { useState } from "react";

const UserDashBoardPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(orderGetDataAll());
  }, []);
  useEffect(() => {
    dispatch(authCheckToken());
  }, []);
  const { user, accessToken } = useSelector((state) => state.auth);
  const { dataOrderAll } = useSelector((state) => state.order);
  console.log(
    "🚀 ~ file: UserDashBoardPage.js:25 ~ UserDashBoardPage ~ dataOrderAll:",
    dataOrderAll
  );
  const [dataInfoShip, setDataInfoShip] = useState([]);
  console.log(
    "🚀 ~ file: UserDashBoardPage.js:26 ~ UserDashBoardPage ~ dataInfoShip:",
    dataInfoShip
  );

  useEffect(() => {
    var storedArrayJSON = localStorage.getItem("DataInfoShip");
    var storedArray = JSON.parse(storedArrayJSON);
    setDataInfoShip(storedArray);
  }, []);

  return (
    <div>
      <div className="flex items-center gap-x-6">
        <div className="py-6 flex-1 flex flex-col items-center justify-center border border-[#E6E6E6] rounded-lg">
          <UserAvatar
            className="w-[120px] h-[120px]"
            linkUrl={user?.avata}
          ></UserAvatar>
          <UserName
            className="text-[18px] font-medium mt-2 capitalize"
            name={user?.name}
          ></UserName>
          <UserRole></UserRole>
          <LabelRedirect
            icon=""
            className="mt-3 font-medium"
            title="Edit Profile"
            url="/settings"
          ></LabelRedirect>
        </div>
        <div className="flex-1 py-6 pl-6 border border-[#E6E6E6] rounded-lg  flex flex-col gap-y-3">
          <h1 className="text-[#999] text-sm font-medium uppercase">
            Shipping Address
          </h1>
          <h1 className="text-gray9 font-medium text-[18px] capitalize">
            {dataInfoShip?.name}
          </h1>
          <p className="text-gray6 text-sm font-normal">
            {dataInfoShip?.shippingAddress}
          </p>
          <p className="text-gray9 text-[16px] font-normal">
            {dataInfoShip?.email}
          </p>
          <p className="text-gray9 text-[16px] font-medium">
            {dataInfoShip?.phone_number}
          </p>
          <LabelRedirect
            icon=""
            className="mt-3 font-medium"
            title="Edit Address"
            url="/settings"
          ></LabelRedirect>
        </div>
      </div>
      <div className="mt-6">
        <div className="flex items-center justify-between py-4 px-3 ">
          <div className="relative">
            <Label className="text-[20px] ">Recent Order History</Label>
            <div className="absolute after:bg-primary after:absolute after:contents-'' after:w-[190px] after:h-[2px] "></div>
          </div>
          <LabelRedirect
            icon=""
            className="mt-3 font-medium"
            title="View All"
            url="/order_history"
          ></LabelRedirect>
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
                dataOrderAll?.data?.slice(0, 5).map((item) => (
                  <tr key={item.id}>
                    <td className="text-gray8 text-sm">#{item?.id}</td>
                    <td>{convertDate(item?.created_at)}</td>
                    <td className="text-sm font-medium whitespace-nowrap overflow-hidden overflow-ellipsis max-w-[170px]">
                      <span className="text-gray8 text-[16px] font-semibold">
                        ${item?.total_price}
                      </span>{" "}
                      <span className="text-gray8 text-sm font-medium ">
                        ({item?.products_order?.length} Product)
                      </span>
                    </td>
                    <td>{convertStatus(item?.approval_status)}</td>
                    <td>
                      <LabelRedirect
                        icon=""
                        className="text-sm  font-medium"
                        title="View Details"
                        url={`/order_details/${item?.id}`}
                      ></LabelRedirect>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </Table>
      </div>
    </div>
  );
};

export default UserDashBoardPage;
