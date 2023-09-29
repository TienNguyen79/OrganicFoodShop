import React from "react";
import SliderItem from "./SliderItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SliderBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, //5s trượt 1 lần
    cssEase: "ease",
  };
  return (
    <div className="bg-greenGray1">
      <Slider {...settings}>
        <SliderItem></SliderItem>
        <SliderItem></SliderItem>
        <SliderItem></SliderItem>
        <SliderItem></SliderItem>
      </Slider>
    </div>
  );
};

export default SliderBanner;
