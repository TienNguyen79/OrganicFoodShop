import React from "react";
import ProFeauture from "./ProFeauture";

const ProDescMore = ({
  children,
  descquality = "100 g of fresh leaves provides.",
  isHidden,
  data,
}) => {
  return (
    <div className={`${isHidden} grid grid-cols-3 gap-x-[80px]`}>
      <div className="col-span-2">
        <div className="entry-content">{children}</div>
        {/* <div>
          <div className="mt-5 flex items-center gap-x-2 relative">
            <span className="block p-[2px] rounded-full bg-primary mt-[4px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={17}
                viewBox="0 0 16 17"
                fill="none"
              >
                <path
                  d="M13.3337 4.5L6.00033 11.8333L2.66699 8.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="block text-gray5 text-sm font-normal absolute left-7 top-[6px]">
              {descquality}
            </span>
          </div>
          <div className="mt-5 flex items-center gap-x-2 relative">
            <span className="block p-[2px] rounded-full bg-primary mt-[4px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={17}
                viewBox="0 0 16 17"
                fill="none"
              >
                <path
                  d="M13.3337 4.5L6.00033 11.8333L2.66699 8.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="block text-gray5 text-sm font-normal absolute left-7 top-[6px]">
              type here your detail one by one li more add
            </span>
          </div>
          <div className="mt-5 flex items-center gap-x-2 relative">
            <span className="block p-[2px] rounded-full bg-primary mt-[4px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={17}
                viewBox="0 0 16 17"
                fill="none"
              >
                <path
                  d="M13.3337 4.5L6.00033 11.8333L2.66699 8.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="block text-gray5 text-sm font-normal absolute left-7 top-[6px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </span>
          </div>
          <div className="mt-5 flex items-center gap-x-2 relative">
            <span className="block p-[2px] rounded-full bg-primary mt-[4px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={17}
                viewBox="0 0 16 17"
                fill="none"
              >
                <path
                  d="M13.3337 4.5L6.00033 11.8333L2.66699 8.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="block text-gray5 text-sm font-normal absolute left-7 top-[6px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </span>
          </div>
        </div> */}
      </div>
      <div className="col-span-1">
        <ProFeauture
          urlImage={data?.imageUrl}
          percentDiscount={data?.average_rating}
          nameCate={data?.category?.name}
        ></ProFeauture>
      </div>
    </div>
  );
};

export default ProDescMore;
