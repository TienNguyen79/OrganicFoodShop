import React, { Fragment, useState } from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingBlog = () => {
  return (
    <Fragment>
      <div className="border  border-gray-200 bg-white rounded-lg h-[407px] cursor-pointer flex flex-col relative  transition-all  shadow-md">
        <Skeleton count={1} width="100%" height="300px"></Skeleton>
        <div className="flex items-center gap-x-4 mt-2 px-2">
          <Skeleton count={1} width="110px"></Skeleton>
          <Skeleton count={1} width="110px"></Skeleton>
        </div>
        <div className=" p-1">
          <div>
            <Skeleton count={1} width="100%" height="30px"></Skeleton>
          </div>
          <div className="p-1">
            <Skeleton count={1} width="110px"></Skeleton>
          </div>
        </div>

        {/* <ProSale discount={60}></ProSale> */}
      </div>
    </Fragment>
  );
};

export default LoadingBlog;
