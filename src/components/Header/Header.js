import React, { Fragment, useEffect, useState } from "react";
import HomeNavigate from "../../modules/home/HomeNavigate";
import IconPhone from "../Icons/IconPhone";
import IconSearch from "../Icons/IconSearch";
import IconTym from "../Icons/IconTym";
import IconBag from "../Icons/IconBag";
import IconUser from "../Icons/IconUser";
import Input from "../input/Input";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PopupMe from "../popup/PopupMe";
import useClickOutSide from "../../hooks/useClickOutSide";
import { cateGetdataAll } from "../../store/category/cate-slice";
import PopupSearch from "../popup/PopupSearch";
import { proGetSearch } from "../../store/product/pro-slice";
import lodash, { debounce } from "lodash";
import CartPopup from "../../modules/cart/CartPopup";
const Header = () => {
  const { control, getValues } = useForm();
  const { user, accessToken } = useSelector((state) => state.auth);
  const [getTextSearch, setGetTextSearch] = useState("");
  const dispatch = useDispatch();

  const { dataProSearch, loading } = useSelector((state) => state.product);

  const { show, setShow, nodeRef } = useClickOutSide();
  const {
    show: show2,
    setShow: setShow2,
    nodeRef: nodeRef2,
  } = useClickOutSide();

  //xử lý tìm kiếm theo tên
  const handleFilterChangeDebounced = debounce((searchTerm) => {
    dispatch(proGetSearch(searchTerm));
  }, 500); // tối ưu việc tìm kiếm

  const handleFilterChange = (e) => {
    const searchTerm = e.target.value;
    handleFilterChangeDebounced(searchTerm);
    setGetTextSearch(searchTerm);
  };

  const [isModalOpenCart, setModalOpenCart] = useState(false);
  const [isClickCloseCart, setIsClickCloseCart] = useState(false);
  const openModalCart = () => {
    setModalOpenCart(true);
  };
  const closeModalCart = () => {
    setModalOpenCart(false);
    setIsClickCloseCart(true);
  };

  return (
    <Fragment>
      <CartPopup
        openCart={isModalOpenCart ? "visible" : "invisible"}
        onClose={closeModalCart}
        isClickClose={isClickCloseCart}
      ></CartPopup>
      <div className="w-full fixed z-[30] bg-white ">
        <div className="h-[42px] bg-gray8 text-gray3 border-b-[1px] flex  justify-around  ">
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
            {!user && (
              <Fragment>
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
              </Fragment>
            )}
          </div>
        </div>
        <div className="  py-5 flex items-center justify-between px-[275px] border-b-[1px]">
          <Link to="/">
            <div className="h-[38px]">
              <img
                src="/LogoEco.png"
                alt="eco"
                className="w-full h-full object-cover"
              />
            </div>
          </Link>

          <div className="relative">
            <div className="flex justify-center group">
              <span className="absolute top-2/4 left-4 -translate-y-2/4 select-none cursor-pointer ">
                <IconSearch></IconSearch>
              </span>
              <input
                placeholder="Search for product..."
                className="w-[400px] py-3 px-4 border font-medium pl-12  rounded-md placeholder:text-text4 dark:placeholder:text-text2 dark:text-white text-text1 "
                onChange={handleFilterChange}
                onClick={(e) => {
                  e.stopPropagation(); //ngăn chặn lan truyền lên các pt cha
                  setShow2(!show);
                }}
              ></input>
              {/* <button className="bg-primary py-[14px] px-[24px] text-white text-xs font-semibold rounded-tr-md rounded-br-md">
              Search
            </button> */}
            </div>
            {show2 && (
              <div ref={nodeRef2} className="">
                <PopupSearch
                  data={dataProSearch}
                  loading={loading}
                  text={getTextSearch}
                ></PopupSearch>
              </div>
            )}
          </div>
          <div>
            <div className="flex items-center gap-x-5 ">
              <div className="flex items-center gap-x-5">
                <IconTym></IconTym>
                <div onClick={openModalCart} className="cursor-pointer">
                  <IconBag></IconBag>
                </div>

                {!user && <span>Hello You</span>}

                {user && (
                  <div className="relative">
                    <div
                      title={user.name}
                      className="w-8 h-8  border-2  rounded-full overflow-hidden cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation(); //ngăn chặn lan truyền lên các pt cha
                        setShow(!show);
                      }}
                    >
                      <img
                        src="https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg"
                        className=" w-full h-full object-cover"
                        alt=""
                      />
                    </div>
                    {show && (
                      <div ref={nodeRef}>
                        <PopupMe></PopupMe>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="shadow-lg bg-white text-gray6  py-3 flex items-center justify-between px-[275px]">
          <HomeNavigate></HomeNavigate>
          <div className="flex items-center gap-x-2">
            <IconPhone></IconPhone>
            <span className="text-[14px] text-gray5 font-medium">
              (219) 555-0114
            </span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
