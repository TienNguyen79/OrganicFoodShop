import React from "react";
import FooterItem from "./FooterItem";

const Footer = () => {
  return (
    <div className="bg-gray9 text-white px-[238px] ">
      <div className="grid grid-cols-6 gap-x-4 py-[60px]  border-b-[1px] border-[#474747]">
        <div className="col-span-2">
          <img src="/LogoEcoFooter.png" className=" object-cover" alt="" />
          <p className="text-gray5 text-sm font-normal py-4">
            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
            dui, eget bibendum magna congue nec.
          </p>
          <div className="flex gap-x-4 text-sm">
            <div className="relative">
              <span>(219) 555-0114</span>
              <div className="absolute after:bg-primary after:absolute after:contents-'' after:w-[98px] after:h-[2px] "></div>
            </div>
            <span className="text-gray5 ">or</span>
            <div className="relative">
              <span>Proxy@gmail.com</span>
              <div className="absolute after:bg-primary after:absolute after:contents-'' after:w-[125px] after:h-[2px] "></div>
            </div>
          </div>
        </div>
        <div className="col-span-1 ">
          <FooterItem
            title="My Account"
            label1="Account"
            label2="Order History"
            label3="Shoping Cart"
            label4="Wishlist"
          ></FooterItem>
        </div>
        <div className="col-span-1">
          <FooterItem
            title="Helps"
            label1="Contact"
            label2="Faqs"
            label3="Terms & Condition"
            label4="Privacy Policy"
          ></FooterItem>
        </div>
        <div className="col-span-1">
          <FooterItem
            title="Proxyt"
            label1="About"
            label2="Shop"
            label3="Product"
            label4="Track Order"
          ></FooterItem>
        </div>
        <div className="col-span-1">
          <FooterItem
            title="Categories"
            label1="Fruit & Vegetables"
            label2="Meat & Fish"
            label3="Bread & Bakery"
            label4="Beauty & Health"
          ></FooterItem>
        </div>
      </div>

      <div className="py-6 flex items-center justify-between">
        <span className="text-gray5 text-sm font-normal">
          Ecobazar eCommerce © 2023. Copyright belongs to NMT
        </span>
        <div className="flex gap-x-2 items-center">
          <img src="/ApplePay.png" alt="" />
          <img src="/Visa.png" alt="" />
          <img src="/Discover.png" alt="" />
          <img src="/Mastercard.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
