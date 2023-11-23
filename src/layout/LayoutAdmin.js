import React, { useState } from "react";
import Header from "../components/Header/admin/Header";
import { Link, NavLink, Outlet } from "react-router-dom";

import AdNavbar from "../modules/admin/navBar/AdNavbar";

const LayoutAdmin = () => {
  const [isFixNav, setIsFixNav] = useState(false);

  return (
    <div className="relative">
      <div className="pl-[286px] py-5 pr-10">
        <Header></Header>
      </div>
      <div className={`grid  ${isFixNav ? "grid-cols-6 " : "grid-cols-12  "} `}>
        {/* <div className="col-span-1">
          <div
            className={` absolute top-0  left-0   transition-all duration-500  ${
              isHovered || isFixNav ? "w-[250px] " : "w-[100px]"
            }   bg-[#F4F5FA] py-3 px-4`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex justify-between items-center cursor-pointer">
              <div className="w-[80px] ">
                <img
                  src="/logoMT2.png"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="block" onClick={() => setIsFixNav(!isFixNav)}>
                <span
                  className={`block transition-all  ${
                    isFixNav ? "rotate-0" : "-rotate-90"
                  } ${isHovered || isFixNav ? "visible" : "invisible"}`}
                >
                  <FontAwesomeIcon icon={faThumbTack} size="xl" />
                </span>
              </div>
            </div>
            {navLink.length > 0 &&
              navLink.map((item) => (
                <div key={item.id} className="pt-4 ">
                  <div
                    className="flex justify-between items-center cursor-pointer z-10"
                    onClick={() => {
                      toggleSubNav(item.id);
                    }}
                  >
                    <NavLink
                      to={item.to}
                      className={`flex items-center gap-x-4 py-2  ${
                        isHovered ? "" : " "
                      }`}
                    >
                      <span className="block ml-4">{item.icon}</span>
                      <span
                        className={` transition-all text-gray-600   text-[18px]  ${
                          isHovered || isFixNav
                            ? "opacity-100 translate-y-0 "
                            : "opacity-0 -translate-y-10 "
                        }`}
                      >
                        {item.name}
                      </span>
                    </NavLink>
                    <div
                      className={` ${
                        isHovered || isFixNav
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                      }`}
                    >
                      {openSubNav === item.id ? (
                        <span className="transition-all   duration-300 rotate-90 block">
                          {item.icondown}
                        </span>
                      ) : (
                        <span className="transition-all duration-300 rotate-0 block">
                          {item.icondown}
                        </span>
                      )}
                    </div>
                  </div>
                  <div
                    className={`z-[1] transition-all flex flex-col gap-y-3 duration-500 -translate-x-full  ${
                      openSubNav === item.id && openSubNav === 2
                        ? "h-[200px] !translate-x-0 "
                        : openSubNav === item.id && openSubNav === 6
                        ? "h-[30px] !translate-x-0"
                        : "h-[0px]   "
                    } `}
                  >
                    {openSubNav === item.id &&
                      item.navSub.length > 0 &&
                      item.navSub.map((navSub) => (
                        <NavLink
                          className={`pl-3 py-1 flex items-center gap-x-2 `}
                          key={navSub.id}
                          to={navSub.to}
                        >
                          {navSub.icon}
                          <span className="text-gray-600 text-[16px] ">
                            {navSub.name}
                          </span>
                        </NavLink>
                      ))}
                  </div>
                </div>
              ))}
          </div>
        </div> */}
        <div className="col-span-1">
          <AdNavbar isFixNav={isFixNav} setIsFixNav={setIsFixNav}></AdNavbar>
        </div>
        <div
          className={`transition-all w-full  ${
            isFixNav ? "col-span-5" : "col-span-11"
          } p-8`}
        >
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default LayoutAdmin;
