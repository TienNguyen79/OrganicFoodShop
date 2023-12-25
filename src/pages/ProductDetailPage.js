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
import parse from "html-react-parser";
import LoadingProQuickView from "../components/loading/LoadingProQuickView";
import LoadingProQuickView2 from "../components/loading/LoadingQuickView2";
import LoadingQuickViewTablet from "../components/loading/LoadingQuickViewTablet";
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
  useEffect(() => {
    window.scrollTo({ top: 90, behavior: "smooth" });
  }, []);

  const { dataProDetails, loadings } = useSelector((state) => state.product);

  const [isModalOpen, setModalOpen] = useState(false);
  const [isClickClose, setIsClickClose] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setIsClickClose(true);
  };
  //hien thị trong mobile
  const [shouldShowMobile, setShouldShowMobile] = useState(true);

  const [shouldShowTablet, setShouldShowTablet] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      // Kiểm tra kích thước màn hình mobile
      setShouldShowMobile(window.innerWidth < 768);
      setShouldShowTablet(window.innerWidth > 768 && window.innerWidth < 1024);
    };

    // Gọi hàm handleResize khi kích thước màn hình thay đổi
    window.addEventListener("resize", handleResize);

    // Gọi hàm handleResize ngay khi component được mount để kiểm tra kích thước ban đầu
    handleResize();

    // Xóa event listener khi component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Fragment>
      <ProQuickView
        open={isModalOpen ? "visible" : "invisible"}
        onClose={closeModal}
        isClickClose={isClickClose}
        // data={datafake}
      />
      <div className="pt-[60px] ">
        {loadings.details && !shouldShowMobile && !shouldShowTablet ? (
          <LoadingProQuickView></LoadingProQuickView>
        ) : loadings.details && shouldShowMobile ? (
          <LoadingProQuickView2></LoadingProQuickView2>
        ) : loadings.details && shouldShowTablet ? (
          <LoadingQuickViewTablet></LoadingQuickViewTablet>
        ) : (
          <ProDetailItem data={dataProDetails?.product}></ProDetailItem>
        )}
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center mt-5 md:mt-[80px] lg:mt-[80px] border-b-2 relative ">
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
      <div className="mt-8  ">
        <ProDescMore
          data={dataProDetails?.product}
          isHidden={`${tabClicked === 1 ? "block" : "hidden"} `}
        >
          {parse(dataProDetails?.product?.description || "")}
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

      <div className="mt-[80px] mb-10 lg:mb-0 md:mb-0">
        <div className="text-center">
          <Label className="text-[35px]">Related Products</Label>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-3 gap-x-4 md:gap-x-6 lg:gap-x-6 mt-8">
          {dataProDetails?.sameProducts?.length > 0 &&
            dataProDetails.sameProducts.slice(0, 4).map((item, index) => (
              <div
                key={index}
                onClick={() => window.scrollTo({ top: 90, behavior: "smooth" })}
              >
                <ProductItem openModal={openModal} data={item}></ProductItem>
              </div>
            ))}
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDetailPage;
