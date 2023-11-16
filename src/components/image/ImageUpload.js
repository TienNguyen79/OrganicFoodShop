import React, { Fragment, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { imgbbAPI } from "../../config/config";

const ImageUpload = ({ onChange = () => {}, name = "", setValue1 }) => {
  const [showImage, setShowImage] = useState("");
  const handleUploadImage = async (e) => {
    const file = e.target.files;
    console.log(file[0]);
    if (!file) return;
    const bodyFormData = new FormData();
    bodyFormData.append("image", file[0]);
    const response = await axios({
      method: "post",
      url: `${imgbbAPI}`,
      data: bodyFormData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(
      "🚀 ~ file: ImageUpload.js:21 ~ handleUploadImage ~ response:",
      response
    );
    const imageData = response.data.data;

    if (!imageData) {
      toast.error("Can not upload image to imgbbAPI");
      return;
    }
    // const timestamp = new Date().getTime();
    const imageObj = {
      medium: imageData?.medium?.url,
      thumb: imageData?.thumb?.url,
      url: imageData?.url,
    };
    onChange(name, imageObj);

    setShowImage(imageObj.url);

    // console.log(imageObj.url);

    // console.log(e.target.files[0]);
    // Lưu deleteHash của hình ảnh để sử dụng khi xoá
  };

  const handleDeleteImage = async () => {
    setShowImage("");
    setValue1("avata", "");
  };
  return (
    <div className="flex">
      <label className=" w-[200px]  border border-gray-200 border-dashed overflow-hidden rounded-full h-[200px]  group cursor-pointer flex items-center justify-center ">
        <input type="file" onChange={handleUploadImage} className="hidden" />
        {/* {!showImage && (
          <Fragment>
            <img
              src="/Spin-1s-200px.svg"
              className="w-20 h-20 absolute flex justify-center items-center"
              alt=""
            ></img>
          </Fragment>
        )} */}
        {!showImage && (
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
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
            />
          </svg>
        )}
        {showImage && (
          <img
            src={showImage}
            className="w-full h-full object-cover  "
            alt=""
          />
        )}
      </label>
      {showImage && (
        <div>
          <button
            type="button"
            className="w-14 h-14 flex justify-center items-center bg-white rounded-full text-red-500  "
            onClick={handleDeleteImage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
