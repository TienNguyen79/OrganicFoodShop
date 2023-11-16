import React from "react";
import { Link } from "react-router-dom";
import { defaultImage } from "../../constants/global";
import { useDispatch, useSelector } from "react-redux";
import { authLogOut } from "../../store/auth/auth-slice";
import { getToken } from "../../utils/auth";

const PopupMe = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  //   console.log("🚀 ~ file: PopupMe.js:10 ~ PopupMe ~ user:", user);
  return (
    <div className="absolute top-full mt-2 right-0 w-[250px] bg-white pt-[18px] px-6 pb-[8px] shadow-2xl rounded-[10px] flex flex-col z-50  ">
      <div className="flex items-center border-b-[1px] py-[10px] mb-2">
        <div className="w-[40px] h-[40px]  rounded-md  overflow-hidden">
          <img
            src={user?.avata}
            className="w-full h-full  object-cover"
            alt=""
          />
        </div>
        <div className="w-full ml-[10px]">
          <h2 className="font-semibold  text-gray8 whitespace-nowrap overflow-hidden overflow-ellipsis max-w-[170px]">
            {user?.name}
          </h2>
          <span className="text-[#666] text-sm block whitespace-nowrap overflow-hidden overflow-ellipsis max-w-[170px]">
            {user?.email}
          </span>
        </div>
      </div>

      <div className="border-b-[1px] ">
        <Link
          to="/user_dashboard"
          className="text-[#666] cursor-pointer text-sm py-[10px] block hover:text-primary"
        >
          DashBoard
        </Link>
      </div>

      <div className="border-b-[1px] ">
        <span className="text-[#666] cursor-pointer text-sm py-[10px] block hover:text-primary">
          Viết Blog
        </span>
        <span className="text-[#666] cursor-pointer text-sm pt-1 pb-[10px] block hover:text-primary">
          Bài Viết Của Tôi
        </span>
      </div>

      <div className="border-b-[1px] ">
        <span className="text-[#666] cursor-pointer text-sm py-[10px] block hover:text-primary">
          Bài Viết Đã Lưu
        </span>
      </div>

      <div className=" ">
        <span className="text-[#666] cursor-pointer text-sm py-[10px] block hover:text-primary">
          Cài Đặt
        </span>
        <span
          className="text-[#666] cursor-pointer text-sm pt-1 pb-[10px] block hover:text-primary"
          onClick={() => dispatch(authLogOut(getToken()))}
        >
          Đăng Xuất
        </span>
      </div>
    </div>
  );
};

export default PopupMe;
