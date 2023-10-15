import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cateGetdataAll,
  cateGetdataWithId,
} from "../../../store/category/cate-slice";
import axios from "../../../api/axios";
import { proGetAll } from "../../../store/product/pro-slice";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

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

  return (
    <div className="absolute top-12 left-[-92px] z-50  translate-y-8 invisible  transition-all opacity-0 duration-300 bg-white shadow-lg w-[73vw] group-hover:translate-y-0 group-hover:opacity-100  group-hover:visible">
      <div className="grid grid-cols-4 py-4 px-2">
        {dataCate.length > 0 &&
          dataCate.map((item, index) => {
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
                  {dataPro.slice(0, 20).map((pro) => {
                    if (pro.category_id === item.id) {
                      return (
                        <span
                          className="text-[15px] font-normal  text-gray5 hover:text-primary transition-all duration-200 cursor-pointer"
                          key={pro?.id}
                          onClick={() => {
                            console.log(pro.id);
                          }}
                        >
                          {pro?.name}
                        </span>
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
