import React from "react";
import UserAvatar from "../modules/user/parts/UserAvatar";
import UserName from "../modules/user/parts/UserName";
import UserRole from "../modules/user/parts/UserRole";
import LabelRedirect from "../components/label/LabelRedirect";
import Table from "../components/table/Table";
import Label from "../components/label/Label";

const UserDashBoardPage = () => {
  return (
    <div>
      <div className="flex items-center gap-x-6">
        <div className="py-6 flex-1 flex flex-col items-center justify-center border border-[#E6E6E6] rounded-lg">
          <UserAvatar className="w-[120px] h-[120px]"></UserAvatar>
          <UserName className="text-[18px] font-medium mt-2"></UserName>
          <UserRole></UserRole>
          <LabelRedirect
            icon=""
            className="mt-3 font-medium"
            title="Edit Profile"
          ></LabelRedirect>
        </div>
        <div className="flex-1 py-6 pl-6 border border-[#E6E6E6] rounded-lg  flex flex-col gap-y-3">
          <h1 className="text-[#999] text-sm font-medium uppercase">
            Billing Address
          </h1>
          <h1 className="text-gray9 font-medium text-[18px]">Dainne Russell</h1>
          <p className="text-gray6 text-sm font-normal">
            4140 Parker Rd. Allentown, New Mexico 31134
          </p>
          <p className="text-gray9 text-[16px] font-normal">
            dainne.ressell@gmail.com
          </p>
          <p className="text-gray9 text-[16px] font-medium">0918866336</p>
          <LabelRedirect
            icon=""
            className="mt-3 font-medium"
            title="Edit Address"
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
              <tr>
                <td className="text-gray8 text-sm">#738</td>
                <td>8 Sep, 2020</td>
                <td>
                  <span className="text-gray8 text-sm font-semibold">
                    $135.00
                  </span>{" "}
                  (5 Products)
                </td>
                <td>Processing</td>
                <td>
                  <LabelRedirect
                    icon=""
                    className="text-sm  font-medium"
                    title="View Details"
                    url="/order_details/1"
                  ></LabelRedirect>
                </td>
              </tr>
              <tr>
                <td className="text-gray8 text-sm">#738</td>
                <td>8 Sep, 2020</td>
                <td>
                  <span className="text-gray8 text-sm font-semibold">
                    $135.00
                  </span>{" "}
                  (5 Products)
                </td>
                <td>Processing</td>
                <td>
                  <LabelRedirect
                    icon=""
                    className="text-sm  font-medium"
                    title="View Details"
                  ></LabelRedirect>
                </td>
              </tr>
              <tr>
                <td className="text-gray8 text-sm">#738</td>
                <td>8 Sep, 2020</td>
                <td>
                  <span className="text-gray8 text-sm font-semibold">
                    $135.00
                  </span>{" "}
                  (5 Products)
                </td>
                <td>Processing</td>
                <td>
                  <LabelRedirect
                    icon=""
                    className="text-sm  font-medium"
                    title="View Details"
                  ></LabelRedirect>
                </td>
              </tr>
              <tr>
                <td className="text-gray8 text-sm">#738</td>
                <td>8 Sep, 2020</td>
                <td>
                  <span className="text-gray8 text-sm font-semibold">
                    $135.00
                  </span>{" "}
                  (5 Products)
                </td>
                <td>Processing</td>
                <td>
                  <LabelRedirect
                    icon=""
                    className="text-sm  font-medium"
                    title="View Details"
                  ></LabelRedirect>
                </td>
              </tr>
              <tr>
                <td className="text-gray8 text-sm">#738</td>
                <td>8 Sep, 2020</td>
                <td>
                  <span className="text-gray8 text-sm font-semibold">
                    $135.00
                  </span>{" "}
                  (5 Products)
                </td>
                <td>Processing</td>
                <td>
                  <LabelRedirect
                    icon=""
                    className="text-sm  font-medium"
                    title="View Details"
                  ></LabelRedirect>
                </td>
              </tr>
            </tbody>
          </table>
        </Table>
      </div>
    </div>
  );
};

export default UserDashBoardPage;
