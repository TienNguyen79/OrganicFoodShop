import React, { useState } from "react";
import ProImage from "./parts/ProImage";
import ProTitle from "./parts/ProTitle";
import ProPrice from "./parts/ProPrice";
import IconStarYellow from "../../components/Icons/IconStarYellow";
import IconStarGray from "../../components/Icons/IconStarGray";
import ProStart from "./parts/ProStart";
import IconBagPro from "../../components/Icons/IconBagPro";
import IconHeart from "../../components/Icons/IconHeart";
import IconEyeOpen from "../../components/Icons/IconEyeOpen";
import { defaultImage3 } from "../../constants/global";
import { useDispatch } from "react-redux";
import { proGetQuickview } from "../../store/product/pro-slice";
import { Link } from "react-router-dom";

const TopProductItem = ({ data, openModal }) => {
  // Cách 2 render star
  const starCount = parseInt(data?.average_rating); // Chuyển data thành số nguyên
  const maxStars = 5; // Số sao tối đa
  // Tạo mảng chứa số lượng sao tương ứng
  const stars = Array.from({ length: maxStars }, (_, index) => (
    <IconStarYellow key={index}></IconStarYellow>
  ));
  // Đánh dấu các sao sau starCount bằng màu xám
  stars.fill(<IconStarGray></IconStarGray>, starCount); //thay thế từ vị trí start đến hết thành stargray
  const [isGroupHovered, setIsGroupHovered] = useState(false);
  const dispatch = useDispatch();
  const handleOpenModal = (id) => {
    console.log("🚀 ~ file: ProductItem.js:83 ~ handleOpenModal ~ id:", id);
    openModal();
    //dispatch
    dispatch(proGetQuickview(id));
  };

  return (
    <div>
      <div
        className="flex items-center gap-x-6 border  border-gray-200 bg-white rounded-lg cursor-pointer relative group transition-all hover:border hover:border-primary hover:shadow-xl hover:scale-105  shadowgreen"
        onMouseEnter={() => setIsGroupHovered(true)}
        onMouseLeave={() => setIsGroupHovered(false)}
      >
        <ProImage
          className="h-[102px] w-[102px]"
          linkUrl={data?.imageUrl || defaultImage3}
          href={`/productDetails/${data?.id}`}
        ></ProImage>
        <div className="flex flex-col pr-3 flex-1">
          <Link to={`/productDetails/${data?.id}`}>
            <ProTitle
              title={data?.name}
              className="group-hover:text-primary"
            ></ProTitle>
          </Link>
          <ProPrice
            hover="group-hover:invisible "
            priceOld={data?.price}
            currentPrice={(
              data?.price *
              (parseFloat(100 - data?.discount) / 100)
            ).toFixed(2)}
          ></ProPrice>

          <ProStart className="group-hover:invisible ">
            {stars.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </ProStart>
        </div>

        <div className="absolute top-[45px] left-[125px] scale-0 group-hover:scale-100 transition-all duration-300 invisible group-hover:visible">
          <div className="flex items-center gap-x-3">
            <div className="bg-gray-100 p-2 rounded-full group-hover:bg-primary hover:scale-110 shadowgreen transition-all ">
              <IconBagPro
                color={`${isGroupHovered ? "#FFF" : "#1A1A1A"}`}
              ></IconBagPro>
            </div>
            <div className=" rounded-full border border-[#F2F2F2] p-[10px] bg-white cursor-pointer hover:scale-110 shadowgreen transition-all ">
              <span className="flex justify-center items-center ">
                <IconHeart></IconHeart>
              </span>
            </div>
            <div
              className=" rounded-full border border-[#F2F2F2] p-[10px] bg-white cursor-pointer hover:scale-110 shadowgreen transition-all   "
              onClick={() => handleOpenModal(data.id)}
            >
              <span className="flex justify-center items-center">
                <IconEyeOpen></IconEyeOpen>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProductItem;
