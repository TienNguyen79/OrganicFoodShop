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

const ProLoadingMobile = () => {
  return (
    <Fragment>
      <div className="border  border-gray-200 bg-white rounded-lg w-[158px]  h-[300px] full cursor-pointer flex flex-col relative  transition-all  shadowgreen">
        <Skeleton count={1} width="100%" height="200px"></Skeleton>
        <div className="flex j items-center p-2 mt-auto  ">
          <div>
            <Skeleton count={1} width="120px"></Skeleton>
            <div className="flex items-center gap-x-3">
              <Skeleton count={1} width="50px"></Skeleton>
              <Skeleton count={1} width="50px"></Skeleton>
            </div>
            <Skeleton count={1} width="100px"></Skeleton>
          </div>
          <div className=" ">
            <Skeleton
              count={1}
              circle={true}
              width="30px"
              height="30px"
            ></Skeleton>
          </div>
        </div>

        <ProSale discount={60}></ProSale>
      </div>
    </Fragment>
  );
};

export default ProLoadingMobile;
