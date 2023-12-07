import React, { Fragment, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import IconStarYellow from "../../../components/Icons/IconStarYellow";
import IconStarGray from "../../../components/Icons/IconStarGray";
import ProBigImage from "../../product/partsDetail/ProBigImage";
import ProTitle from "../../product/partsDetail/ProTitle";
import ProLabel from "../../product/partsDetail/ProLabel";
import ProStart from "../../product/parts/ProStart";
import ProReview from "../../product/partsDetail/ProReview";
import ProPrice from "../../product/partsDetail/ProPrice";
import ProSale from "../../product/partsDetail/ProSale";
import ProDesc from "../../product/partsDetail/ProDesc";
import ProThumb from "../../product/partsDetail/ProThumb";
import parse from "html-react-parser";

const AdminProDetailsItem = ({ data }) => {
  console.log(
    "🚀 ~ file: AdminProDetailsItem.js:23 ~ AdminProDetailsItem ~ data:",
    data
  );
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

  useEffect(() => {
    //mới đầu vào cũng phải xét thế này tránh bug hover ảnh ở productdetails
    setLinkImage(data?.imageUrl);
  }, [data?.imageUrl]);

  const [linkImage, setLinkImage] = useState(data?.imageUrl);
  const [selectedThumb, setSelectedThumb] = useState(1);
  const { loading } = useSelector((state) => state.product);

  return (
    <Fragment>
      {loading ? (
        <div className="h-[400px] flex justify-center items-center">
          <img
            src="/loading2.svg"
            className="loadingsvg h-[60px] mx-auto"
            alt="loading"
          />
        </div>
      ) : (
        <form>
          <div className="grid grid-cols-2 gap-x-6 ">
            <div className="grid grid-cols-5">
              <div className="thumbslider col-span-1 flex flex-col  pt-[40px] ">
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
                    <div key={item.id} className="py-1 block">
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
              <div className="col-span-4">
                <ProBigImage
                  className="w-full h-[440px]"
                  imageUrl={linkImage ? linkImage : data?.imageUrl}
                ></ProBigImage>
              </div>
            </div>

            <div>
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
                </div>
                {/* <ProDesc>{data?.description}</ProDesc> */}
              </div>
              <div className="py-6">
                <div className="flex items-center gap-x-2">
                  <span className="block text-gray9 text-sm font-medium">
                    Quantity:
                  </span>
                  <span className="block text-gray5 text-sm font-normal">
                    {data?.quantity}
                  </span>
                </div>
              </div>

              <div className="">
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

export default AdminProDetailsItem;
