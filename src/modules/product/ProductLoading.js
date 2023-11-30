import React, { Fragment, useState } from "react";
import ProImage from "./parts/ProImage";
import ProTitle from "./parts/ProTitle";
import ProPrice from "./parts/ProPrice";
import IconBagPro from "../../components/Icons/IconBagPro";
import ProSale from "./parts/ProSale";
import IconEyeOpen from "../../components/Icons/IconEyeOpen";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { defaultImage3 } from "../../constants/global";

const ProductLoading = () => {
  return (
    <Fragment>
      <div className="border  border-gray-200 bg-white rounded-lg h-[407px] cursor-pointer flex flex-col relative  transition-all  shadowgreen">
        <Skeleton count={1} width="230px" height="300px"></Skeleton>
        <div className="flex justify-between items-center p-4 mt-auto">
          <div>
            <Skeleton count={1} width="150px"></Skeleton>
            <div className="flex items-center gap-x-3">
              <Skeleton count={1} width="50px"></Skeleton>
              <Skeleton count={1} width="50px"></Skeleton>
            </div>
            <Skeleton count={1} width="100px"></Skeleton>
          </div>
          <div>
            <div className=" ">
              <Skeleton
                count={1}
                circle={true}
                width="30px"
                height="30px"
              ></Skeleton>
            </div>
          </div>
        </div>

        <ProSale discount={60}></ProSale>
      </div>
    </Fragment>
  );
};

export default ProductLoading;
