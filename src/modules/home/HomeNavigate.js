import React from "react";
import IconArrowDown from "../../components/Icons/IconArrowDown";
import { NavLink, useLocation } from "react-router-dom";
import NavItemShop from "./navItem/NavItemShop";
import NavItemPage from "./navItem/NavItemPage";

const navLinks = [
  { icon: "", title: "Home", url: "/" },
  {
    icon: <IconArrowDown></IconArrowDown>,
    title: "Shop",
    url: "/shop",
    navItem: <NavItemShop></NavItemShop>,
  },
  {
    icon: <IconArrowDown></IconArrowDown>,
    title: "Page",
    url: "/page",
    navItem: <NavItemPage></NavItemPage>,
  },
  { icon: "", title: "Blog", url: "/blog" },
  { icon: "", title: "About Us", url: "/about" },
  { icon: "", title: "Contact Us", url: "/contact" },
];

const HomeNavigate = () => {
  const location = useLocation();

  return (
    <div className="flex items-center gap-x-[27px]  ">
      {navLinks.length > 0 &&
        navLinks.map((link) => {
          return (
            <div key={link.title} className="group relative connectNav">
              <NavLink
                key={link.title}
                to={link.url}
                className="flex items-center gap-x-1 text-[14px] font-medium text-gray5 menu-item hover:text-primary first-link"
                onClick={() =>
                  link.title === "Shop" && localStorage.setItem("nameShop", "")
                }
                activeclassname="active"
              >
                <span>{link.title}</span>
                <span>{link.icon}</span>
              </NavLink>
              {link?.navItem}
            </div>
          );
        })}
    </div>
  );
};

export default HomeNavigate;
