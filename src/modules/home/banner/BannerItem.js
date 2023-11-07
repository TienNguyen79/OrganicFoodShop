import React, { useEffect, useState } from "react";
import { defaultImage2 } from "../../../constants/global";
import BannerHeading from "./parts/BannerHeading";
import BannerTitle from "./parts/BannerTitle";
import BannerText from "./parts/BannerText";
import BannerNumber from "./parts/BannerNumber";
import Button from "../../../components/button/Button";
import IconAR2 from "../../../components/Icons/IconAR2";

const BannerItem = ({ data }) => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Ngày hết hạn mục tiêu đếm ngược đến
  const targetDate = new Date("2023-11-20T23:09:00").getTime();

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date().getTime();
      const timeRemaining = targetDate - currentDate;
      // console.log(
      //   "🚀 ~ file: BannerItem.js:25 ~ intervalId ~ timeRemaining:",
      //   timeRemaining
      // );

      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24)); //1000 * 60 * 60 * 24 đại diện  cho số mili giây trong một ngày
      const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });

      if (timeRemaining <= 0) {
        clearInterval(intervalId);
        // Ở đây bạn có thể thực hiện các hành động khi thời gian kết thúc.
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex items-center gap-x-6">
      <div className="relative">
        <div className="w-[full] h-[360px]  ">
          <img
            src="/banner1.png"
            className="w-full h-full object-cover rounded-lg"
            alt=""
          />
        </div>
        <div className="absolute top-[80px] left-10">
          <BannerHeading></BannerHeading>
          <BannerTitle
            className="text-[36px] pt-2 pb-5"
            title={data[0]?.name}
          ></BannerTitle>
          <div className="flex items-center gap-x-2">
            <BannerText text="Starting at: "></BannerText>
            <div className="flex items-center">
              <BannerNumber
                unit="$"
                className="bg-warning py-1 px-3 rounded-md text-[16px] font-normal "
                number="8.88"
              ></BannerNumber>
            </div>
          </div>

          <Button
            className="mt-[24px] w-[200px] hover:scale-105 transition-all"
            kind="primary"
            href={`/shop/${data[0]?.id}`}
          >
            Shop Now
            <span className="block ml-2">
              <IconAR2></IconAR2>
            </span>
          </Button>
        </div>
      </div>
      <div className="relative">
        <div className="w-[full] h-[360px]  ">
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
              <BannerNumber number={countdown.days}></BannerNumber>
              <BannerText
                className="text-sm font-normal opacity-80"
                text="Days"
              ></BannerText>
            </div>
            <div className="flex flex-col justify-center items-center">
              <BannerNumber number={countdown.hours}></BannerNumber>
              <BannerText
                className="text-sm font-normal opacity-80"
                text="Hours"
              ></BannerText>
            </div>
            <div className="flex flex-col justify-center items-center">
              <BannerNumber number={countdown.minutes}></BannerNumber>
              <BannerText
                className="text-sm font-normal opacity-80"
                text="Mins"
              ></BannerText>
            </div>
            <div className="flex flex-col justify-center items-center">
              <BannerNumber number={countdown.seconds}></BannerNumber>
              <BannerText
                className="text-sm font-normal opacity-80"
                text="Secs"
              ></BannerText>
            </div>
          </div>

          <Button
            className="mt-[24px] hover:scale-105 transition-all w-[200px]"
            kind="primary"
            href="/shop"
          >
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
