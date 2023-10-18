import React, { useState } from "react";
import Header from "../components/Header/Header";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import BannerNav from "../components/banner/BannerNav";
import SliderBanner from "../components/slider/SliderBanner";
import Overlay from "../components/common/Overlay";
import ProQuickView from "../modules/product/ProQuickView";
const LayoutPrimary = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="">
        <Header></Header>
      </div>
      {/* <Overlay></Overlay> */}

      <div className="pb-[80px] flex-grow">
        <Outlet></Outlet>
      </div>
      <div className="mt-auto">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default LayoutPrimary;
