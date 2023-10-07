import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cateGetdataAll,
  cateGetdataWithId,
} from "../../../store/category/cate-slice";
import axios from "../../../api/axios";
import { proGetAll } from "../../../store/product/pro-slice";

const NavItemShop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cateGetdataAll());
    dispatch(proGetAll());
  }, [dispatch]);
  const { dataCate } = useSelector((state) => state.category);
  const { dataPro } = useSelector((state) => state.product);

  return (
    <div className="absolute top-12 left-[-92px] z-30  translate-y-8 invisible  transition-all opacity-0 duration-300 bg-white shadow-lg w-[73vw] group-hover:translate-y-0 group-hover:opacity-100  group-hover:visible">
      <div className="grid grid-cols-4 py-4 px-2">
        {dataCate.length > 0 &&
          dataCate.map((item, index) => {
            return (
              <div className="pl-[15px]" key={item.id}>
                <h1
                  className="text-[16px] font-semibold text-gray-600 mb-3"
                  onClick={() => {
                    console.log(item.id);
                  }}
                >
                  {item.name}
                </h1>
                <div className="flex flex-col justify-center gap-y-[10px]">
                  {dataPro.slice(0, 20).map((pro) => {
                    if (pro.category_id === item.id) {
                      return (
                        <span
                          className="text-sm font-normal text-[#232323]"
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
