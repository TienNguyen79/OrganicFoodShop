import React, { Fragment, useState } from "react";
import ProImage from "./parts/ProImage";
import ProTitle from "./parts/ProTitle";
import ProPrice from "./parts/ProPrice";
import IconStarYellow from "../../components/Icons/IconStarYellow";
import IconStarGray from "../../components/Icons/IconStarGray";
import IconBagPro from "../../components/Icons/IconBagPro";
import ProSale from "./parts/ProSale";
import IconHeart from "../../components/Icons/IconHeart";
import IconEyeOpen from "../../components/Icons/IconEyeOpen";
import { defaultImage2, defaultImage3 } from "../../constants/global";
import ProQuickView from "./ProQuickView";
import { useDispatch, useSelector } from "react-redux";
import { proGetQuickview } from "../../store/product/pro-slice";
import { Link, useNavigate } from "react-router-dom";
import IconClose from "../../components/Icons/IconClose";
import IconClose2 from "../../components/Icons/IconClose2";
import {
  cartAddNew,
  wishListAddNew,
  wishListDelete,
  wishListGetAll,
} from "../../store/cart/cart-slice";
import { useEffect } from "react";
import IconRedHeart from "../../components/Icons/IconRedHeart";
import { getToken } from "../../utils/auth";

const ProductItem = ({ data, openModal }) => {
  const navigate = useNavigate();
  //Cách 2 render star
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
    openModal();
    dispatch(proGetQuickview(id));
  };
  useEffect(() => {
    dispatch(wishListGetAll());
  }, []);

  const { dataWishListAll, loadingWishList, loadingCart } = useSelector(
    (state) => state.cart
  );

  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    var arr = [];
    dataWishListAll.map((item) => arr.push(item.pivot.product_id));
    setWishList(arr);
  }, [dataWishListAll]);
  return (
    <Fragment>
      <div
        className="border  border-gray-200 bg-white rounded-lg h-[300px] md:h-[407px] lg:h-[407px] cursor-pointer flex flex-col relative group transition-all hover:border hover:border-primary hover:shadow-xl hover:scale-105  shadowgreen"
        //phục vụ mỗi việc đổi màu icon Bag :<ProImage
        onMouseEnter={() => setIsGroupHovered(true)}
        onMouseLeave={() => setIsGroupHovered(false)}
      >
        <ProImage
          href={`/productDetails/${data?.id}`}
          linkUrl={data?.imageUrl || defaultImage3}
        ></ProImage>
        <div className="flex justify-between items-center p-4 mt-auto">
          <Link to={`/productDetails/${data?.id}`}>
            <ProTitle title={data?.name}></ProTitle>
            <ProPrice
              priceOld={data?.price}
              currentPrice={(
                data?.price *
                (parseFloat(100 - data?.discount) / 100)
              ).toFixed(2)}
            ></ProPrice>
            <div className="flex items-center gap-x-[2px] mt-[6px]">
              {stars.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </div>
          </Link>
          <div>
            <div
              className="bg-gray-100 p-2 rounded-full group-hover:bg-primary hover:scale-110 shadowgreen transition-all "
              onClick={() =>
                dispatch(
                  cartAddNew({
                    product_id: data?.id,
                    quantity: 1,
                    token: getToken(),
                  })
                )
              }
            >
              <IconBagPro
                color={`${isGroupHovered ? "#FFF" : "#1A1A1A"}`}
              ></IconBagPro>
            </div>
          </div>
        </div>
        {data?.discount && data?.discount !== 0 && (
          <ProSale discount={data?.discount}></ProSale>
        )}
        <div className="flex flex-col gap-y-[6px] absolute top-[15px] right-[15px] scale-0 group-hover:scale-100 transition-all duration-300 invisible group-hover:visible ">
          <div className=" rounded-full border border-[#F2F2F2] p-[10px] bg-white cursor-pointer hover:scale-110 shadowgreen transition-all  ">
            {loadingWishList ? (
              <img
                src="/Spin-1s-200px.svg"
                className="w-[20px] h-[20px]"
                alt=""
              ></img>
            ) : (
              <span className="flex justify-center items-center ">
                {wishList.includes(data?.id) ? (
                  <div
                    onClick={() => {
                      dispatch(wishListDelete(data?.id));
                    }}
                  >
                    <IconRedHeart></IconRedHeart>
                  </div>
                ) : (
                  <div
                    onClick={() => {
                      dispatch(wishListAddNew({ product_id: data?.id }));
                    }}
                  >
                    <IconHeart></IconHeart>
                  </div>
                )}
              </span>
            )}
          </div>
          <div
            className=" rounded-full border border-[#F2F2F2] p-[10px] bg-white cursor-pointer z-50  hover:scale-110 shadowgreen transition-all  "
            onClick={() => handleOpenModal(data.id)}
          >
            <span className=" flex justify-center items-center">
              <IconEyeOpen></IconEyeOpen>
            </span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductItem;
