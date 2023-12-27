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
import { useDispatch } from "react-redux";

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
    to: "/settings",
  },
  // {
  //   id: 4,
  //   icon: <IconLogout></IconLogout>,
  //   name: "Log-out",
  //   to: "#",

  // },
];

const LayoutUser = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col min-h-screen">
      <div className="">
        <Header></Header>
      </div>
      <div className="mt-[128px] md:mt-[145px] lg:mt-[191px]">
        <BannerNav></BannerNav>
      </div>
      <div className="px-[10px] md:px-[40px] lg:px-[238px] pt-8 md:pb-[60px] lg:pb-[80px]   flex-grow">
        <div className="grid lg:grid-cols-4 gap-x-4">
          <div className="lg:col-span-1 pt-6 pb-4 border h-[237px] border-[#E6E6E6] rounded-lg hidden lg:block">
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
          <div className="lg:col-span-3">
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
