import React, { useEffect } from "react";
import Label from "../components/label/Label";
import { useDispatch, useSelector } from "react-redux";
import { proGetFeauture } from "../store/product/pro-slice";
import ProductItem from "../modules/product/ProductItem";

const FeautureProPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(proGetFeauture());
  }, []);
  const { dataFeauture } = useSelector((state) => state.product);
  console.log(
    "🚀 ~ file: FeautureProPage.js:12 ~ FeautureProPage ~ dataFeauture:",
    dataFeauture
  );
  return (
    <div className="mt-[80px]">
      <div className="text-center">
        <Label className="text-[35px]">Featured Products</Label>
      </div>

      <div className="grid grid-cols-4 gap-6 mt-8">
        {dataFeauture.length > 0 &&
          dataFeauture.map((item) => (
            <div key={item.id}>
              <ProductItem data={item}></ProductItem>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FeautureProPage;
