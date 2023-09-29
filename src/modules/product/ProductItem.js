import React from "react";
import ProImage from "./parts/ProImage";
import ProTitle from "./parts/ProTitle";
import ProPrice from "./parts/ProPrice";
import IconStarYellow from "../../components/Icons/IconStarYellow";
import IconStarGray from "../../components/Icons/IconStarGray";
import IconBagPro from "../../components/Icons/IconBagPro";
import ProSale from "./parts/ProSale";

const ProductItem = ({ data = "1" }) => {
  //   let temp = [];
  //   switch (data) {
  //     case "1":
  //       temp = [
  //         <IconStarYellow></IconStarYellow>,
  //         <IconStarGray></IconStarGray>,
  //         <IconStarGray></IconStarGray>,
  //         <IconStarGray></IconStarGray>,
  //         <IconStarGray></IconStarGray>,
  //       ];
  //       break;
  //     case "2":
  //       temp = [
  //         <IconStarYellow></IconStarYellow>,
  //         <IconStarYellow></IconStarYellow>,
  //         <IconStarGray></IconStarGray>,
  //         <IconStarGray></IconStarGray>,
  //         <IconStarGray></IconStarGray>,
  //       ];

  //       break;
  //     case "3":
  //       temp = [
  //         <IconStarYellow></IconStarYellow>,
  //         <IconStarYellow></IconStarYellow>,
  //         <IconStarYellow></IconStarYellow>,
  //         <IconStarGray></IconStarGray>,
  //         <IconStarGray></IconStarGray>,
  //       ];

  //       break;
  //     case "4":
  //       temp = [
  //         <IconStarYellow></IconStarYellow>,
  //         <IconStarYellow></IconStarYellow>,
  //         <IconStarYellow></IconStarYellow>,
  //         <IconStarYellow></IconStarYellow>,
  //         <IconStarGray></IconStarGray>,
  //       ];

  //       break;
  //     case "5":
  //       temp = [
  //         <IconStarYellow></IconStarYellow>,
  //         <IconStarYellow></IconStarYellow>,
  //         <IconStarYellow></IconStarYellow>,
  //         <IconStarYellow></IconStarYellow>,
  //         <IconStarYellow></IconStarYellow>,
  //       ];

  //       break;

  //     default:
  //       break;
  //   }

  //Cách 2 render star
  //   const starCount = parseInt(data); // Chuyển data thành số nguyên
  //   const maxStars = 5; // Số sao tối đa
  //   // Tạo mảng chứa số lượng sao tương ứng
  //   const stars = Array.from({ length: maxStars }, (_, index) => (
  //     <IconStarYellow key={index}></IconStarYellow>
  //   ));
  //   // Đánh dấu các sao sau starCount bằng màu xám
  //   stars.fill(<IconStarGray></IconStarGray>, starCount); //thay thế từ vị trí start đến hết thành stargray

  return (
    <div className="shadow-lg bg-white rounded-lg h-[360px] relative">
      <ProImage></ProImage>
      <div className="flex justify-between items-center p-4">
        <div>
          <ProTitle></ProTitle>
          <ProPrice></ProPrice>
          <div className="flex items-center gap-x-[2px] mt-[6px]">
            <IconStarYellow></IconStarYellow>
            <IconStarYellow></IconStarYellow>
            <IconStarYellow></IconStarYellow>
            <IconStarYellow></IconStarYellow>
            <IconStarGray></IconStarGray>

            {/* {temp.map((item, index) => (
              <div key={index}>{item}</div>
            ))} */}
          </div>
        </div>
        <div>
          <div className="bg-gray-100 p-2 rounded-full">
            <IconBagPro></IconBagPro>
          </div>
        </div>
      </div>
      <ProSale></ProSale>
    </div>
  );
};

export default ProductItem;
