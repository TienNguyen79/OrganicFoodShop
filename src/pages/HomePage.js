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
import { blogGetAll } from "../store/blog/blog-slice";
import { Link, useLocation } from "react-router-dom";
import { wishListGetAll } from "../store/cart/cart-slice";
import { getToken } from "../utils/auth";
import ProductLoading from "../modules/product/ProductLoading";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
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
  const { pathname } = useLocation();

  console.log("pathname", pathname);

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
  };
  const settings2 = {
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000, //5s trượt 1 lần
    cssEase: "ease-in-out",
  };

  const settings3 = {
    className: "center",
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 3,
    swipeToSlide: true,
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(proGetBestSeller());
    dispatch(proGetHotDeal());
    dispatch(proGetTopRated());
    dispatch(proGetFeauture());
    dispatch(cateGetdataAll());
    dispatch(proGetAll());
    dispatch(blogGetAll(1));
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
    loadings,
    dataProSearch,
    dataPro,
  } = useSelector((state) => state.product);
  console.log("🚀 ~ file: HomePage.js:126 ~ HomePage ~ dataPro:", dataPro);

  const { dataCate } = useSelector((state) => state.category);
  const { dataQuickview } = useSelector((state) => state.product);
  const { dataBlogAll } = useSelector((state) => state.blog);

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

  //xử lý mobile slider
  const [shouldShowSlider, setShouldShowSlider] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      // Kiểm tra kích thước màn hình và quyết định ẩn/hiển thị slider
      setShouldShowSlider(window.innerWidth > 768);
    };

    // Gọi hàm handleResize khi kích thước màn hình thay đổi
    window.addEventListener("resize", handleResize);

    // Gọi hàm handleResize ngay khi component được mount để kiểm tra kích thước ban đầu
    handleResize();

    // Xóa event listener khi component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //sắp xếp cate theo thứ tự giảm dần
  const [sortedDataCate, setSortedDataCate] = useState([]);
  useEffect(() => {
    if (dataCate) {
      const sortedData = [...dataCate].sort(
        (a, b) => b.gross_product - a.gross_product
      );
      setSortedDataCate(sortedData);
    }
  }, [dataCate]);
  return (
    <div>
      {loadings.bestSeller === true &&
      loadings.hotDeal === true &&
      loadings.topRated === true &&
      loadings.feauture === true ? (
        <div className="fixed h-full flex items-center inset-0  bg-white z-[999] ">
          <img
            src="/loading3.svg"
            className="loadingsvg  h-[150px] mx-auto "
            alt="loading"
          />
        </div>
      ) : (
        ""
      )}

      <div className="">
        <ProQuickView
          open={isModalOpen ? "visible" : "invisible"}
          onClose={closeModal}
          isClickClose={isClickClose}
          className="top-[190px]"
          // data={datafake}
        />
      </div>

      <SliderBanner></SliderBanner>

      <div className="px-5 md:px-[30px] lg:px-[238px]   grid grid-cols-1  md:grid-cols-4 lg:grid-cols-4 gap-x-6 relative ">
        {dataUtil.length > 0 &&
          dataUtil.map((data) => (
            <UtilsFeautureItem data={data} key={data.id}></UtilsFeautureItem>
          ))}
      </div>
      <div className="FeaturedProducts md:px-[60px] lg:px-[238px] mb-[80px]">
        <Gap>
          <GroupJusBeween className="px-4 md:px-0 lg:px-0">
            <Label className="text-[20px] md:text-[25px] lg:text-[35px]">
              Featured Products
            </Label>
            <LabelRedirect
              url="/featureProducts"
              title="View All"
              className="font-medium hover:opacity-75"
            ></LabelRedirect>
          </GroupJusBeween>
        </Gap>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-5 px-5  gap-x-6">
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
      <div className="ShopbyTopCategories px-3  lg:px-[238px]  bg-[#F3F5F3]">
        <Gap>
          <GroupJusBeween>
            <Label className="text-[20px] md:text-[25px] lg:text-[35px]">
              Shop by Top Categories
            </Label>
            <LabelRedirect
              url="/shop"
              title="View All"
              className="font-medium hover:opacity-75"
            ></LabelRedirect>
          </GroupJusBeween>
        </Gap>

        {shouldShowSlider ? (
          <div className="cateSlider">
            <Slider {...settings}>
              {sortedDataCate.length > 0 &&
                sortedDataCate.map((item, index) => {
                  return (
                    <Link
                      className="px-3"
                      key={item.id}
                      to={`/shop/${item.id}`}
                    >
                      <CategoryItem
                        data={item}
                        datatLength={item?.gross_product}
                      ></CategoryItem>
                    </Link>
                  );
                })}
            </Slider>
          </div>
        ) : (
          <div className="grid grid-cols-2  ">
            {sortedDataCate.length > 0 &&
              sortedDataCate?.slice(0, 4)?.map((item, index) => {
                return (
                  <Link
                    className="px-2 w-[180px] "
                    key={item.id}
                    to={`/shop/${item.id}`}
                  >
                    <CategoryItem
                      data={item}
                      datatLength={item?.gross_product}
                    ></CategoryItem>
                  </Link>
                );
              })}
          </div>
        )}

        <div>
          <AboutItem></AboutItem>
        </div>
      </div>

      <div className="bg-[#001109] py-[60px] md:px-[60px] lg:px-[238px] gradient-achive">
        <AchieveFeauture></AchieveFeauture>
      </div>

      <div className=" md:px-[60px] lg:px-[238px] py-[80px] bg-white">
        <BannerItem data={dataCate}></BannerItem>

        <div className="BestSellerProducts">
          <Gap>
            <GroupJusBeween className="px-4 md:px-0 lg:px-0">
              <Label className="text-[20px] md:text-[25px] lg:text-[35px]">
                Best Seller Products
              </Label>
              <LabelRedirect
                url="/topProducts"
                title="View All"
                className="font-medium hover:opacity-75"
              ></LabelRedirect>
            </GroupJusBeween>
          </Gap>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 px-5 lg:grid-cols-4 gap-x-5">
            {dataBestSeller.length > 0 &&
              dataBestSeller
                .slice(0, 4)
                .map((item) => (
                  <ProductItem
                    key={item.id}
                    data={item}
                    openModal={openModal}
                  ></ProductItem>
                ))}
          </div>

          <div className="grid grid-cols-1 px-5 md:grid-cols-2 gap-y-4 lg:grid-cols-3 gap-x-6 mt-10">
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

      <div className="BlogLatestNews bg-[#F2F2F2] md:px-[20px] lg:px-[238px]">
        <div className="text-center">
          <Label className="text-[20px] md:text-[30px] lg:text-[35px] pt-[80px] pb-10">
            Latest News
          </Label>
        </div>
        <div className="pb-5 md:pb-10 lg:pb-[80px] gap-y-5 px-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-x-6">
          {dataBlogAll?.data?.length > 0 &&
            dataBlogAll?.data
              ?.slice(0, 3)
              .map((item) => <BlogItem key={item.id} data={item}></BlogItem>)}
        </div>
      </div>

      <div className="Testimonial bg-[#FAFBFA] md:px-5 lg:px-[238px] pb-5">
        <Gap>
          <Label className="ml-5 text-[20px] md:text-[30px] lg:text-[35px] ">
            What Our Customer Says
          </Label>
        </Gap>

        {shouldShowSlider ? (
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
        ) : (
          <div className="flex flex-col px-5 ">
            <div className="px-3">
              <TestimonialItem></TestimonialItem>
            </div>
            <div className="px-3">
              <TestimonialItem></TestimonialItem>
            </div>
            <div className="px-3">
              <TestimonialItem></TestimonialItem>
            </div>
          </div>
        )}
      </div>

      <div className="md:px-[60px] lg:px-[238px] bg-white  pt-[80px]">
        {shouldShowSlider ? (
          <div className="flex items-center justify-center gap-x-20">
            <img
              className="md:w-[50px] lg:w-full"
              src="/imgFoot/img1.png"
              alt=""
            />
            <img
              className="md:w-[50px] lg:w-full"
              src="/imgFoot/img2.png"
              alt=""
            />
            <img
              className="md:w-[50px] lg:w-full"
              src="/imgFoot/img3.png"
              alt=""
            />
            <img
              className="md:w-[50px] lg:w-full"
              src="/imgFoot/img4.png"
              alt=""
            />
            <img
              className="md:w-[50px] lg:w-full"
              src="/imgFoot/img5.png"
              alt=""
            />
            <img
              className="md:w-[50px] lg:w-full"
              src="/imgFoot/img7.png"
              alt=""
            />
          </div>
        ) : (
          <div className="flex items-center justify-center gap-x-7">
            <img
              className="md:w-[50px] lg:w-full"
              src="/imgFoot/img1.png"
              alt=""
            />
            <img
              className="md:w-[50px] lg:w-full"
              src="/imgFoot/img2.png"
              alt=""
            />
            <img
              className="md:w-[50px] lg:w-full"
              src="/imgFoot/img3.png"
              alt=""
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
