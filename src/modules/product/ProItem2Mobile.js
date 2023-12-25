import React from "react";
import ProImage from "./partsCartAndTym/ProImage";
import ProName from "./partsCartAndTym/ProName";
import ProPrice from "./parts/ProPrice";
import IconStarYellow from "../../components/Icons/IconStarYellow";
import IconStarGray from "../../components/Icons/IconStarGray";
import ProStart from "./parts/ProStart";
import { useForm } from "react-hook-form";
import ProHandleQuantity from "./partsDetail/ProHandleQuantity";
import IconClose2 from "../../components/Icons/IconClose2";
import { cartDelete } from "../../store/cart/cart-slice";
import { useDispatch } from "react-redux";

const ProItem2Mobile = ({ item }) => {
  const { control } = useForm();
  const dispatch = useDispatch();
  //Cách 2 render star
  const starCount = parseInt(item.average_rating); // Chuyển data thành số nguyên
  const maxStars = 5; // Số sao tối đa
  // Tạo mảng chứa số lượng sao tương ứng
  const stars = Array.from({ length: maxStars }, (_, index) => (
    <IconStarYellow key={index}></IconStarYellow>
  ));
  // Đánh dấu các sao sau starCount bằng màu xám
  stars.fill(<IconStarGray></IconStarGray>, starCount); //thay thế từ vị trí start đến hết thành stargray
  return (
    <div className="border-b-2 py-3">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-x-2 ">
          <ProImage
            className="h-[130px] w-[110px]"
            linkUrl={item.imageUrl}
          ></ProImage>
          <div className="flex flex-col gap-y-2 ">
            <ProName maxW="max-w-[200px]" name={item.name}></ProName>
            <ProPrice
              priceOld={item.price}
              currentPrice={item.current_price.toFixed(2)}
            ></ProPrice>
            <div className="flex items-center">
              <span className="text-black font-semibold">Type: </span>{" "}
              <h1 className="ml-1"> {item.type}</h1>
            </div>
            <ProStart>
              {stars.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </ProStart>
          </div>
        </div>
        <IconClose2
          onClick={() => {
            dispatch(cartDelete(item?.id));
          }}
        ></IconClose2>
      </div>
      <div className=" my-1">
        <ProHandleQuantity
          control={control}
          name={`quantity_${item?.id}`} // Sử dụng name có sự khác biệt cho mỗi sản phẩm
          quantity={item?.pivot?.quantity}
          id={item?.id}
          allow={true}
        ></ProHandleQuantity>
      </div>
    </div>
  );
};

export default ProItem2Mobile;
