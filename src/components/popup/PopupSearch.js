import React from "react";
import { Link } from "react-router-dom";

const PopupSearch = ({ data, loading, text }) => {
  return (
    <div className="absolute top-full left-0 z-50 bg-white shadow-lg w-full mt-2 rounded-md py-4 max-h-[319px] overflow-y-auto  ">
      <div>
        <div className="px-3 flex items-center text-[15px] font-normal text-gray5  ">
          {loading && (
            <img
              src="/loading2.svg"
              className="loadingsvg h-[30px]"
              alt="loading"
            />
          )}

          {data.length > 0 ? (
            <span>Result for : '{text}'</span>
          ) : (
            <span>Not Found : '{text}'</span>
          )}
        </div>
      </div>
      {!loading &&
        data?.length > 0 &&
        data.map((item) => (
          <Link
            key={item.id}
            className="flex items-center gap-x-3 py-2 px-3 cursor-pointer hover:bg-gray-100"
            to={`productDetails/${item?.id}`}
          >
            <img
              src={item?.imageUrl || null}
              className="w-[50px] h-[50px] rounded-full object-cover "
              alt=""
            />
            <span className="block text-gray8 font-normal text-[16px] whitespace-nowrap overflow-hidden overflow-ellipsis max-w-[300px] ">
              {item?.name}
            </span>
          </Link>
        ))}
    </div>
  );
};

export default PopupSearch;
