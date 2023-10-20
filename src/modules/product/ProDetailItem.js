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
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
const ProDetailItem = ({ data, isClickClose }) => {
  const { control, watch, setValue, handleSubmit, getValues, reset } = useForm({
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

  const [isClickTym, setIsClickTym] = useState(false);
  const [linkImage, setLinkImage] = useState(data?.imageUrl);
  const [selectedThumb, setSelectedThumb] = useState(1);
  const { loading } = useSelector((state) => state.product);

  const [formData, setFormData] = useState({
    imgPro: "",
    namePro: "",
    quantityPro: 1,
    pricePro: 100,
    // Thêm các trường nhập liệu khác ở đây
  });
  console.log(
    "🚀 ~ file: ProDetailItem.js:78 ~ ProDetailItem ~ formData:",
    formData
  );

  const HandleProDetails = (values) => {
    setFormData({
      ...formData,
      quantityPro: values.quantityPro,
      pricePro: (
        ((100 - parseInt(data?.discount)) / 100) *
        parseInt(data?.price)
      ).toFixed(2),
      imgPro: linkImage,
      namePro: data?.name,
    });

    //khi submit xong set số lượng về 0
    setValue("quantityPro", 0);
  };

  useEffect(() => {
    //khi có click đóng phải set về hình ảnh chính vì nếu không làm thế khi hover vào thumb nó sẽ giữ linkImg của thumb lại
    if (isClickClose) {
      setLinkImage(data?.imageUrl);
      // setIsClickTym(false);//để tạm chưa hợp lý
    }
  }, [data?.imageUrl, isClickClose]);

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
        <form onSubmit={handleSubmit(HandleProDetails)}>
          <div className="grid grid-cols-2 gap-x-6">
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

                  <span
                    className="block   cursor-pointer transition-all hover:scale-125"
                    onClick={() => setIsClickTym(!isClickTym)}
                  >
                    {isClickTym ? (
                      <span className="block bg-red-300 p-2 rounded-full">
                        <IconRedTym></IconRedTym>
                      </span>
                    ) : (
                      <span className="block bg-[#E9F8E9] p-2 rounded-full">
                        <Icontym2></Icontym2>
                      </span>
                    )}
                  </span>
                </div>
                <ProDesc>{data?.description}</ProDesc>
              </div>

              <div className="py-[18px] border-b-2 flex items-center gap-x-3">
                <ProHandleQuantity
                  control={control}
                  name="quantityPro"
                ></ProHandleQuantity>

                <Button kind="primary" type="submit">
                  <div className="flex items-center gap-x-2 transition-all  hover:opacity-70 hover:scale-110">
                    <span>Add to Cart </span>
                    <IconBagProDetail></IconBagProDetail>
                  </div>
                </Button>
                <Button kind="secondary">
                  <div className="flex items-center gap-x-2 transition-all  hover:opacity-70 hover:scale-110">
                    <span>Buy it Now </span>
                    <IconAR2 color="#00B207"></IconAR2>
                  </div>
                </Button>
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
