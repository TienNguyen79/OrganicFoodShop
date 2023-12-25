import React, { Fragment } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const LoadingQuickViewTablet = () => {
  return (
    <Fragment>
      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <div className="flex flex-col items-center gap-x-3">
            <div>
              <Skeleton count={1} width="400px" height="410px"></Skeleton>
            </div>
            <div className="flex  gap-x-3 mt-2">
              <Skeleton count={1} width="70px" height="70px"></Skeleton>
              <Skeleton count={1} width="70px" height="70px"></Skeleton>
              <Skeleton count={1} width="70px" height="70px"></Skeleton>
              <Skeleton count={1} width="70px" height="70px"></Skeleton>
              <Skeleton count={1} width="70px" height="70px"></Skeleton>
            </div>
          </div>
        </div>
        <div className="col-span-1 ml-10">
          <div className="flex flex-col gap-y-3">
            <Skeleton count={1} width="300px" height="30px"></Skeleton>
            <Skeleton count={1} width="110px"></Skeleton>
            <Skeleton count={1} width="180px" height="20px"></Skeleton>
            <Skeleton count={1} width="100%" height="2px"></Skeleton>
            <Skeleton count={1} width="250px" height="20px"></Skeleton>
            <Skeleton count={1} width="100%" height="2px"></Skeleton>
            <div className="flex items-center justify-around">
              <Skeleton count={1} width="100px" height="50px"></Skeleton>
              <Skeleton count={1} width="100px" height="50px"></Skeleton>
              <Skeleton count={1} width="100px" height="50px"></Skeleton>
            </div>
            <Skeleton count={1} width="100%" height="2px"></Skeleton>
            <Skeleton count={1} width="150px"></Skeleton>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LoadingQuickViewTablet;
