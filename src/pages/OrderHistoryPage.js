import React from "react";
import LabelRedirect from "../components/label/LabelRedirect";
import Table from "../components/table/Table";
import Label from "../components/label/Label";

const OrderHistoryPage = () => {
  return (
    <div>
      <div className="flex items-center justify-between py-4 px-3 ">
        <div className="relative">
          <Label className="text-[20px] ">Order History</Label>
          <div className="absolute after:bg-primary after:absolute after:contents-'' after:w-[130px] after:h-[2px] "></div>
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
          </tbody>
        </table>
      </Table>
      <div className="mt-8 text-center">
        <h1>1 2 3 4 ... 5 6</h1>
      </div>
    </div>
  );
};

export default OrderHistoryPage;
