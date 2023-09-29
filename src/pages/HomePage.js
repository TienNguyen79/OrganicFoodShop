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
  return (
    <div>
      <SliderBanner></SliderBanner>

      <div className="px-[238px]  grid grid-cols-4 gap-x-6 relative ">
        {dataUtil.length > 0 &&
          dataUtil.map((data) => (
            <UtilsFeautureItem data={data} key={data.id}></UtilsFeautureItem>
          ))}
      </div>
      <div className="px-[238px] h-[100vh]">
        <Gap>
          <GroupJusBeween>
            <Label className="text-[35px]">Featured Products</Label>
            <LabelRedirect title="View All"></LabelRedirect>
          </GroupJusBeween>
        </Gap>

        <div className="grid grid-cols-4">
          <ProductItem></ProductItem>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
