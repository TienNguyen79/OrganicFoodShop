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
        <AboutImage
          w="100%"
          h="100%"
          linkUrl="https://images.unsplash.com/photo-1610492219815-f76905e3f084?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ></AboutImage>
        <AboutImage
          w="100%"
          h="100%"
          linkUrl="https://images.unsplash.com/photo-1610415958681-7aabb05711f5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ></AboutImage>
      </div>
      <div className="flex-1 ">
        <AboutHeading className="text-[20px] mt-3 md:text-[25px] lg:text-[40px]"></AboutHeading>
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
                At our core, we are dedicated to providing a haven for
                individuals who cherish a lifestyle centered around health and
                wellness. Our commitment is reflected in the carefully curated
                selection of healthy and natural foods we offer, tailored for
                those who prioritize nourishing their bodies with goodness.
              </AboutDesc>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutItem;
