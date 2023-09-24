import React from "react";
import Header from "../components/Header/Header";
import BannerNav from "../components/banner/BannerNav";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";

const LayoutAuth = ({ children, heading, navName, navLink }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="">
        <Header></Header>
      </div>
      <BannerNav></BannerNav>
      <div className="px-[238px] pb-[80px] flex-grow">
        <div className="w-full max-w-[520px] my-[80px] px-6 pt-6 pb-[32px] bg-white shadow-lg mx-auto">
          <h1 className="text-[32px] font-semibold text-gray9 mb-5 text-center">
            {heading}
          </h1>
          {children}

          <div className="mt-[18px] text-center">
            <span className="text-sm text-gray-600 font-normal">
              Don’t have account?
            </span>
            <Link to={navLink}>
              <span className="font-medium text-sm text-gray9"> {navName}</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default LayoutAuth;
