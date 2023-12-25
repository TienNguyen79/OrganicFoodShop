import React from "react";
import Header from "../components/Header/Header";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import BannerNav from "../components/banner/BannerNav";
const LayoutDetail = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="">
        <Header></Header>
      </div>
      <div className="mt-[128px] md:mt-[145px] lg:mt-[191px]">
        <BannerNav></BannerNav>
      </div>
      <div className="px-[10px] md:px-[40px] lg:px-[238px]  md:pb-[60px] lg:pb-[80px]  flex-grow">
        <Outlet></Outlet>
      </div>
      <div className="mt-auto">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default LayoutDetail;
