import React, { Fragment, useEffect, useState } from "react";
import LayoutAdminAct from "../../layout/LayoutAdminAct";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { proGetDetails } from "../../store/product/pro-slice";
import ProDetailItem from "../../modules/product/ProDetailItem";
import ProDescMore from "../../modules/product/partsDetail/ProDescMore";
import ProAdditionalInfo from "../../modules/product/partsDetail/ProAdditionalInfo";
import ProFeedback from "../../modules/product/partsDetail/ProFeedback";
import AdminProDetailsItem from "../../modules/admin/pro/AdminProDetailsItem";
import BoxBigAdmin from "../../modules/admin/BoxBigAdmin";
import LabelRedirect from "../../components/label/LabelRedirect";
import parse from "html-react-parser";
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
const AdProDetailPage = () => {
  const [tabClicked, setTabClicked] = useState(1);
  const [selectedThumb, setSelectedThumb] = useState(1);
  const dispatch = useDispatch();
  const { slug } = useParams();

  useEffect(() => {
    dispatch(proGetDetails(slug));
  }, [slug]);

  const { dataProDetails } = useSelector((state) => state.product);
  return (
    <LayoutAdminAct label={`Product Details `} content="Manage My Products">
      <div className="flex justify-end py-2">
        <LabelRedirect
          title="Back List"
          className="font-semibold hover:opacity-80"
          icon={""}
          url="/admin/products/product_list"
        ></LabelRedirect>
      </div>
      <BoxBigAdmin className="rounded-md">
        <div className="pt-[60px] ">
          <AdminProDetailsItem
            data={dataProDetails?.product}
          ></AdminProDetailsItem>
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
      </BoxBigAdmin>
    </LayoutAdminAct>
  );
};

export default AdProDetailPage;
