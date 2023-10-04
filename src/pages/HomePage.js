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

      <div className=" px-[238px] py-[80px]">
        <BannerItem></BannerItem>
      </div>
      <div className="h-[100vh]"></div>
    </div>
  );
};

export default HomePage;
