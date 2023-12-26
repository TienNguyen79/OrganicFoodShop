import React, { useEffect } from "react";
import UserAvatar from "./parts/UserAvatar";
import UserName from "./parts/UserName";
import BlogDate2 from "../blog/parts/BlogDate2";
import BlogDesc from "../blog/parts/BlogDesc";
import useClickOutSide from "../../hooks/useClickOutSide";
import BoxOption from "../blog/parts/BoxOption";
import { useDispatch, useSelector } from "react-redux";
import { blogDeleteCmt, blogUpdateCmt } from "../../store/blog/blog-slice";
import Input from "../../components/input/Input";
import { useForm } from "react-hook-form";
import Button from "../../components/button/Button";
import { useState } from "react";
import TextArea from "../../components/input/TextArea";
import { convertDate } from "../../constants/global";

const UserCmtItem = ({ data, limit, loading }) => {
  // console.log("🚀 ~ file: UserCmtItem.js:17 ~ UserCmtItem ~ loading:", loading);
  // console.log("🚀 ~ file: UserCmtItem.js:17 ~ UserCmtItem ~ page:", page);
  const { control, setValue, handleSubmit, watch } = useForm();
  // console.log("🚀 ~ file: UserCmtItem.js:12 ~ UserCmtItem ~ data:", data);

  const { show, setShow, nodeRef } = useClickOutSide();
  const [showEditCmt, setShowEditCmt] = useState(false);

  const { user, accessToken } = useSelector((state) => state.auth);

  //khi bật edit cmt lên cmt trc đó hiện lên input
  const dispatch = useDispatch();
  useEffect(() => {
    setValue("cmt", data?.content);
  }, [data?.content, setValue]);

  const handleUpdateCmt = async (values) => {
    console.log(
      "🚀 ~ file: UserCmtItem.js:35 ~ handleUpdateCmt ~ values:",
      values
    );

    dispatch(
      blogUpdateCmt({
        blog_id: data?.pivot?.blog_id,
        idCmt: data?.comment_id,
        content: values.cmt,
        limit: limit,
      })
    );

    setShowEditCmt(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between group">
        <div className="flex items-start md:items-start lg:items-center gap-x-2 py-6 border-b-[1px] flex-1 ">
          <UserAvatar linkUrl={data?.avata}></UserAvatar>
          <div className="flex-1 bg-[#F2F3F5] md:bg-[#F2F3F5] lg:bg-white p-3 md:p-4 lg:p-4  rounded-md w-[200px]">
            <div className="flex items-center gap-x-2">
              <UserName name={data?.name}></UserName>{" "}
              <div className="w-[2px] h-[2px] p-[2px] bg-gray9 rounded-full font-semibold hidden md:block lg:block"></div>{" "}
              <div className="hidden md:block lg:block">
                <BlogDate2 date={convertDate(data?.created_at)}></BlogDate2>
              </div>
            </div>
            <p className="text-gray6 text-[16px] lg:text-sm font-normal py-2 text-left w-full">
              {data?.content}
            </p>
          </div>
        </div>
        <div className="relative">
          <span
            className={`cursor-pointer lg:hidden transition-all  group-hover:block 
            }`}
            onClick={(e) => {
              e.stopPropagation(); //ngăn chặn lan truyền lên các pt cha
              setShow(!show);
              console.log(data?.comment_id);
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
                      className="block py-2 px-3  w-full border-b-[1px] text-sm text-gray-500 font-medium"
                      onClick={() => {
                        // setDataCmt([]);
                        dispatch(
                          blogDeleteCmt({
                            blog_id: data?.pivot?.blog_id,
                            idCmt: data?.comment_id,
                            limit: limit,
                          })
                        );
                        setShow(false);
                      }}
                    >
                      Delete Comment
                    </span>
                  </div>
                  <div className="hover:bg-slate-100 transition-all text-sm text-gray-500 font-medium">
                    <span
                      className="block py-2 px-3  w-full "
                      onClick={() => setShowEditCmt(true)}
                    >
                      Edit Comment
                    </span>
                  </div>
                </BoxOption>
              </div>
            ) : (
              <div ref={nodeRef}>
                <BoxOption className="w-[200px] cursor-pointer bottom-4 right-6  ">
                  <div className="hover:bg-slate-100 transition-all w-full">
                    <span
                      className="block py-2 px-3  w-full border-b-[1px] text-sm text-gray-500 font-medium"
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

      {showEditCmt && (
        <form action="" onSubmit={handleSubmit(handleUpdateCmt)}>
          <div className="flex flex-col ">
            <TextArea control={control} name="cmt"></TextArea>
            <div className="flex items-center justify-end gap-x-3 p-3">
              <Button
                kind="disable"
                className="!bg-white"
                onClick={() => {
                  setShowEditCmt(false);
                  setValue("cmt", data?.content);
                }}
              >
                Cancel
              </Button>
              <Button kind="primary" type="submit">
                Update
              </Button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default UserCmtItem;
