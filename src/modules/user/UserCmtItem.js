import React from "react";
import UserAvatar from "./parts/UserAvatar";
import UserName from "./parts/UserName";
import BlogDate2 from "../blog/parts/BlogDate2";
import BlogDesc from "../blog/parts/BlogDesc";
import useClickOutSide from "../../hooks/useClickOutSide";
import BoxOption from "../blog/parts/BoxOption";
import { useSelector } from "react-redux";

const UserCmtItem = ({ data }) => {
  const dateTimeString = data?.created_at;
  const date = new Date(dateTimeString);
  // Định dạng ngày và tháng
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  const { show, setShow, nodeRef } = useClickOutSide();

  const { user, accessToken } = useSelector((state) => state.auth);
  console.log("🚀 ~ file: UserCmtItem.js:20 ~ UserCmtItem ~ user:", user);
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-2 py-6 border-b-[1px] flex-1">
        <UserAvatar linkUrl={data?.avata}></UserAvatar>
        <div className="flex-1">
          <div className="flex items-center gap-x-2">
            <UserName name={data?.name}></UserName>{" "}
            <div className="w-[2px] h-[2px] p-[2px] bg-gray9 rounded-full font-semibold "></div>{" "}
            <BlogDate2 date={formattedDate}></BlogDate2>
          </div>
          <p className="text-gray6 text-sm font-normal">
            {data?.pivot?.content}
          </p>
        </div>
      </div>
      <div className="relative">
        <span
          className="cursor-pointer"
          onClick={(e) => {
            e.stopPropagation(); //ngăn chặn lan truyền lên các pt cha
            setShow(!show);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </span>

        {show &&
          (user?.id === parseInt(data?.pivot?.user_id) ? (
            <div ref={nodeRef}>
              <BoxOption className="w-[200px] cursor-pointer bottom-4 right-6  ">
                <div className="hover:bg-slate-100 transition-all w-full">
                  <span
                    className="block py-2 px-3  w-full border-b-[1px]"
                    onClick={() => console.log(data?.pivot?.id)}
                  >
                    Delete Comment
                  </span>
                </div>
                <div className="hover:bg-slate-100 transition-all">
                  <span className="block py-2 px-3  w-full ">Edit Comment</span>
                </div>
              </BoxOption>
            </div>
          ) : (
            <div ref={nodeRef}>
              <BoxOption className="w-[200px] cursor-pointer bottom-4 right-6  ">
                <div className="hover:bg-slate-100 transition-all w-full">
                  <span
                    className="block py-2 px-3  w-full border-b-[1px]"
                    // onClick={() => console.log(data?.pivot?.id)}
                  >
                    Report Comment
                  </span>
                </div>
              </BoxOption>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserCmtItem;
