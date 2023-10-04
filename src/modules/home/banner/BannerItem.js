import React from "react";
import { defaultImage2 } from "../../../constants/global";
import BannerHeading from "./parts/BannerHeading";
import BannerTitle from "./parts/BannerTitle";
import BannerText from "./parts/BannerText";
import BannerNumber from "./parts/BannerNumber";
import Button from "../../../components/button/Button";
import IconAR2 from "../../../components/Icons/IconAR2";

const BannerItem = () => {
  return (
    <div className="flex items-center gap-x-6">
      <div className="relative">
        <div className="w-[570px] h-[360px]  ">
          <img
            src="/banner1.png"
            className="w-full h-full object-cover rounded-lg"
            alt=""
          />
        </div>
        <div className="absolute top-[80px] left-10">
          <BannerHeading></BannerHeading>
          <BannerTitle className="text-[36px] pt-2 pb-5"></BannerTitle>
          <div className="flex items-center gap-x-2">
            <BannerText text="Starting at: "></BannerText>
            <div className="flex items-center">
              <BannerNumber
                unit="$"
                className="bg-warning py-1 px-3 rounded-md text-[16px] font-normal "
              ></BannerNumber>
            </div>
          </div>

          <Button className="mt-[24px]" kind="primary">
            Shop Now
            <span className="block ml-2">
              <IconAR2></IconAR2>
            </span>
          </Button>
        </div>
      </div>
      <div className="relative">
        <div className="w-[570px] h-[360px]  ">
          <img
            src="/banner2.png"
            className="w-full h-full object-cover rounded-lg"
            alt=""
          />
        </div>
        <div className="absolute top-[80px] left-10">
          <BannerHeading heading="sale off the week"></BannerHeading>
          <BannerTitle
            title="Sales of the Year"
            className="text-[36px] pt-2 pb-5"
          ></BannerTitle>
          <div className="flex items-center gap-x-3">
            <div className="flex flex-col justify-center items-center">
              <BannerNumber number="00"></BannerNumber>
              <BannerText
                className="text-sm font-normal opacity-80"
                text="Days"
              ></BannerText>
            </div>
            <div className="flex flex-col justify-center items-center">
              <BannerNumber number="00"></BannerNumber>
              <BannerText
                className="text-sm font-normal opacity-80"
                text="Hours"
              ></BannerText>
            </div>
            <div className="flex flex-col justify-center items-center">
              <BannerNumber number="00"></BannerNumber>
              <BannerText
                className="text-sm font-normal opacity-80"
                text="Mins"
              ></BannerText>
            </div>
            <div className="flex flex-col justify-center items-center">
              <BannerNumber number="00"></BannerNumber>
              <BannerText
                className="text-sm font-normal opacity-80"
                text="Secs"
              ></BannerText>
            </div>
          </div>

          <Button className="mt-[24px]" kind="primary">
            Shop Now
            <span className="block ml-2">
              <IconAR2></IconAR2>
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BannerItem;
