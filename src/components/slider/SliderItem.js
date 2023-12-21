import React from "react";
import Label from "../label/Label";
import Button from "../button/Button";
import IconAR2 from "../Icons/IconAR2";

const SliderItem = ({ data }) => {
  return (
    <div>
      <div className="px-[10px] md:px-[60px] lg:px-[238px] py-[70px] grid grid-cols-2 gap-x-[38px] ">
        <div className="h-[240px] md:h-[200px] lg:h-[330px] ">
          <img
            src={data?.image || "/ProductImg.png"}
            className="w-full h-full object-cover rounded-lg"
            alt=""
          />
        </div>
        <div>
          <h3 className="text-sm text-primary font-medium uppercase ">
            Welcome to shopery
          </h3>
          <Label className="md:text-[20px] lg:text-[50px] md:leading-[0.7] lg:leading-[1.2] capitalize mt-2">
            {data?.name}
          </Label>
          <div className="flex items-center gap-x-2 md:text-[16px] lg:text-[27px] mt-[16px]">
            <h2 className="font-normal">Sale up to </h2>
            <span className="block text-warning font-semibold">30% OFF</span>
          </div>
          <p className="text-gray5 text-sm font-normal mt-1">
            Free shipping on all your order. we deliver, you enjoy
          </p>

          <div className="mt-[30px]">
            <Button
              kind="primary"
              className="!px-[20px] w-[140px] md:w-[195px] lg:w-[195px] text-[13px]  md:text-[14px] lg:text-[16px] transition-all hover:scale-105"
              href={`/shop/${data.id}`}
            >
              Shop Now
              <span className="block ml-4">
                <IconAR2></IconAR2>
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderItem;
