import React, { useEffect, useState } from "react";
import Header from "../components/Header/admin/Header";
import { Link, NavLink, Outlet } from "react-router-dom";

import AdNavbar from "../modules/admin/navBar/AdNavbar";
import LabelAdmin from "../components/label/LabelAdmin";

const LayoutAdminAct = ({ children, label, content, content2 }) => {
  const [isFixNav, setIsFixNav] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="relative bg-[#F4F5FA] flex flex-col min-h-screen ">
      <div
        className={` pl-[50px] z-20
         ${
           isFixNav ? " ml-[270px]" : " ml-[100px]"
         }  py-5 pr-10 fixed top-0 left-0 right-0 transition-all 
          ${
            scrollPosition > 0
              ? "bg-white shadow-lg rounded-b-xl "
              : "bg-[#F4F5FA]"
          }`}
      >
        <Header scrollPosition={scrollPosition}></Header>
      </div>
      <div
        className={` grid flex-grow  ${
          isFixNav ? "grid-cols-6 " : "grid-cols-12  "
        } `}
      >
        <div className="col-span-1 ">
          <AdNavbar isFixNav={isFixNav} setIsFixNav={setIsFixNav}></AdNavbar>
        </div>
        <div
          className={`transition-all mt-[88px] w-full  ${
            isFixNav ? "col-span-5" : "col-span-11"
          } p-8 `}
        >
          <div className="pb-5 ">
            <LabelAdmin>{label}</LabelAdmin>
          </div>
          {content && (
            <div className="text-[16px] text-gray-600 font-normal mb-10">
              <p>{content}</p>
              <p>{content2}</p>
            </div>
          )}
          {children}
        </div>
      </div>
      <div
        className={`${isFixNav ? "pl-[300px]" : "ml-[150px]"}  py-8 mt-auto `}
      >
        <h1 className="text-[#89868d] font-normal text-[16px]  opacity-80">
          © CopyRight by{" "}
          <span className="text-[rgba(75,192,192,1)] text-[18px] font-semibold font-sans">
            Nguyễn Mạnh Tiến
          </span>
        </h1>
      </div>
    </div>
  );
};

export default LayoutAdminAct;
