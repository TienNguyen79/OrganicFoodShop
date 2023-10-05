import React from "react";
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
  return (
    <div>
      <SliderBanner></SliderBanner>

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
            <LabelRedirect title="View All"></LabelRedirect>
          </GroupJusBeween>
        </Gap>

        <div className="grid grid-cols-4  gap-x-6">
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
        </div>
      </div>
      <div className="ShopbyTopCategories px-[238px]  bg-[#F3F5F3]">
        <Gap>
          <GroupJusBeween>
            <Label className="text-[35px]">Shop by Top Categories</Label>
            <LabelRedirect title="View All"></LabelRedirect>
          </GroupJusBeween>
        </Gap>

        <div className="cateSlider  ">
          <Slider {...settings}>
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
              <LabelRedirect title="View All"></LabelRedirect>
            </GroupJusBeween>
          </Gap>
          <div className="grid grid-cols-5 gap-x-5">
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
          </div>

          <div className="grid grid-cols-3 gap-x-6 mt-10">
            <div className="flex flex-col gap-y-4">
              <Label className="!font-medium text-[20px] mb-4">Hot Deals</Label>
              <TopProductItem></TopProductItem>
              <TopProductItem></TopProductItem>
              <TopProductItem></TopProductItem>
            </div>
            <div className="flex flex-col gap-y-4">
              <Label className="!font-medium text-[20px] mb-4">
                Best Seller
              </Label>
              <TopProductItem></TopProductItem>
              <TopProductItem></TopProductItem>
              <TopProductItem></TopProductItem>
            </div>
            <div className="flex flex-col gap-y-4">
              <Label className="!font-medium text-[20px] mb-4">Top Rated</Label>
              <TopProductItem></TopProductItem>
              <TopProductItem></TopProductItem>
              <TopProductItem></TopProductItem>
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

      <div className="px-[238px] bg-white flex items-center gap-x-20 pt-[80px]">
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
