import React, { Fragment, useState } from "react";
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
import Icontym2 from "../../components/Icons/Icontym2";
import IconAR2 from "../../components/Icons/IconAR2";
import IconRedTym from "../../components/Icons/IconRedTym";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import {
  cartAddNew,
  wishListAddNew,
  wishListDelete,
  wishListGetAll,
} from "../../store/cart/cart-slice";
import { getToken } from "../../utils/auth";
import IconClose2 from "../../components/Icons/IconClose2";
import IconHeart from "../../components/Icons/IconHeart";
import IconRedHeart from "../../components/Icons/IconRedHeart";
import LoadingProQuickView from "../../components/loading/LoadingProQuickView";
const ProDetailItem = ({ data, isClickClose, onClose }) => {
  const { control, setValue, getValues, handleSubmit } = useForm({
    mode: "onChange",
    defaultValues: {},
  });

  //Cách 2 render star
  const starCount = parseInt(data?.average_rating); // Chuyển data thành số nguyên
  const maxStars = 5; // Số sao tối đa
  // Tạo mảng chứa số lượng sao tương ứng
  const stars = Array.from({ length: maxStars }, (_, index) => (
    <IconStarYellow key={index}></IconStarYellow>
  ));
  // Đánh dấu các sao sau starCount bằng màu xám
  stars.fill(<IconStarGray></IconStarGray>, starCount); //thay thế từ vị trí start đến hết thành stargray

  //xem có click tym hay không
  //
  const settings = {
    infinite: true, // Lặp vô tận
    speed: 500, // Tốc độ trượt
    slidesToShow: 4, // Hiển thị một slide cùng lúc
    slidesToScroll: 1, // Trượt một slide cùng lúc
    vertical: true, // Cho phép trượt chiều dọc
  };
  const settings2 = {
    className: "center",
    infinite: true,
    centerPadding: "40px",
    slidesToShow: 4,
    swipeToSlide: true,
  };

  useEffect(() => {
    //mới đầu vào cũng phải xét thế này tránh bug hover ảnh ở productdetails
    setLinkImage(data?.imageUrl);
  }, [data?.imageUrl]);

  const [isClickTym, setIsClickTym] = useState(false);
  const [linkImage, setLinkImage] = useState(data?.imageUrl);
  const [selectedThumb, setSelectedThumb] = useState(1);
  const { loading } = useSelector((state) => state.product);
  const { loadingCart } = useSelector((state) => state.cart);
  console.log(
    "🚀 ~ file: ProDetailItem.js:63 ~ ProDetailItem ~ loadingCart:",
    loadingCart
  );
  const dispatch = useDispatch();
  // const [formData, setFormData] = useState({
  //   product_id: 1,
  //   quantity: 1,
  //   // Thêm các trường nhập liệu khác ở đây
  // });
  // console.log(
  //   "🚀 ~ file: ProDetailItem.js:66 ~ ProDetailItem ~ formData:",
  //   formData
  // );

  const HandleProDetails = async (values) => {
    // setFormData({
    //   ...formData,
    //   product_id: data?.id,
    //   quantity: values.quantity,
    // });

    dispatch(
      cartAddNew({
        product_id: data?.id,
        quantity: values.quantity,
        token: getToken(),
      })
    );
    console.log({ product_id: data?.id, quantity: values.quantity });

    //khi submit xong set số lượng về 1
    setValue("quantity", 1);
  };

  useEffect(() => {
    //khi có click đóng phải set về hình ảnh chính vì nếu không làm thế khi hover vào thumb nó sẽ giữ linkImg của thumb lại,set số lượng về 1 luôn
    if (isClickClose) {
      setLinkImage(data?.imageUrl);
      setValue("quantity", 1);
      // setIsClickTym(false);//để tạm chưa hợp lý
    }
  }, [data?.imageUrl, isClickClose]);

  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    dispatch(wishListGetAll());
  }, []);

  const { dataWishListAll } = useSelector((state) => state.cart);

  useEffect(() => {
    var arr = [];
    dataWishListAll.map((item) => arr.push(item.pivot.product_id));
    setWishList(arr);
  }, [dataWishListAll]);

  return (
    <Fragment>
      {loading ? (
        <LoadingProQuickView></LoadingProQuickView>
      ) : (
        <form onSubmit={handleSubmit(HandleProDetails)}>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-x-6 ">
            <div className="grid md:col-span-1 md:grid-cols-5 lg:grid-cols-5">
              <div className=" md:hidden lg:flex thumbslider  lg:col-span-1 hidden flex-col  pt-[40px] ">
                {data?.thumbnails?.length >= 5 ? (
                  <Slider {...settings}>
                    {data?.thumbnails?.length > 0 &&
                      data?.thumbnails?.map((item) => (
                        <div key={item.id} className="py-1 block ">
                          <div
                            className="inline-block"
                            onMouseEnter={() => {
                              setLinkImage(item.imageUrl);
                            }}
                          >
                            <ProThumb
                              UrlThumb={item.imageUrl}
                              item={item}
                              selectedThumb={selectedThumb}
                              setSelectedThumb={setSelectedThumb}
                            ></ProThumb>
                          </div>
                        </div>
                      ))}
                  </Slider>
                ) : (
                  data?.thumbnails?.map((item) => (
                    <div
                      key={item.id}
                      className="py-1 hidden md:hidden lg:block"
                    >
                      <div
                        className="inline-block"
                        onMouseEnter={() => {
                          setLinkImage(item.imageUrl);
                        }}
                      >
                        <ProThumb
                          UrlThumb={item.imageUrl}
                          item={item}
                          selectedThumb={selectedThumb}
                          setSelectedThumb={setSelectedThumb}
                        ></ProThumb>
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div className="md:col-span-5 lg:col-span-4 ">
                <ProBigImage
                  className="w-[95%]  md:w-full lg:w-full h-[410px]"
                  imageUrl={linkImage ? linkImage : data?.imageUrl}
                ></ProBigImage>

                {/* Mobile */}
                <Fragment>
                  <div className=" md:block lg:hidden  md:col-span-1 lg:col-span-1   pt-[20px] w-screen md:w-[350px] overflow-x-auto ">
                    <div className="flex items-center  gap-x-[10px]  ">
                      {data?.thumbnails?.map((item) => (
                        <div
                          key={item.id}
                          className="py-1 block md:block lg:hidden"
                        >
                          <div
                            className="inline-block"
                            onMouseEnter={() => {
                              setLinkImage(item.imageUrl);
                            }}
                          >
                            <ProThumb
                              UrlThumb={item.imageUrl}
                              item={item}
                              selectedThumb={selectedThumb}
                              setSelectedThumb={setSelectedThumb}
                              className="w-[70px] h-[80px]"
                            ></ProThumb>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Fragment>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="border-b-2">
                <div className="flex items-center gap-x-2">
                  <ProTitle title={data?.name}></ProTitle>
                  <ProLabel kind="Instock" label="InStock"></ProLabel>
                </div>
                <div className="flex gap-x-1">
                  <ProStart>
                    {stars.map((item, index) => (
                      <div key={index}>{item}</div>
                    ))}
                  </ProStart>

                  <ProReview number={5}></ProReview>
                </div>
                <div className="flex items-baseline gap-x-2 pb-5">
                  <ProPrice
                    priceOld={data?.price}
                    currentPrice={(
                      ((100 - parseInt(data?.discount)) / 100) *
                      parseInt(data?.price)
                    ).toFixed(2)}
                  ></ProPrice>
                  <ProSale percent={data?.discount}></ProSale>
                </div>
              </div>

              <div className="py-6 border-b-2">
                <div className="flex items-center gap-x-[70px] md:gap-x-0 lg:gap-x-0 lg:justify-between md:justify-between">
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

                  <span className="block   cursor-pointer transition-all hover:scale-125">
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
                </div>
                {/* <ProDesc>{data?.description}</ProDesc> */}
              </div>

              <div className="py-[18px] border-b-2 flex md:flex-col lg:flex-row flex-col items-center gap-y-3 gap-x-2">
                <div className="self-start">
                  <ProHandleQuantity
                    control={control}
                    name="quantity"
                  ></ProHandleQuantity>
                </div>
                <div className="flex items-center gap-x-2 self-start">
                  <Button
                    kind="primary"
                    type="submit"
                    className="w-[160px] !px-[10px]"
                    isLoading={loadingCart}
                  >
                    <div className="flex items-center gap-x-2 transition-all  hover:opacity-70 hover:scale-110">
                      <span className="block w-full text-sm">Add to Cart </span>
                      <IconBagProDetail></IconBagProDetail>
                    </div>
                  </Button>
                  <div
                    onClick={() => {
                      var arrayJSON = JSON.stringify({
                        products_order: [data],
                        quantity: getValues("quantity"),
                        total_price:
                          ((100 - parseInt(data?.discount)) / 100) *
                          parseInt(data?.price) *
                          getValues("quantity"),
                      });
                      localStorage.setItem("orderData", arrayJSON);
                    }}
                  >
                    <Button
                      kind="secondary"
                      href="/checkout"
                      className="w-[160px]"
                    >
                      <div className="flex items-center gap-x-2 transition-all  hover:opacity-70 hover:scale-110">
                        <span className="block w-full text-sm">
                          Buy it Now{" "}
                        </span>
                        <IconAR2 color="#00B207"></IconAR2>
                      </div>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="py-6">
                <div className="flex items-center gap-x-2">
                  <span className="block text-gray9 text-sm font-medium">
                    Category:
                  </span>
                  <span className="block text-gray5 text-sm font-normal">
                    {data?.category?.name}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </Fragment>
  );
};

export default ProDetailItem;
