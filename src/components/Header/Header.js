import React, { Fragment, useEffect, useState } from "react";
import HomeNavigate from "../../modules/home/HomeNavigate";
import IconSearch from "../Icons/IconSearch";
import IconTym from "../Icons/IconTym";
import IconBag from "../Icons/IconBag";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PopupMe from "../popup/PopupMe";
import useClickOutSide from "../../hooks/useClickOutSide";
import PopupSearch from "../popup/PopupSearch";
import { proGetSearch } from "../../store/product/pro-slice";
import { debounce } from "lodash";
import CartPopup from "../../modules/cart/CartPopup";
import { cartGetAll, wishListGetAll } from "../../store/cart/cart-slice";
import { getToken } from "../../utils/auth";
import { authCheckToken } from "../../store/auth/auth-slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import IconArrowDown from "../Icons/IconArrowDown";
import NavItemShopMobile from "../../modules/home/navItem/NavItemShopMobile";
const navLinks = [
  { icon: "", title: "Home", url: "/" },
  {
    icon: <IconArrowDown></IconArrowDown>,
    title: "Shop",
    url: "/shop",
    navItem: true,
  },
  { icon: "", title: "Blog", url: "/blog" },
  { icon: "", title: "About Us", url: "/about" },
  { icon: "", title: "Contact Us", url: "/contact" },
];
const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const [getTextSearch, setGetTextSearch] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cartGetAll(getToken()));
    dispatch(wishListGetAll(getToken()));
  }, []);
  useEffect(() => {
    dispatch(authCheckToken());
  }, [dispatch]);

  const { dataCartAll, dataWishListAll } = useSelector((state) => state.cart);
  const { dataProSearch, loadings } = useSelector((state) => state.product);

  const { show, setShow, nodeRef } = useClickOutSide();
  const {
    show: show2,
    setShow: setShow2,
    nodeRef: nodeRef2,
  } = useClickOutSide();

  const {
    show: show3,
    setShow: setShow3,
    nodeRef: nodeRef3,
  } = useClickOutSide();
  console.log("🚀 ~ file: Header.js:46 ~ Header ~ show3:", show3);

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
  const [openMenuSub, setOpenMenuSub] = useState(false);
  const navigate = useNavigate();
  console.log("🚀 ~ file: Header.js:83 ~ Header ~ openMenuSub:", openMenuSub);
  return (
    <Fragment>
      <CartPopup
        openCart={isModalOpenCart ? "visible" : "invisible"}
        onClose={closeModalCart}
        isClickClose={isClickCloseCart}
      ></CartPopup>
      <div className="w-full fixed z-[30] bg-white ">
        <div className=" bg-gray8 text-gray3 border-b-[1px]  flex    p-3 justify-between md:flex-row  md:justify-around lg:flex-row lg:justify-around  ">
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
              Store Location: Thường Tín, Hà Nội
            </span>
          </div>
          <div className="flex gap-x-5 items-center">
            <span className="flex gap-x-1 items-center text-gray3 text-xs font-normal invisible md:visible lg:visible  ">
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
            <span className="flex gap-x-1 items-center text-gray3 text-xs font-normal invisible md:visible lg:visible">
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
                <div className="w-[1px] h-[15px] bg-white opacity-10 hidden md:block lg:block"></div>
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

        {/* mobile */}
        <div className="  py-5 flex items-center justify-between px-6 md:px-[60px] lg:px-[275px] border-b-[1px]">
          <div className="">
            <span
              className="block md:hidden lg:hidden cursor-pointer"
              onClick={(e) => {
                e.stopPropagation(); //ngăn chặn lan truyền lên các pt cha
                setShow3(!show3);
              }}
            >
              <FontAwesomeIcon icon={faBars} size="xl" />
            </span>

            <div
              className={`bg-black opacity-75 fixed top-0 bottom-0 left-0 right-0 z-40 ${
                show3 ? "translate-x-0" : "-translate-x-full"
              } `}
            ></div>

            <div ref={nodeRef3}>
              <div
                className={`bg-white shadow-lg fixed top-0 bottom-0 left-0 w-[80%] z-[41] transition-all ${
                  show3 ? "translate-x-0" : "-translate-x-full"
                }    `}
              >
                <span
                  className="absolute top-5 right-5 cursor-pointer z-50"
                  onClick={() => setShow3(false)}
                >
                  <FontAwesomeIcon icon={faTimes} size="xl" />
                </span>

                <div className="relative top-14 px-2 ">
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
                  </div>
                  {show2 && (
                    <div ref={nodeRef2} className="">
                      <PopupSearch
                        data={dataProSearch}
                        loading={loadings.searchNamePro}
                        text={getTextSearch}
                        setShow3={setShow3}
                      ></PopupSearch>
                    </div>
                  )}
                </div>
                <div className="">
                  <div className="cursor-pointer  absolute w-[90%]   top-[130px] flex flex-col items-start pl-4 gap-y-[20px]  h-full overflow-y-auto scroll-hidden ">
                    {navLinks.length > 0 &&
                      navLinks.map((link) => {
                        return (
                          <div
                            key={link.title}
                            className=" relative connectNav border-b-2 w-full p-2 "
                          >
                            <div
                              key={link.title}
                              className=" flex items-center justify-between gap-x-1 text-[16px] font-medium text-gray6 menu-item "
                              onClick={(e) => {
                                link.title === "Shop" &&
                                  localStorage.setItem("nameShop", "");
                              }}
                            >
                              <span
                                className="block"
                                onClick={() => {
                                  navigate(link.url);
                                  setShow3(false);
                                }}
                              >
                                {link.title}
                              </span>

                              <div>
                                {openMenuSub ? (
                                  <span
                                    className="block rotate-180 transition-all "
                                    onClick={() => {
                                      setOpenMenuSub(!openMenuSub);
                                    }}
                                  >
                                    {link.icon}
                                  </span>
                                ) : (
                                  <span
                                    className="block transition-all"
                                    onClick={() => {
                                      setOpenMenuSub(!openMenuSub);
                                    }}
                                  >
                                    {link.icon}
                                  </span>
                                )}
                              </div>
                            </div>

                            <div className={`${openMenuSub ? "" : "hidden"}`}>
                              {link?.navItem === true && (
                                <NavItemShopMobile
                                  setShow3={setShow3}
                                ></NavItemShopMobile>
                              )}
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* --------------- */}

          <Link to="/">
            <div className=" w-[100px] md:w-[140px] lg:w-[160px]   ">
              <img
                src="/logoPri.png"
                alt="eco"
                className="w-full h-full object-cover"
              />
            </div>
          </Link>

          <div className="relative hidden md:block md:mx-3 lg:block">
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
                  loading={loadings.searchNamePro}
                  text={getTextSearch}
                ></PopupSearch>
              </div>
            )}
          </div>
          <div>
            <div className="flex items-center gap-x-5 ">
              <div className="flex items-center gap-x-5">
                <div className="relative">
                  <Link to="/wishList">
                    <IconTym></IconTym>
                    {dataWishListAll.length > 0 && getToken() && (
                      <div className="absolute top-[-8px] right-[-5px] font-medium bg-darkPrimary w-[20px] h-[20px] text-center leading-[20px] text-[10px] rounded-full text-[#FFF]">
                        {dataWishListAll.length >= 100
                          ? "99+"
                          : dataWishListAll.length}
                      </div>
                    )}
                  </Link>
                </div>
                <div
                  onClick={openModalCart}
                  className="cursor-pointer relative"
                >
                  <IconBag></IconBag>
                  {dataCartAll.length > 0 && getToken() && (
                    <div className="absolute top-[-8px] right-[-5px] font-medium bg-darkPrimary w-[20px] h-[20px] text-center leading-[20px] text-[10px] rounded-full text-[#FFF]">
                      {dataCartAll.length >= 100 ? "99+" : dataCartAll.length}
                    </div>
                  )}
                </div>

                {!user && (
                  <span className=" text-primary font-semibold hidden md:hidden lg:block">
                    Welcome !
                  </span>
                )}

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
                        src={user?.avata}
                        className=" w-full h-full object-cover"
                        alt=""
                      />
                    </div>
                    {show && (
                      <div ref={nodeRef}>
                        <PopupMe setShow={setShow}></PopupMe>
                      </div>
                    )}
                  </div>
                )}
              </div>
              {/* <Button kind="secondary" href="/admin">
                ADMIN
              </Button> */}
            </div>
          </div>
        </div>

        <div className="shadow-lg bg-white text-gray6  py-3  items-center justify-between md:px-[120px] lg:px-[275px] hidden md:flex lg:flex">
          <HomeNavigate></HomeNavigate>
          <div className="flex items-center gap-x-2">
            {/* <IconPhone></IconPhone> */}
            <div className="rotate-[20deg] ">
              <img src="/iconscall2.gif" className="w-[30px]" alt="" />
            </div>
            <span className="text-[14px] text-gray5 font-medium">
              0919985502
            </span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
