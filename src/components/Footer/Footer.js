import React, { useEffect, useState } from "react";
import FooterItem from "./FooterItem";
import { useDispatch, useSelector } from "react-redux";
import { cateGetdataAll } from "../../store/category/cate-slice";

const Footer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cateGetdataAll());
  }, []);

  const { dataCate } = useSelector((state) => state.category);

  //sắp xếp cate theo thứ tự giảm dần
  const [sortedDataCate, setSortedDataCate] = useState([]);

  useEffect(() => {
    if (dataCate) {
      const sortedData = [...dataCate].sort(
        (a, b) => b.gross_product - a.gross_product
      );
      setSortedDataCate(sortedData);
    }
  }, [dataCate]);

  return (
    <div className="bg-gray9 text-white px-[238px] ">
      <div className="grid grid-cols-6 gap-x-4 py-[60px]  border-b-[1px] border-[#474747]">
        <div className="col-span-2 ">
          <img src="/logoPri.png" className="w-[150px]   object-cover" alt="" />
          <p className="text-gray5 text-sm font-normal py-4 leading-6">
            If you need support, just contact us via the two methods below
          </p>
          <div className="flex gap-x-4 text-sm">
            <div className="relative">
              <span>0919985502</span>
              <div className="absolute after:bg-primary after:absolute after:contents-'' after:w-[86px] after:h-[2px] "></div>
            </div>
            <span className="text-gray5 ">or</span>
            <div className="relative">
              <span>tientech2002@gmail.com</span>
              <div className="absolute after:bg-primary after:absolute after:contents-'' after:w-[170px] after:h-[2px] "></div>
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
            link1="/user_dashboard"
            link2="/order_history"
            link3="/shoppingCart"
            link4="/wishList"
          ></FooterItem>
        </div>
        <div className="col-span-1">
          <FooterItem
            title="Helps"
            label1="Contact"
            label2="Faqs"
            label3="Terms & Condition"
            label4="Privacy Policy"
            link1="/contact"
          ></FooterItem>
        </div>
        <div className="col-span-1">
          <FooterItem
            title="Proxyt"
            label1="About"
            label2="Shop"
            label3="Product"
            label4="Track Order"
            link2="/shop"
            link1="/about"
            link3="/shop"
          ></FooterItem>
        </div>
        <div className="col-span-1">
          <FooterItem
            title="Categories"
            label1={sortedDataCate[0]?.name}
            label2={sortedDataCate[1]?.name}
            label3={sortedDataCate[2]?.name}
            label4={sortedDataCate[3]?.name}
            link1={`/shop/${sortedDataCate[0]?.id}`}
            link2={`/shop/${sortedDataCate[1]?.id}`}
            link3={`/shop/${sortedDataCate[2]?.id}`}
            link4={`/shop/${sortedDataCate[3]?.id}`}
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
