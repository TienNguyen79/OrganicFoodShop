import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cateGetdataAll,
  cateGetdataWithId,
} from "../../../store/category/cate-slice";
import axios from "../../../api/axios";
import { proGetAll } from "../../../store/product/pro-slice";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import LabelRedirect from "../../../components/label/LabelRedirect";
import IconArrowDown from "../../../components/Icons/IconArrowDown";
import useClickOutSide from "../../../hooks/useClickOutSide";

const NavItemShopMobile = ({ setShow3 }) => {
  const { setValue, watch } = useForm({
    mode: "onChange",
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cateGetdataAll());
    dispatch(proGetAll());
  }, [dispatch]);
  const { dataCate } = useSelector((state) => state.category);

  const { dataPro } = useSelector((state) => state.product);

  const navigate = useNavigate();
  const [sortedDataCate, setSortedDataCate] = useState([]);

  useEffect(() => {
    if (dataCate) {
      const sortedData = [...dataCate].sort(
        (a, b) => b.gross_product - a.gross_product
      );
      setSortedDataCate(sortedData);
    }
  }, [dataCate]);

  const [openSubNav, setOpenSubNav] = useState(null);
  const toggleSubNav = (itemId) => {
    //mới đầu ấn sẽ lên một cái itemId mới so khác null ban đầu thì nó lấy itemId mới
    //có nghĩa là khi nào ấn 2 lần  nó sẽ đóng lại(null) ,
    //khi đó itemId sẽ vẫn được giữ bằng số trc đó và khi nhấn số mới so openSubNav và itemId khác nhau thì nó sẽ lấy itemId mới và sẽ mở ra
    //ấn số cũ nó lại set null thôi
    setOpenSubNav(openSubNav === itemId ? null : itemId);
  };
  // const {
  //   show: show3,
  //   setShow: setShow3,
  //   nodeRef: nodeRef3,
  // } = useClickOutSide();

  return (
    <div className="">
      {/* <div className="flex pt-2 pr-4 justify-end">
        <LabelRedirect
          title="See More"
          className="hover:opacity-75 font-semibold transition-all"
          url="/shop"
        ></LabelRedirect>
      </div> */}
      <div className=" flex flex-col py-4 ">
        {sortedDataCate.length > 0 &&
          sortedDataCate.map((item, index) => {
            return (
              <div className="" key={item.id}>
                <div
                  className="flex items-center justify-between   border-b-2 "
                  onClick={() => {
                    toggleSubNav(item.id);
                  }}
                >
                  <h1
                    className="text-[14px] font-normal text-gray-600 mb-3 p-1 cursor-pointer hover:text-primary transition-all duration-200"
                    onClick={() => {
                      // navigate(`/shop/${item.id || item.slug}`);

                      // setValue("cate", parseInt(item.id));
                      // localStorage.setItem("idCate", item.id);
                      window.location.href = `/shop/${item.id || item.slug}`; //nếu để điều hướng như cái trên có 1 số lỗi ở shop
                      localStorage.removeItem("nameShop");
                    }}
                  >
                    {item.name}
                  </h1>
                  {openSubNav === item?.id ? (
                    <span className="block rotate-180 transition-all">
                      <IconArrowDown></IconArrowDown>
                    </span>
                  ) : (
                    <span className="block  transition-all ">
                      <IconArrowDown></IconArrowDown>
                    </span>
                  )}
                </div>
                {openSubNav === item?.id && (
                  <div className={`h-[200px] overflow-y-auto `}>
                    <div className=" flex flex-col justify-center gap-y-[10px] text-red-600   ">
                      {dataPro?.length > 0 &&
                        dataPro.map((pro) => {
                          if (pro.category_id === item.id) {
                            return (
                              <Link
                                className="text-[15px] py-[2px] mt-2 font-normal  text-gray5 hover:text-primary transition-all duration-200 cursor-pointer whitespace-nowrap overflow-hidden overflow-ellipsis max-w-[220px]
"
                                key={pro?.id}
                                onClick={() => {
                                  console.log(pro.id);
                                  setShow3(false);
                                }}
                                to={`/productDetails/${pro.id}`}
                              >
                                {pro?.name}
                              </Link>
                            );
                          }
                        })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default NavItemShopMobile;
