import React from "react";
import Header from "../components/Header/Header";
import BannerNav from "../components/banner/BannerNav";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import IconBag from "../components/Icons/IconBag";
import DashBoard from "../components/Icons/iconNavUser/DashBoard";
import CircleArrow from "../components/Icons/iconNavUser/CircleArrow";
import Setting from "../components/Icons/iconNavUser/Setting";
import IconLogout from "../components/Icons/iconNavUser/IconLogout";

const navLink = [
  {
    id: 1,
    icon: <DashBoard></DashBoard>,
    name: "Dashboard",
    to: "/user_dashboard",
  },
  {
    id: 2,
    icon: <CircleArrow></CircleArrow>,
    name: "Order History",
    to: "/order_history",
  },
  {
    id: 3,
    icon: <Setting></Setting>,
    name: "Settings",
    to: "/setting",
  },
  {
    id: 4,
    icon: <IconLogout></IconLogout>,
    name: "Log-out",
    to: "/logout",
  },
];

const LayoutUser = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="">
        <Header></Header>
      </div>
      <div className="mt-[191px]">
        <BannerNav></BannerNav>
      </div>
      <div className="px-[238px] pt-8 pb-[80px]  flex-grow">
        <div className="grid grid-cols-4 gap-x-4">
          <div className="col-span-1 pt-6 pb-4 border border-[#E6E6E6] rounded-lg">
            <h1 className="text-gray9 text-[18px] font-medium pl-5 pb-4">
              Navigate
            </h1>
            {navLink.map((item) => (
              <NavLink
                className="flex gap-x-[10px] items-center py-4 px-5 second-link text-[#666] "
                key={item.id}
                to={item.to}
                activeclassname="active"
              >
                <span>{item.icon}</span>
                <span className=" font-normal text-[16px] ">{item.name}</span>
              </NavLink>
            ))}
          </div>
          <div className="col-span-3">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default LayoutUser;
