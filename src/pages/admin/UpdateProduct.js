import React, { useEffect, useMemo, useState } from "react";
import LayoutAdminAct from "../../layout/LayoutAdminAct";
import Button from "../../components/button/Button";
import BoxBigAdmin from "../../modules/admin/BoxBigAdmin";
import BoxField from "../../modules/user/partsSetting/BoxField";
import { useForm } from "react-hook-form";
import LabelField from "../../modules/user/partsSetting/LabelField";
import Input from "../../components/input/Input";
import GroupJusBeween from "../../components/common/GroupJusBeween";
import { useDispatch, useSelector } from "react-redux";
import { cateGetdataAll } from "../../store/category/cate-slice";
import DropdownInit from "../../components/dropdown/init/DropdownInit";
import SelectInit from "../../components/dropdown/init/SelectInit";
import ListInit from "../../components/dropdown/init/ListInit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import OptionsInit from "../../components/dropdown/init/OptionsInit";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageUpload from "../../components/image/ImageUpload";
import {
  ProAdminAdd,
  ProAdminUpdate,
  proGetDetails,
} from "../../store/product/pro-slice";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { getToken } from "../../utils/auth";
const schema = yup.object({
  // firstName: yup.string().required("FirstName is required"),
  name: yup.string().required("Name is required"),
  price: yup
    .number()
    .max(1000, "Maximum price is 1000$")
    .typeError("Price must be a valid number")
    .required("Price is required"),
  // quantity: yup
  //   .number()
  //   .typeError("Quantity must be a valid number")
  //   .positive("Quantity must be greater than 0")
  //   .required("Price is required"),
  weight: yup
    .number()
    .typeError("Weight must be a valid number")
    .required("Weight is required"),
  type: yup.string().required("Type is required"),

  // .min(5, "Please enter at least 8 characters"),
});
const UpdateProduct = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user && user.permission !== 2) {
      navigate("/admin/login");
    }
  }, [navigate, user]);
  useEffect(() => {
    if (!getToken()) {
      navigate("/admin/login");
    }
  }, []);

  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
    setValue: setValue1,
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cateGetdataAll());
  }, []);
  const { dataCate } = useSelector((state) => state.category);
  const [searchCate, setSearchCate] = useState("");
  const [idCate, setIdCate] = useState("");
  const [rate, setRate] = useState("");
  const [content, setContent] = useState("");
  const { slug } = useParams();
  const [linkImgPri, setLinkImgPri] = useState("");
  console.log(
    "🚀 ~ file: UpdateProduct.js:69 ~ UpdateProduct ~ linkImgPri:",
    linkImgPri
  );
  useEffect(() => {
    dispatch(proGetDetails(slug));
  }, []);
  const { dataProDetails, loading } = useSelector((state) => state.product);

  //spread
  const { product: productDetails } = dataProDetails;
  console.log(
    "🚀 ~ file: UpdateProduct.js:79 ~ UpdateProduct ~ productDetails:",
    productDetails
  );

  useEffect(() => {
    setValue1("name", productDetails?.name);
    setValue1("quantity", productDetails?.quantity);
    setIdCate(productDetails?.category?.id);
    setSearchCate(productDetails?.category?.name);
    setContent(productDetails?.description);
    setValue1("price", productDetails?.price);
    setValue1("discount", productDetails?.discount);
    setValue1("weight", productDetails?.weight);
    setValue1("type", productDetails?.type);
    if (productDetails?.imageUrl) {
      setValue1("imgPrimary", productDetails?.imageUrl);
    }
    if (productDetails?.thumbnails[0]?.imageUrl) {
      setValue1("thumb1", productDetails?.thumbnails[0]?.imageUrl);
    }
    if (productDetails?.thumbnails[1]?.imageUrl) {
      setValue1("thumb2", productDetails?.thumbnails[1]?.imageUrl);
    }

    if (productDetails?.thumbnails[2]?.imageUrl) {
      setValue1("thumb3", productDetails?.thumbnails[2]?.imageUrl);
    }

    if (productDetails?.thumbnails[3]?.imageUrl) {
      setValue1("thumb4", productDetails?.thumbnails[3]?.imageUrl);
    }

    if (productDetails?.thumbnails[4]?.imageUrl) {
      setValue1("thumb5", productDetails?.thumbnails[4]?.imageUrl);
    }

    if (productDetails?.thumbnails[5]?.imageUrl) {
      setValue1("thumb6", productDetails?.thumbnails[5]?.imageUrl);
    }

    if (productDetails?.thumbnails[6]?.imageUrl) {
      setValue1("thumb7", productDetails?.thumbnails[6]?.imageUrl);
    }

    if (productDetails?.thumbnails[7]?.imageUrl) {
      setValue1("thumb8", productDetails?.thumbnails[7]?.imageUrl);
    }
  }, [
    getValues,
    productDetails?.category?.id,
    productDetails?.category?.name,
    productDetails?.description,
    productDetails?.discount,
    productDetails?.imageUrl,
    productDetails?.name,
    productDetails?.price,
    productDetails?.quantity,
    productDetails?.thumbnails,
    productDetails?.type,
    productDetails?.weight,
    setValue1,
  ]);

  const handleUpdateProduct = (values) => {
    const thumbnails = [getValues("imgPrimary")];

    if (getValues("thumb1")) {
      thumbnails.push(getValues("thumb1"));
    }

    if (getValues("thumb2")) {
      thumbnails.push(getValues("thumb2"));
    }

    if (getValues("thumb3")) {
      thumbnails.push(getValues("thumb3"));
    }

    if (getValues("thumb4")) {
      thumbnails.push(getValues("thumb4"));
    }

    if (getValues("thumb5")) {
      thumbnails.push(getValues("thumb5"));
    }

    if (getValues("thumb6")) {
      thumbnails.push(getValues("thumb6"));
    }

    if (getValues("thumb7")) {
      thumbnails.push(getValues("thumb7"));
    }

    if (getValues("thumb8")) {
      thumbnails.push(getValues("thumb8"));
    }

    let data = {
      name: values.name,
      category_id: idCate,
      imageUrl: getValues("imgPrimary"),
      quantity: values.quantity,
      type: values.type,
      weight: values.weight,
      description: content,
      discount: values.discount,
      price: values.price,
      // average_rating: rate,
      thumbnails: thumbnails,
    };

    if (searchCate === "") {
      toast.error("Category is required");
    } else if (values.quantity === "") {
      toast.error("Quantity is required");
    } else if (content === "") {
      toast.error("Description is required");
    } else {
      dispatch(
        ProAdminUpdate({
          id: slug,
          data: data,
          page: localStorage.getItem("pageAdmin"),
        })
      );
      console.log(
        "🚀 ~ file: AddProductPage.js:49 ~ handleUpdateProduct ~ data:",
        data
      );
    }
  };
  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image"],
      ],
    }),
    []
  );

  return (
    <LayoutAdminAct
      label={`Update Product - ${productDetails?.name} `}
      content="Manage My Products"
    >
      <form action="" onSubmit={handleSubmit(handleUpdateProduct)}>
        <div className="flex gap-x-4 justify-end py-5">
          <Button
            kind="discard"
            href="/admin/products/product_list"
            className="hover:bg-danger hover:text-white uppercase transition-all"
          >
            Discard
          </Button>
          <Button
            kind="ghost"
            type="submit"
            className="hover:bg-greenGray1 hover:text-primary uppercase transition-all w-[208px]"
            isLoading={loading}
          >
            UPDATE PRODUCT
          </Button>
        </div>
        <div>
          <div className="grid grid-cols-3 gap-x-3">
            <div className="col-span-2 ">
              <BoxBigAdmin className="rounded-md flex flex-col gap-y-4">
                <h1 className="text-gray8 font-medium mb-4">
                  Product Infomation
                </h1>

                <BoxField>
                  <LabelField label="Name*"></LabelField>
                  <Input
                    control={control}
                    name="name"
                    placeholder="Enter Name..."
                    error={errors?.name?.message}
                  ></Input>
                </BoxField>
                <GroupJusBeween className="gap-x-8">
                  <BoxField className="flex-1">
                    <LabelField label="Quantity*"></LabelField>
                    <Input
                      control={control}
                      name="quantity"
                      type="number"
                      placeholder="Enter..."
                      min="1"
                      error={errors?.quantity?.message}
                      className="mb-1"
                    ></Input>
                  </BoxField>
                  <BoxField className="flex-[3] mt-5">
                    <LabelField label="Category*"></LabelField>

                    <div className="">
                      <DropdownInit>
                        <SelectInit
                          className="bg-white w-full "
                          placeholder={`${
                            searchCate || "Search for Category"
                          }  `}
                        ></SelectInit>
                        <ListInit>
                          <div className="flex justify-center"></div>
                          {dataCate.length > 0 &&
                            dataCate.map((item) => (
                              <OptionsInit
                                key={item.id}
                                className=" hover:bg-[#e6f7d9] text-gray5 font-medium"
                                onClick={() => {
                                  setSearchCate(item?.name);
                                  setIdCate(item?.id);
                                }}
                              >
                                {item?.name}
                              </OptionsInit>
                            ))}
                        </ListInit>
                      </DropdownInit>
                    </div>
                  </BoxField>

                  {/* <BoxField className="flex-1 mt-5">
                    <LabelField label="Rating"></LabelField>

                    <div>
                      <DropdownInit>
                        <SelectInit
                          placeholder={`${rate || "Rating"} `}
                        ></SelectInit>
                        <ListInit>
                          {Array(5)
                            .fill(0)
                            .map((item, index) => (
                              <OptionsInit
                                key={index}
                                className=" hover:bg-[#e6f7d9] text-gray5 font-medium"
                                onClick={() => setRate(index + 1)}
                              >
                                {index + 1}
                              </OptionsInit>
                            ))}
                        </ListInit>
                      </DropdownInit>
                    </div>
                  </BoxField> */}
                </GroupJusBeween>

                <BoxField className="entry-content">
                  <LabelField label="Description*"></LabelField>
                  <div className="mt-4">
                    <ReactQuill
                      modules={modules}
                      theme="snow"
                      value={content}
                      onChange={setContent}
                      className="w-full max-w-[350px]  md:max-w-[[60px] lg:max-w-full "
                    />
                  </div>
                </BoxField>
              </BoxBigAdmin>
            </div>
            <div className="col-span-1">
              <BoxBigAdmin className="flex flex-col gap-y-3">
                <h1 className="text-gray8 font-medium mb-4">Pricing</h1>
                <BoxField>
                  <LabelField label="Price*"></LabelField>
                  <Input
                    control={control}
                    name="price"
                    placeholder="Enter Price..."
                    error={errors?.price?.message}
                  ></Input>
                </BoxField>
                <BoxField className="">
                  <LabelField label="Discount"></LabelField>
                  <Input
                    control={control}
                    name="discount"
                    type="number"
                    min="0"
                    max="100"
                    placeholder="Enter Disount..."
                    error={errors?.discount?.message}
                  ></Input>
                </BoxField>
              </BoxBigAdmin>

              <BoxBigAdmin className="flex flex-col gap-y-3 mt-3">
                <h1 className="text-gray8 font-medium mb-4">Variants</h1>
                <BoxField>
                  <LabelField label="Weight*"></LabelField>
                  <Input
                    control={control}
                    name="weight"
                    placeholder="Enter Weight..."
                    error={errors?.weight?.message}
                  ></Input>
                </BoxField>
                <BoxField className="">
                  <LabelField label="Type*"></LabelField>
                  <Input
                    control={control}
                    name="type"
                    placeholder="Enter Type..."
                    error={errors?.type?.message}
                  ></Input>
                </BoxField>
              </BoxBigAdmin>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <BoxBigAdmin className="flex items-center  gap-x-3">
            <BoxField className="flex-1">
              <LabelField label="Image Primary*"></LabelField>
              <ImageUpload
                name="imgPrimary"
                className="w-full h-[100px]"
                onChange={(name, data) => setValue1("imgPrimary", data.url)}
                setValue1={setValue1}
                getValues1={getValues("imgPrimary")}
              ></ImageUpload>
            </BoxField>
            <BoxField className="flex-1 ">
              <LabelField label="Thumbnails*"></LabelField>
              <div className="grid grid-cols-4 gap-y-5 place-items-center pt-12">
                <ImageUpload
                  name="thumb1"
                  onChange={(name, data) => setValue1("thumb1", data.url)}
                  setValue1={setValue1}
                  getValues1={getValues("thumb1")}
                  className="w-[60px] h-[60px] "
                ></ImageUpload>
                <ImageUpload
                  name="thumb2"
                  onChange={(name, data) => setValue1("thumb2", data.url)}
                  setValue1={setValue1}
                  getValues1={getValues("thumb2")}
                  className="w-[60px] h-[60px] "
                ></ImageUpload>
                <ImageUpload
                  name="thumb3"
                  onChange={(name, data) => setValue1("thumb3", data.url)}
                  setValue1={setValue1}
                  getValues1={getValues("thumb3")}
                  className="w-[60px] h-[60px] "
                ></ImageUpload>
                <ImageUpload
                  name="thumb4"
                  onChange={(name, data) => setValue1("thumb4", data.url)}
                  setValue1={setValue1}
                  getValues1={getValues("thumb4")}
                  className="w-[60px] h-[60px] "
                ></ImageUpload>
                <ImageUpload
                  name="thumb5"
                  onChange={(name, data) => setValue1("thumb5", data.url)}
                  setValue1={setValue1}
                  getValues1={getValues("thumb5")}
                  className="w-[60px] h-[60px] "
                ></ImageUpload>
                <ImageUpload
                  name="thumb6"
                  onChange={(name, data) => setValue1("thumb6", data.url)}
                  setValue1={setValue1}
                  getValues1={getValues("thumb6")}
                  className="w-[60px] h-[60px] "
                ></ImageUpload>
                <ImageUpload
                  name="thumb7"
                  onChange={(name, data) => setValue1("thumb7", data.url)}
                  setValue1={setValue1}
                  getValues1={getValues("thumb7")}
                  className="w-[60px] h-[60px] "
                ></ImageUpload>
                <ImageUpload
                  name="thumb8"
                  onChange={(name, data) => setValue1("thumb8", data.url)}
                  setValue1={setValue1}
                  getValues1={getValues("thumb8")}
                  className="w-[60px] h-[60px] "
                ></ImageUpload>
              </div>
            </BoxField>
          </BoxBigAdmin>
        </div>
      </form>
    </LayoutAdminAct>
  );
};

export default UpdateProduct;
