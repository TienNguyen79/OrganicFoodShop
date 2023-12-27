import React, { Fragment, useEffect, useState } from "react";
import Label from "../components/label/Label";
import { useDispatch, useSelector } from "react-redux";
import { proGetFeauture } from "../store/product/pro-slice";
import ProductItem from "../modules/product/ProductItem";
import ProQuickView from "../modules/product/ProQuickView";

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
  const [isModalOpen, setModalOpen] = useState(false);
  const [isClickClose, setIsClickClose] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setIsClickClose(true);
  };
  return (
    <Fragment>
      <ProQuickView
        open={isModalOpen ? "visible" : "invisible"}
        onClose={closeModal}
        isClickClose={isClickClose}
        className="top-[90px]"
        // data={datafake}
      />
      <div className="mt-[80px]">
        <div className="text-center">
          <Label className="text-[35px]">Featured Products</Label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 mb-8 md:mb-0 lg:mb-0">
          {dataFeauture.length > 0 &&
            dataFeauture.map((item) => (
              <div key={item.id}>
                <ProductItem openModal={openModal} data={item}></ProductItem>
              </div>
            ))}
        </div>
      </div>
    </Fragment>
  );
};

export default FeautureProPage;
