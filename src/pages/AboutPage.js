import React from "react";
import AboutHeading from "../modules/about/parts/AboutHeading";
import AboutDesc from "../modules/about/parts/AboutDesc";
import AboutImage from "../modules/about/parts/AboutImage";
import AboutIcon from "../modules/about/parts/AboutIcon";
import Label from "../components/label/Label";
import TestimonialItem from "../modules/user/TestimonialItem";
import Gap from "../components/common/Gap";
import Slider from "react-slick";

const AboutPage = () => {
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
    <div className="mt-[80px]">
      <div className="flex items-center gap-x-[50px]">
        <div className="flex-1 ">
          <AboutHeading className="text-[40px] mb-8"></AboutHeading>
          <AboutDesc>
            Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
            laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
            Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec
            a eros non massa vulputate ornare. Vivamus ornare commodo ante, at
            commodo felis congue vitae.
          </AboutDesc>
        </div>
        <div className="flex-1">
          <AboutImage
            w="100%"
            h="400px"
            linkUrl="https://plus.unsplash.com/premium_photo-1686285540844-b0e626ffaba4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ></AboutImage>
        </div>
      </div>
      <div className="flex items-center my-[80px] gap-x-[50px]">
        <div className="flex-1">
          <AboutImage
            w="100%"
            h="400px"
            linkUrl="https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ></AboutImage>
        </div>
        <div className="flex-1 ">
          <AboutHeading className="text-[40px] mb-8"></AboutHeading>
          <AboutDesc>
            Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
            Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a
            mi. Nulla eu eros consequat tortor tincidunt feugiat.
          </AboutDesc>
        </div>
      </div>
      <div className="flex items-center gap-x-[50px]">
        <div className="flex-1 ">
          <AboutHeading
            heading="We Delivered, You Enjoy Your Order."
            className="text-[40px] mb-8"
          ></AboutHeading>
          <AboutDesc>
            Ut suscipit egestas suscipit. Sed posuere pellentesque nunc,
            ultrices consectetur velit dapibus eu. Mauris sollicitudin dignissim
            diam, ac mattis eros accumsan rhoncus. Curabitur auctor bibendum
            nunc eget elementum.
          </AboutDesc>

          <div className="mt-5 flex flex-col gap-y-4">
            <div className="flex items-center gap-y-4 gap-x-3">
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
              <AboutDesc>Sed in metus pellentesque.</AboutDesc>
            </div>
            <div className="flex items-center gap-y-4 gap-x-3">
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
              <AboutDesc>Sed in metus pellentesque.</AboutDesc>
            </div>
            <div className="flex items-center gap-y-4 gap-x-3">
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
              <AboutDesc>Sed in metus pellentesque.</AboutDesc>
            </div>
            <div className="flex items-center gap-y-4 gap-x-3">
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
              <AboutDesc>Sed in metus pellentesque.</AboutDesc>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <AboutImage
            w="100%"
            h="400px"
            linkUrl="https://plus.unsplash.com/premium_photo-1682144120790-1461fd602bc9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ></AboutImage>
        </div>
      </div>

      <div className="py-[80px]">
        <div className="text-center ">
          <Label className="text-[40px]">Our Awesome Team</Label>
          <span className="mt-2 text-gray6 text-[16px] font-normal text-center block  ">
            Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
            Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a
            mi.
          </span>
        </div>
        <div className="mt-[50px] grid grid-cols-4 gap-x-6">
          <div className="shadow-lg">
            <AboutImage
              w="280px"
              h="260px"
              className=""
              linkUrl="https://o.remove.bg/downloads/9d1af7a3-9b77-4a57-8714-6eb6de06a920/image-removebg-preview.png"
            ></AboutImage>
            <div className="bg-[#F5F5F5] pt-4 px-5 pb-5 w-full ">
              <h1 className="text-gray9 text-[18px] font-medium">
                Nguyen Manh Tien
              </h1>
              <span className="block text-gray5 text-sm font-normal">
                {" "}
                Ceo & Founder
              </span>
            </div>
          </div>
          <div className="shadow-lg">
            <AboutImage
              w="280px"
              h="260px"
              className=""
              linkUrl="https://o.remove.bg/downloads/9d1af7a3-9b77-4a57-8714-6eb6de06a920/image-removebg-preview.png"
            ></AboutImage>
            <div className="bg-[#F5F5F5] pt-4 px-5 pb-5 w-full ">
              <h1 className="text-gray9 text-[18px] font-medium">
                Bui Duc Thang
              </h1>
              <span className="block text-gray5 text-sm font-normal">
                {" "}
                Ceo & Founder
              </span>
            </div>
          </div>
          <div className="shadow-lg">
            <AboutImage
              w="280px"
              h="260px"
              className=""
              linkUrl="https://cdn4.iconfinder.com/data/icons/essential-app-2/16/user-avatar-human-admin-login-512.png"
            ></AboutImage>
            <div className="bg-[#F5F5F5] pt-4 px-5 pb-5 w-full ">
              <h1 className="text-gray9 text-[18px] font-medium">John</h1>
              <span className="block text-gray5 text-sm font-normal">
                {" "}
                Employee
              </span>
            </div>
          </div>
          <div className="shadow-lg">
            <AboutImage
              w="280px"
              h="260px"
              className=""
              linkUrl="https://o.remove.bg/downloads/b074dfe0-81c2-4b3e-91f3-f6948ea64241/1142-removebg-preview.png"
            ></AboutImage>
            <div className="bg-[#F5F5F5] pt-4 px-5 pb-5 w-full ">
              <h1 className="text-gray9 text-[18px] font-medium">Liza</h1>
              <span className="block text-gray5 text-sm font-normal">
                {" "}
                Employee
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="Testimonial  ">
          <Gap>
            <Label className="text-[35px] ">Client Testimonail</Label>
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

        <div className="px-[238px] bg-white flex items-center justify-center gap-x-20 pt-[80px]">
          <img src="/imgFoot/img1.png" alt="" />
          <img src="/imgFoot/img2.png" alt="" />
          <img src="/imgFoot/img3.png" alt="" />
          <img src="/imgFoot/img4.png" alt="" />
          <img src="/imgFoot/img5.png" alt="" />
          <img src="/imgFoot/img7.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
