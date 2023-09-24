import React, { Fragment } from "react";
import HomeNavigate from "../../modules/home/HomeNavigate";
import IconPhone from "../Icons/IconPhone";
import IconSearch from "../Icons/IconSearch";
import IconTym from "../Icons/IconTym";
import IconBag from "../Icons/IconBag";
import IconUser from "../Icons/IconUser";
import Input from "../input/Input";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Header = () => {
  const { control } = useForm();
  return (
    <div className="w-full ">
      <div className="h-[42px] bg-gray8 flex  justify-around  ">
        <div className="flex  items-center gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={17}
            height={20}
            viewBox="0 0 17 20"
            fill="none"
          >
            <path
              d="M16 8.36364C16 14.0909 8.5 19 8.5 19C8.5 19 1 14.0909 1 8.36364C1 6.41068 1.79018 4.53771 3.1967 3.15676C4.60322 1.77581 6.51088 1 8.5 1C10.4891 1 12.3968 1.77581 13.8033 3.15676C15.2098 4.53771 16 6.41068 16 8.36364Z"
              stroke="#B3B3B3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.5 10.8182C9.88071 10.8182 11 9.71925 11 8.36364C11 7.00803 9.88071 5.90909 8.5 5.90909C7.11929 5.90909 6 7.00803 6 8.36364C6 9.71925 7.11929 10.8182 8.5 10.8182Z"
              stroke="#B3B3B3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span className="text-xs text-gray3 font-normal">
            Store Location: Lincoln- 344, Illinois, Chicago, USA
          </span>
        </div>
        <div className="flex gap-x-5 items-center">
          <span className="flex gap-x-1 items-center text-gray3 text-xs font-normal">
            Eng
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={9}
              height={6}
              viewBox="0 0 9 6"
              fill="none"
            >
              <path
                d="M8 1.25L4.5 4.75L1 1.25"
                stroke="#B3B3B3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="flex gap-x-1 items-center text-gray3 text-xs font-normal">
            USD
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={9}
              height={6}
              viewBox="0 0 9 6"
              fill="none"
            >
              <path
                d="M8 1.25L4.5 4.75L1 1.25"
                stroke="#B3B3B3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <div className="w-[1px] h-[15px] bg-white opacity-10"></div>
          <div className="flex text-xs text-gray3 font-normal gap-x-1">
            <Link to="/login">
              <span className="hover:opacity-75">SignIn</span>
            </Link>
            <span>/</span>
            <Link to="/register">
              <span className="hover:opacity-75">SignUp</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="shadow-lg  py-5 flex items-center justify-around px-[151px]">
        <HomeNavigate></HomeNavigate>
        <div className="h-[38px]">
          <img
            src="/LogoEco.png"
            alt="eco"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="flex items-center gap-x-5 ">
            <div className="flex items-center gap-x-2">
              <IconPhone></IconPhone>
              <span className="text-[14px] text-gray9 font-medium">
                (219) 555-0114
              </span>
            </div>
            <div className="flex items-center gap-x-5">
              <div className="relative group ">
                <IconSearch></IconSearch>
                <div className="absolute w-[350px] flex -translate-y-9   translate-x-[500px] transition-all duration-250  group-hover:translate-x-0  ">
                  <Input control={control} name="search">
                    <IconSearch></IconSearch>
                  </Input>
                  <button className="bg-primary py-[14px] px-[24px] text-white text-xs font-semibold rounded-tr-md rounded-br-md">
                    Search
                  </button>
                </div>
              </div>
              <IconTym></IconTym>
              <IconBag></IconBag>
              <IconUser></IconUser>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
