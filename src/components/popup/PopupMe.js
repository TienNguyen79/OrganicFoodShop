import React from "react";
import { Link } from "react-router-dom";
import { defaultImage } from "../../constants/global";
import { useDispatch, useSelector } from "react-redux";
import { authLogOut } from "../../store/auth/auth-slice";

const PopupMe = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  //   console.log("🚀 ~ file: PopupMe.js:10 ~ PopupMe ~ user:", user);
  return (
    <div className="absolute top-full mt-2 right-0 w-[250px] bg-white pt-[18px] px-6 pb-[8px] shadow-2xl rounded-[10px] flex flex-col z-50  ">
      <div className="flex items-center border-b-[1px] py-[10px] mb-2">
        <img
          src={defaultImage}
          className="w-full h-full max-w-[40px] max-h-[40px] rounded-full object-cover"
          alt=""
        />
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
        <span className="text-[#666] cursor-pointer text-sm py-[10px] block hover:text-primary">
          Trang Cá Nhân
        </span>
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
          onClick={() => dispatch(authLogOut())}
        >
          Đăng Xuất
        </span>
      </div>
    </div>
  );
};

export default PopupMe;
