import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faArrowRight,
  faBoxOpen,
  faList,
  faCartShopping,
  faUser,
  faBlog,
  faAddressCard,
  faCircleInfo,
  faGear,
  faAngleRight,
  faThumbTack,
} from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";

const navLink = [
  {
    id: 1,
    name: "Dasboards",
    icon: <FontAwesomeIcon icon={faHouse} size="lg" />,
    icondown: "",
    to: "/admin/dashboards",
    navSub: [],
  },
  {
    id: 2,
    name: "Products",
    icon: <FontAwesomeIcon icon={faBoxOpen} size="lg" />,
    icondown: <FontAwesomeIcon icon={faAngleRight} />,
    to: "#",
    navSub: [
      {
        id: 1,
        name: "Product List",
        icon: <FontAwesomeIcon icon={faArrowRight} size="xs" />,
        to: "/admin/products/product_list",
      },
      {
        id: 2,
        name: "Sale of the year",
        icon: <FontAwesomeIcon icon={faArrowRight} size="xs" />,
        to: "/admin/saleOftheYear_Products",
      },
    ],
  },
  {
    id: 3,
    name: "Categories",
    icon: <FontAwesomeIcon icon={faList} size="lg" />,
    icondown: "",
    to: "/admin/categories",
    navSub: [],
  },
  {
    id: 4,
    name: "Orders",
    icon: <FontAwesomeIcon icon={faCartShopping} size="lg" />,
    icondown: "",
    to: "/admin/order",
    navSub: [],
  },
  {
    id: 5,
    name: "Customers",
    icon: <FontAwesomeIcon icon={faUser} size="lg" />,
    icondown: "",
    to: "/admin/customers",
    navSub: [],
  },
  {
    id: 6,
    name: "Blogs",
    icon: <FontAwesomeIcon icon={faBlog} size="lg" />,
    icondown: <FontAwesomeIcon icon={faAngleRight} />,
    to: "#",
    navSub: [
      {
        id: 1,
        name: "Blog List",
        icon: <FontAwesomeIcon icon={faArrowRight} size="xs" />,
        to: "/admin/blog/blog_list",
      },
      {
        id: 2,
        name: "Comment Blog",
        icon: <FontAwesomeIcon icon={faArrowRight} size="xs" />,
        to: "/admin/commentBlog",
      },
    ],
  },
  {
    id: 7,
    name: "AboutUs",
    icon: <FontAwesomeIcon icon={faAddressCard} size="lg" />,
    icondown: "",
    to: "/admin/AboutUs",
    navSub: [],
  },
  {
    id: 8,
    name: "Contact",
    icon: <FontAwesomeIcon icon={faCircleInfo} size="lg" />,
    icondown: "",
    to: "/admin/contact",
    navSub: [],
  },
  {
    id: 9,
    name: "Settings",
    icon: <FontAwesomeIcon icon={faGear} size="lg" />,
    icondown: "",
    to: "/admin/settings",
    navSub: [],
  },
];

const AdNavbar = ({ isFixNav, setIsFixNav }) => {
  const [openSubNav, setOpenSubNav] = useState(null);

  const toggleSubNav = (itemId) => {
    //mới đầu ấn sẽ lên một cái itemId mới so khác null ban đầu thì nó lấy itemId mới
    //có nghĩa là khi nào ấn 2 lần  nó sẽ đóng lại(null) ,
    //khi đó itemId sẽ vẫn được giữ bằng số trc đó và khi nhấn số mới so openSubNav và itemId khác nhau thì nó sẽ lấy itemId mới và sẽ mở ra
    //ấn số cũ nó lại set null thôi
    setOpenSubNav(openSubNav === itemId ? null : itemId);
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // setOpenSubNav(null);
  };
  return (
    <Fragment>
      <div
        className={` fixed top-0   left-0 bottom-0  transition-all duration-500 z-30 ${
          isHovered || isFixNav ? "w-[250px] " : "w-[100px] "
        } ${isHovered && !isFixNav && "shadow-xl"}  bg-[#F4F5FA] py-3 px-4`}
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
                isFixNav ? "rotate-0 text-darkPrimary" : "-rotate-90"
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
                className="flex justify-between items-center cursor-pointer z-10 group"
                onClick={() => {
                  toggleSubNav(item.id);
                }}
              >
                <NavLink
                  to={item.to}
                  className={`flex items-center gap-x-4 py-2 group-hover:text-primary  ${
                    isHovered ? "" : " "
                  }`}
                >
                  <span className="block ml-4">{item.icon}</span>
                  <span
                    className={`block transition-all text-gray-600 group-hover:text-primary  text-[18px]  ${
                      isHovered || isFixNav
                        ? "opacity-100 translate-y-0 "
                        : "opacity-0 -translate-y-10 hidden "
                    }  `}
                  >
                    {item.name}
                  </span>
                </NavLink>
                <div
                  className={` group-hover:text-primary ${
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
                    ? "h-[60px] !translate-x-0 "
                    : openSubNav === item.id && openSubNav === 6
                    ? "h-[60px] !translate-x-0"
                    : "h-[0px]   "
                }  ${!isFixNav && !isHovered && "hidden"}`}
              >
                {openSubNav === item.id &&
                  item.navSub.length > 0 &&
                  item.navSub.map((navSub) => (
                    <NavLink
                      className={`pl-3 py-1 flex items-center gap-x-2 group `}
                      key={navSub.id}
                      to={navSub.to}
                    >
                      <span className="block group-hover:text-primary">
                        {navSub.icon}
                      </span>
                      <span className="text-gray-600 text-[16px] group-hover:text-primary ">
                        {navSub.name}
                      </span>
                    </NavLink>
                  ))}
              </div>
            </div>
          ))}
      </div>
    </Fragment>
  );
};

export default AdNavbar;
