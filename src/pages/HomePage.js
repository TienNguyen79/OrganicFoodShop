import React, { useEffect, useState } from "react";
import SliderBanner from "../components/slider/SliderBanner";
import UtilsFeautureItem from "../modules/home/feature/UtilsFeautureItem";
import Label from "../components/label/Label";
import GroupJusBeween from "../components/common/GroupJusBeween";
import Gap from "../components/common/Gap";
import LabelRedirect from "../components/label/LabelRedirect";
import IconAR2 from "../components/Icons/IconAR2";
import IconArrowDown from "../components/Icons/IconArrowDown";
import IconArrowRight from "../components/Icons/IconArrowRight";
import ProductItem from "../modules/product/ProductItem";
import CategoryItem from "../modules/category/CategoryItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutItem from "../modules/about/AboutItem";
import AchieveFeauture from "../modules/home/feature/AchieveFeauture";
import BannerItem from "../modules/home/banner/BannerItem";
import TopProductItem from "../modules/product/TopProductItem";
import BlogItem from "../modules/blog/BlogItem";
import TestimonialItem from "../modules/user/TestimonialItem";
import { useDispatch, useSelector } from "react-redux";
import {
  proGetAll,
  proGetBestSeller,
  proGetFeauture,
  proGetHotDeal,
  proGetTopRated,
} from "../store/product/pro-slice";
import axios from "../api/axios";
import { cateGetdataAll } from "../store/category/cate-slice";
import ProQuickView from "../modules/product/ProQuickView";
import CartPopup from "../modules/cart/CartPopup";

const dataUtil = [
  {
    id: 1,
    url: "/iconutils/IconCar.png",
    title: "Free Shipping",
    contentDesc: "Free shipping with discount",
  },
  {
    id: 2,
    url: "/iconutils/Iconheadphone.png",
    title: "Great Support 24/7",
    contentDesc: "Instant access to Contact",
  },
  {
    id: 3,
    url: "/iconutils/IconBag.png",
    title: "100% Sucure Payment",
    contentDesc: "We ensure your money is save",
  },
  {
    id: 4,
    url: "/iconutils/IconBox.png",
    title: "Money-Back Guarantee",
    contentDesc: "30 days money-back",
  },
];

const HomePage = () => {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 6,
    swipeToSlide: true,
  };
  const settings2 = {
    // className: "center",
    // centerMode: true,
    // infinite: true,
    // centerPadding: "10px",
    // slidesToShow: 3,
    // speed: 500,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000, //5s trượt 1 lần
    cssEase: "ease-in-out",
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(proGetBestSeller());
    dispatch(proGetHotDeal());
    dispatch(proGetTopRated());
    dispatch(proGetFeauture());
    dispatch(cateGetdataAll());
    dispatch(proGetAll());
  }, []);

  // useEffect(() => {
  // }, []);
  // useEffect(() => {
  // }, []);

  // useEffect(() => {
  // }, [dispatch]);
  // useEffect(() => {
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch(cateGetdataAll());
  // }, []);

  const {
    dataBestSeller,
    dataHotDeal,
    dataTopRated,
    dataFeauture,
    loading,
    dataProSearch,
    dataPro,
  } = useSelector((state) => state.product);

  const { dataCate } = useSelector((state) => state.category);
  // console.log("🚀 ~ file: HomePage.js:107 ~ HomePage ~ dataCate:", dataCate);

  // console.log(
  //   "🚀 ~ file: HomePage.js:83 ~ HomePage ~ dataHotDeal:",
  //   dataHotDeal
  // );
  // console.log(
  //   "🚀 ~ file: HomePage.js:82 ~ HomePage ~ dataBestSeller:",
  //   dataBestSeller
  // );
  // useEffect(() => {
  //   async function fetch() {
  //     const tt = await axios.get("/api/bestSellerProducts");
  //     console.log("🚀 ~ file: HomePage.js:98 ~ fetch ~ tt:", tt);
  //   }
  //   fetch();
  // }, []);
  const { dataQuickview } = useSelector((state) => state.product);

  const [isModalOpen, setModalOpen] = useState(false);
  const [isClickClose, setIsClickClose] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setIsClickClose(true);
  };
  //--------------

  //xử lý chèn số lượng sản phẩm với categoryId tương ứng ở Shop by Top Categories
  const [datatLength, setDatatLength] = useState([]);

  useEffect(() => {
    const arr = [];
    const arrLength = [];
    dataCate.map((item) => {
      arr.push(item.id);
    });

    arr.map((id) => {
      const productsInCategory = dataPro.filter(
        (product) => product.category_id === id
      );
      arrLength.push(productsInCategory.length);
    });
    setDatatLength(arrLength);
  }, [dataCate, dataPro]);

  return (
    <div>
      {loading && dataProSearch.length <= 0 && dataQuickview.length <= 0 && (
        <div className="fixed h-full flex items-center inset-0 bg-opacity-90  bg-white z-[999] ">
          <img
            src="/loading3.svg"
            className="loadingsvg  h-[150px] mx-auto"
            alt="loading"
          />
        </div>
      )}
      <div className="pt-[80px]">
        <ProQuickView
          open={isModalOpen ? "visible" : "invisible"}
          onClose={closeModal}
          isClickClose={isClickClose}
          // data={datafake}
        />
      </div>

      {/* <CartPopup
        openCart={isModalOpenCart ? "visible" : "invisible"}
        onClose={closeModalCart}
        isClickClose={isClickCloseCart}
      ></CartPopup> */}
      <SliderBanner></SliderBanner>
      {/* <div>
        {dataHotDeal?.length > 0 &&
          dataHotDeal.map((item) => <h1 key={item.id}>{item?.name}</h1>)}
      </div>
      <div>
        {dataBestSeller?.length > 0 &&
          dataBestSeller.map((item) => (
            <h1 className="bg-red-600" key={item.id}>
              {item?.discount}
            </h1>
          ))}
      </div> */}

      <div className="px-[238px]  grid grid-cols-4 gap-x-6 relative ">
        {dataUtil.length > 0 &&
          dataUtil.map((data) => (
            <UtilsFeautureItem data={data} key={data.id}></UtilsFeautureItem>
          ))}
      </div>
      <div className="FeaturedProducts px-[238px] mb-[80px]">
        <Gap>
          <GroupJusBeween>
            <Label className="text-[35px]">Featured Products</Label>
            <LabelRedirect
              url="/featureProducts"
              title="View All"
            ></LabelRedirect>
          </GroupJusBeween>
        </Gap>

        <div className="grid grid-cols-4  gap-x-6">
          {dataFeauture.length > 0 &&
            dataFeauture.map((item) => (
              <ProductItem
                key={item.id}
                data={item}
                openModal={openModal}
              ></ProductItem>
            ))}
        </div>
      </div>
      <div className="ShopbyTopCategories px-[238px]  bg-[#F3F5F3]">
        <Gap>
          <GroupJusBeween>
            <Label className="text-[35px]">Shop by Top Categories</Label>
            <LabelRedirect url="/shop" title="View All"></LabelRedirect>
          </GroupJusBeween>
        </Gap>

        <div className="cateSlider  ">
          <Slider {...settings}>
            {dataCate.length > 0 &&
              dataCate.map((item, index) => {
                return (
                  <div className="px-3" key={item.id}>
                    <CategoryItem
                      data={item}
                      datatLength={datatLength[index]}
                    ></CategoryItem>
                  </div>
                );
              })}
            <div className="px-3">
              <CategoryItem></CategoryItem>
            </div>
            <div className="px-3">
              <CategoryItem></CategoryItem>
            </div>
            <div className="px-3">
              <CategoryItem></CategoryItem>
            </div>
            <div className="px-3">
              <CategoryItem></CategoryItem>
            </div>
            <div className="px-3">
              <CategoryItem></CategoryItem>
            </div>
            <div className="px-3">
              <CategoryItem></CategoryItem>
            </div>
          </Slider>
        </div>

        <div>
          <AboutItem></AboutItem>
        </div>
      </div>

      <div className="bg-[#001109] py-[60px] px-[238px] gradient-achive">
        <AchieveFeauture></AchieveFeauture>
      </div>

      <div className=" px-[238px] py-[80px] bg-white">
        <BannerItem></BannerItem>

        <div className="BestSellerProducts">
          <Gap>
            <GroupJusBeween>
              <Label className="text-[35px]">Best Seller Products</Label>
              <LabelRedirect
                url="/topProducts"
                title="View All"
              ></LabelRedirect>
            </GroupJusBeween>
          </Gap>
          <div className="grid grid-cols-5 gap-x-5">
            {dataBestSeller.length > 0 &&
              dataBestSeller
                .slice(0, 5)
                .map((item) => (
                  <ProductItem
                    key={item.id}
                    data={item}
                    openModal={openModal}
                  ></ProductItem>
                ))}
          </div>

          <div className="grid grid-cols-3 gap-x-6 mt-10">
            <div className="flex flex-col gap-y-4">
              <Label className="!font-medium text-[20px] mb-4">Hot Deals</Label>
              {dataHotDeal.length > 0 &&
                dataHotDeal
                  .slice(0, 3)
                  .map((item) => (
                    <TopProductItem
                      key={item.id}
                      data={item}
                      openModal={openModal}
                    ></TopProductItem>
                  ))}
            </div>
            <div className="flex flex-col gap-y-4">
              <Label className="!font-medium text-[20px] mb-4">
                Best Seller
              </Label>
              {dataBestSeller.length > 0 &&
                dataBestSeller
                  .slice(6, 9)
                  .map((item) => (
                    <TopProductItem
                      key={item.id}
                      data={item}
                      openModal={openModal}
                    ></TopProductItem>
                  ))}
            </div>
            <div className="flex flex-col gap-y-4">
              <Label className="!font-medium text-[20px] mb-4">Top Rated</Label>
              {dataTopRated.length > 0 &&
                dataTopRated
                  .slice(0, 3)
                  .map((item) => (
                    <TopProductItem
                      data={item}
                      key={item.id}
                      openModal={openModal}
                    ></TopProductItem>
                  ))}
            </div>
          </div>
        </div>
      </div>

      <div className="BlogLatestNews bg-[#F2F2F2] px-[238px]">
        <div className="text-center">
          <Label className="text-[35px] pt-[80px] pb-10">Latest News</Label>
        </div>
        <div className="pb-[80px] grid grid-cols-3 gap-x-6">
          <BlogItem></BlogItem>
          <BlogItem></BlogItem>
          <BlogItem></BlogItem>
        </div>
      </div>

      <div className="Testimonial bg-[#FAFBFA] px-[238px]">
        <Gap>
          <Label className="text-[35px] ">What Our Customer Says</Label>
        </Gap>

        <Slider {...settings2}>
          <div className="px-3">
            <TestimonialItem></TestimonialItem>
          </div>
          <div className="px-3">
            <TestimonialItem></TestimonialItem>
          </div>
          <div className="px-3">
            <TestimonialItem></TestimonialItem>
          </div>
          <div className="px-3">
            <TestimonialItem></TestimonialItem>
          </div>
          <div className="px-3">
            <TestimonialItem></TestimonialItem>
          </div>
        </Slider>

        {/* <div className="grid grid-cols-3 gap-x-6">
          <TestimonialItem></TestimonialItem>
          <TestimonialItem></TestimonialItem>
          <TestimonialItem></TestimonialItem>
        </div> */}
      </div>

      <div className="px-[238px] bg-white flex items-center justify-center gap-x-20 pt-[80px]">
        <img src="/imgFoot/img1.png" alt="" />
        <img src="/imgFoot/img2.png" alt="" />
        <img src="/imgFoot/img3.png" alt="" />
        <img src="/imgFoot/img4.png" alt="" />
        <img src="/imgFoot/img5.png" alt="" />
        <img src="/imgFoot/img7.png" alt="" />
      </div>
    </div>
  );
};

export default HomePage;
