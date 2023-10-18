import React from "react";
import ProThumb from "./partsDetail/ProThumb";
import ProBigImage from "./partsDetail/ProBigImage";
import ProTitle from "./partsDetail/ProTitle";
import ProLabel from "./partsDetail/ProLabel";
import IconStarYellow from "../../components/Icons/IconStarYellow";
import IconStarGray from "../../components/Icons/IconStarGray";
import ProStart from "./parts/ProStart";
import ProReview from "./partsDetail/ProReview";
import ProPrice from "./partsDetail/ProPrice";
import ProSale from "./partsDetail/ProSale";
import ProDesc from "./partsDetail/ProDesc";
import ProHandleQuantity from "./partsDetail/ProHandleQuantity";
import Button from "../../components/button/Button";
import IconBagProDetail from "../../components/Icons/IconBagProDetail";
import IconTym from "../../components/Icons/IconTym";
import Icontym2 from "../../components/Icons/Icontym2";
import IconBagPro from "../../components/Icons/IconBagPro";
import IconArrowRight from "../../components/Icons/IconArrowRight";
import IconAR2 from "../../components/Icons/IconAR2";

const ProDetailItem = ({ data }) => {
  //Cách 2 render star
  const starCount = parseInt(3); // Chuyển data thành số nguyên
  const maxStars = 5; // Số sao tối đa
  // Tạo mảng chứa số lượng sao tương ứng
  const stars = Array.from({ length: maxStars }, (_, index) => (
    <IconStarYellow key={index}></IconStarYellow>
  ));
  // Đánh dấu các sao sau starCount bằng màu xám
  stars.fill(<IconStarGray></IconStarGray>, starCount); //thay thế từ vị trí start đến hết thành stargray

  return (
    <div className="grid grid-cols-2 gap-x-6">
      <div className="grid grid-cols-5">
        <div className="col-span-1 flex flex-col gap-y-4 py-10">
          <ProThumb></ProThumb>
          <ProThumb></ProThumb>
          <ProThumb></ProThumb>
          <ProThumb></ProThumb>
        </div>
        <div className="col-span-4">
          <ProBigImage></ProBigImage>
        </div>
      </div>

      <div>
        <div className="border-b-2">
          <div className="flex items-center gap-x-2">
            <ProTitle title="Chinese Cabbage"></ProTitle>
            <ProLabel kind="Instock" label="InStock"></ProLabel>
          </div>
          <div className="flex gap-x-1">
            <ProStart>
              <IconStarYellow></IconStarYellow>
              <IconStarYellow></IconStarYellow>
              <IconStarYellow></IconStarYellow>
              <IconStarYellow></IconStarYellow>
              <IconStarYellow></IconStarYellow>
            </ProStart>

            <ProReview number={5}></ProReview>
          </div>
          <div className="flex items-baseline gap-x-2 pb-5">
            <ProPrice></ProPrice>
            <ProSale></ProSale>
          </div>
        </div>

        <div className="py-6 border-b-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <span className="block text-gray9 text-sm font-normal">
                Payment:{" "}
              </span>
              <div className="flex gap-x-2 items-center">
                <img src="/ApplePay.png" alt="" />
                <img src="/Visa.png" alt="" />
                <img src="/Discover.png" alt="" />
                <img src="/Mastercard.png" alt="" />
              </div>
            </div>

            <span className="block bg-[#E9F8E9] p-2 rounded-full cursor-pointer transition-all hover:scale-125">
              <Icontym2></Icontym2>
            </span>
          </div>
          <ProDesc></ProDesc>
        </div>

        <div className="py-[18px] border-b-2 flex items-center gap-x-3">
          <ProHandleQuantity></ProHandleQuantity>
          <Button kind="primary">
            <div className="flex items-center gap-x-2">
              <span>Add to Cart </span>
              <IconBagProDetail></IconBagProDetail>
            </div>
          </Button>
          <Button kind="secondary">
            <div className="flex items-center gap-x-2">
              <span>Buy it Now </span>
              <IconAR2></IconAR2>
            </div>
          </Button>
        </div>

        <div className="py-6">
          <div className="flex items-center gap-x-2">
            <span className="block text-gray9 text-sm font-medium">
              Category:
            </span>
            <span className="block text-gray5 text-sm font-normal">
              Vegetables
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProDetailItem;
