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

const NavItemShop = () => {
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

  return (
    <div className="absolute top-12 left-[-92px] z-50 h-[282px] overflow-hidden  translate-y-8 invisible  transition-all opacity-0 duration-300 bg-white shadow-lg w-[73vw] group-hover:translate-y-0 group-hover:opacity-100  group-hover:visible">
      <div className="flex pt-2 pr-4 justify-end">
        <LabelRedirect
          title="See More"
          className="hover:opacity-75 font-semibold transition-all"
          url="/shop"
        ></LabelRedirect>
      </div>
      <div className="grid grid-cols-4 py-4 px-2">
        {sortedDataCate.length > 0 &&
          sortedDataCate.map((item, index) => {
            return (
              <div className="pl-[15px]" key={item.id}>
                <h1
                  className="text-[16px] font-semibold text-gray-600 mb-3 cursor-pointer hover:text-primary transition-all duration-200"
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
                <div className="flex flex-col justify-center gap-y-[10px]">
                  {dataPro?.length > 0 &&
                    dataPro.map((pro) => {
                      if (pro.category_id === item.id) {
                        return (
                          <Link
                            className="text-[15px] font-normal  text-gray5 hover:text-primary transition-all duration-200 cursor-pointer whitespace-nowrap overflow-hidden overflow-ellipsis max-w-[220px]
"
                            key={pro?.id}
                            onClick={() => {
                              console.log(pro.id);
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
            );
          })}
      </div>
    </div>
  );
};

export default NavItemShop;
