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
      <BannerNav></BannerNav>
      <div className="px-[238px] pb-[80px] flex-grow">
        <Outlet></Outlet>
      </div>
      <div className="mt-auto">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default LayoutDetail;
