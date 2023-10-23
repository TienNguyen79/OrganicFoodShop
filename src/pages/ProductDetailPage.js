import React, { Fragment, useState } from "react";
import ProDetailItem from "../modules/product/ProDetailItem";
import ProDescMore from "../modules/product/partsDetail/ProDescMore";
import ProFeauture from "../modules/product/partsDetail/ProFeauture";
import ProAdditionalInfo from "../modules/product/partsDetail/ProAdditionalInfo";
import ProFeedback from "../modules/product/partsDetail/ProFeedback";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { proGetDetails } from "../store/product/pro-slice";
import Label from "../components/label/Label";
import ProductItem from "../modules/product/ProductItem";
import ProQuickView from "../modules/product/ProQuickView";
const tabs = [
  {
    id: 1,
    title: "Descriptions",
  },
  {
    id: 2,
    title: "Additional Information",
  },
  {
    id: 3,
    title: "Feedback",
  },
];

const ProductDetailPage = () => {
  const [tabClicked, setTabClicked] = useState(1);
  const [selectedThumb, setSelectedThumb] = useState(1);
  const dispatch = useDispatch();
  const { slug } = useParams();

  useEffect(() => {
    dispatch(proGetDetails(slug));
  }, [slug]);

  const { dataProDetails } = useSelector((state) => state.product);

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
        // data={datafake}
      />
      <div className="pt-[60px] ">
        <ProDetailItem data={dataProDetails?.product}></ProDetailItem>
      </div>
      <div className="flex justify-center items-center mt-[80px] border-b-2 relative ">
        {tabs.map((item) => (
          <span
            key={item.id}
            className={`text-gray5 text-center w-[220px] text-[16px] font-medium p-4 after:absolute  after:top-full after:flex after:hover:bg-primary after:hover:h-[2px] after:content-[''] after:w-[180px] after:h-[1px] 
             cursor-pointer ${
               item.id === selectedThumb
                 ? "after:bg-primary after:h-[2px]"
                 : "after:bg-gray-200"
             }`}
            onClick={() => {
              setTabClicked(item.id);
              setSelectedThumb(item.id);
            }}
          >
            {item.title}
          </span>
        ))}
      </div>
      <div className="mt-8 ">
        <ProDescMore
          data={dataProDetails?.product}
          isHidden={`${tabClicked === 1 ? "block" : "hidden"} `}
        >
          {dataProDetails?.product?.description}
        </ProDescMore>
        <ProAdditionalInfo
          data={dataProDetails?.product}
          isHidden={`${tabClicked === 2 ? "block" : "hidden"} `}
        ></ProAdditionalInfo>
        <ProFeedback
          data={dataProDetails?.product}
          isHidden={`${tabClicked === 3 ? "block" : "hidden"} `}
        ></ProFeedback>
      </div>

      <div className="mt-[80px]">
        <div className="text-center">
          <Label className="text-[35px]">Related Products</Label>
        </div>
        <div className="grid grid-cols-4 gap-x-6 mt-8">
          {dataProDetails?.sameProducts?.length > 0 &&
            dataProDetails.sameProducts.slice(0, 4).map((item, index) => (
              <div key={index}>
                <ProductItem openModal={openModal} data={item}></ProductItem>
              </div>
            ))}
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDetailPage;
