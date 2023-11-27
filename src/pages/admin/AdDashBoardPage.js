import React from "react";
import BoxOverviewItem from "../../modules/admin/dashboard/BoxOverviewItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faHouse,
  faReceipt,
  faSackDollar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import ChartExample from "../../modules/admin/dashboard/ChartExample";
import PieChart from "../../modules/admin/dashboard/PieChart";
const AdDashBoardPage = () => {
  return (
    <div className="">
      <div className="relative flex justify-between items-center bg-white p-5 mt-10 rounded-md">
        <div>
          <h1 className="text-[20px] font-medium text-gray-700">
            Congratulations Tiến! 🎉
          </h1>
          <p className="pt-4 text-gray5">
            You have done 72% 😎 more sales today.
            <br />
            Check your new raising badge in your profile
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
      <div className="mt-10 grid grid-cols-4 gap-x-4">
        <BoxOverviewItem
          title="Total Sales"
          unit="$"
          icon={<FontAwesomeIcon icon={faSackDollar} size="2xl" />}
          colorIcon="text-[#ffb400]"
        ></BoxOverviewItem>
        <BoxOverviewItem
          title="Total Order"
          quantity={9998}
          icon={<FontAwesomeIcon icon={faReceipt} size="2xl" />}
          colorIcon="text-[#16b1ff]"
        ></BoxOverviewItem>
        <BoxOverviewItem
          title="Total Customer"
          quantity="8000"
          icon={<FontAwesomeIcon icon={faUser} size="2xl" />}
          colorIcon="text-[#9055fd]"
        ></BoxOverviewItem>
        <BoxOverviewItem
          title="Total products"
          quantity={3000}
          icon={<FontAwesomeIcon icon={faBagShopping} size="2xl" />}
          colorIcon="text-[#20c997]"
        ></BoxOverviewItem>
      </div>
      <div className="mt-[80px]  flex items-start gap-x-[250px]">
        <div className="w-[600px] h-[400px]">
          <ChartExample></ChartExample>
        </div>
        <div>
          <PieChart></PieChart>
        </div>
      </div>
    </div>
  );
};

export default AdDashBoardPage;
