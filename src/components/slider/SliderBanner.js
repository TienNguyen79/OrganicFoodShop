import React, { useEffect } from "react";
import SliderItem from "./SliderItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  cateGetdataAll,
  cateGetdataWithId,
} from "../../store/category/cate-slice";
import { useDispatch, useSelector } from "react-redux";
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

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cateGetdataAll());
  }, []);
  const { dataCate } = useSelector((state) => state.category);
  console.log(
    "🚀 ~ file: SliderBanner.js:24 ~ SliderBanner ~ dataCate:",
    dataCate
  );
  return (
    <div className="bg-greenGray1">
      <Slider {...settings}>
        {dataCate.length > 0 &&
          dataCate.map((item) => (
            <SliderItem key={item.id} data={item}></SliderItem>
          ))}
      </Slider>
    </div>
  );
};

export default SliderBanner;
