import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  proGetBestSeller,
  proGetHotDeal,
  proGetTopRated,
} from "../store/product/pro-slice";
import ProductItem from "../modules/product/ProductItem";
import Label from "../components/label/Label";
const tabs = [
  {
    id: 1,
    title: "BestSeller Products",
  },
  {
    id: 2,
    title: "HotDeal Products",
  },
  {
    id: 3,
    title: "TopRated Products",
  },
];
const TopProductPage = () => {
  const dispatch = useDispatch();
  const [tabClicked, setTabClicked] = useState(1);

  useEffect(() => {
    dispatch(proGetBestSeller());
    dispatch(proGetHotDeal());
    dispatch(proGetTopRated());
  }, []);

  const { dataBestSeller, dataHotDeal, dataTopRated, loading } = useSelector(
    (state) => state.product
  );
  const { slug } = useParams();

  return (
    <div className="mt-[80px]">
      <div className="text-center">
        <Label className="text-[35px]">Top Products</Label>
      </div>
      <div className="flex justify-center items-center mt-[40px] border-b-2 relative ">
        {tabs.map((item) => (
          <span
            key={item.id}
            className={`text-gray5 text-center w-[220px] text-[16px] font-medium p-4 after:absolute  after:top-full after:flex after:hover:bg-primary after:hover:h-[2px] after:content-[''] after:w-[180px] after:h-[1px] 
             cursor-pointer ${
               item.id === tabClicked ? "after:bg-primary after:h-[2px]" : ""
             } `}
            onClick={() => {
              setTabClicked(item.id);
            }}
          >
            {item.title}
          </span>
        ))}
      </div>
      <div className="mt-[80px]">
        <div className={`BestSeller ${tabClicked === 1 ? "block" : "hidden"} `}>
          <div className=" grid grid-cols-4 gap-6 ">
            {dataBestSeller.length > 0 &&
              dataBestSeller.map((item) => (
                <div>
                  <ProductItem data={item}></ProductItem>
                </div>
              ))}
          </div>
        </div>
        <div className={`HotDeal ${tabClicked === 2 ? "block" : "hidden"} `}>
          <div className=" grid grid-cols-4 gap-6 ">
            {dataHotDeal.length > 0 &&
              dataHotDeal.map((item) => (
                <div>
                  <ProductItem data={item}></ProductItem>
                </div>
              ))}
          </div>
        </div>
        <div className={`TopRated ${tabClicked === 3 ? "block" : "hidden"} `}>
          <div className=" grid grid-cols-4 gap-6 ">
            {dataTopRated.length > 0 &&
              dataTopRated.map((item) => (
                <div>
                  <ProductItem data={item}></ProductItem>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProductPage;
