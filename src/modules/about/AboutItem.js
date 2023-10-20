import React from "react";
import AboutImage from "./parts/AboutImage";
import AboutHeading from "./parts/AboutHeading";
import AboutTitle from "./parts/AboutTitle";
import AboutDesc from "./parts/AboutDesc";
import AboutIcon from "./parts/AboutIcon";
import Button from "../../components/button/Button";
import IconAR2 from "../../components/Icons/IconAR2";

const AboutItem = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  gap-x-10 pt-[40px] pb-[60px]">
      <div className="flex  items-center flex-1 gap-x-6">
        <AboutImage w="100%" h="100%"></AboutImage>
        <AboutImage w="100%" h="100%"></AboutImage>
      </div>
      <div className="flex-1 ">
        <AboutHeading></AboutHeading>
        <div className="flex flex-col gap-y-[10px] mt-[26px]">
          <div className=" flex gap-x-2 items-start">
            <AboutIcon>
              <span className="block p-[2px] rounded-full bg-primary mt-[4px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={17}
                  viewBox="0 0 16 17"
                  fill="none"
                >
                  <path
                    d="M13.3337 4.5L6.00033 11.8333L2.66699 8.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </AboutIcon>
            <div>
              <AboutTitle></AboutTitle>
              <AboutDesc>
                Maecenas vehicula a justo quis laoreet. Sed in placerat nibh, a
                posuere ex. Morbi sem neque, aliquam sed orci et, rhoncus
                lobortis felis. Sed vestibulum nisl sit amet sapien.
              </AboutDesc>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-[10px] mt-[26px]">
          <div className=" flex gap-x-2 items-start">
            <AboutIcon>
              <span className="block p-[2px] rounded-full bg-primary mt-[4px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={17}
                  viewBox="0 0 16 17"
                  fill="none"
                >
                  <path
                    d="M13.3337 4.5L6.00033 11.8333L2.66699 8.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </AboutIcon>
            <div>
              <AboutTitle></AboutTitle>
              <AboutDesc>
                Maecenas vehicula a justo quis laoreet. Sed in placerat nibh, a
                posuere ex. Morbi sem neque, aliquam sed orci et, rhoncus
                lobortis felis. Sed vestibulum nisl sit amet sapien.
              </AboutDesc>
            </div>
          </div>
        </div>
        <Button kind="primary" className="mt-[26px] !px-[40px]">
          Shop Now
          <span className="block ml-[4px]">
            <IconAR2></IconAR2>
          </span>
        </Button>
      </div>
    </div>
  );
};

export default AboutItem;
