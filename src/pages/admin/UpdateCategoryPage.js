import React, { useEffect } from "react";
import LayoutAdminAct from "../../layout/LayoutAdminAct";
import BoxBigAdmin from "../../modules/admin/BoxBigAdmin";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../components/button/Button";
import BoxField from "../../modules/user/partsSetting/BoxField";
import LabelField from "../../modules/user/partsSetting/LabelField";
import Input from "../../components/input/Input";
import ImageUpload from "../../components/image/ImageUpload";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  CateAdd,
  CateGetDetails,
  CateUpdate,
} from "../../store/category/cate-slice";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { getToken } from "../../utils/auth";

const schema = yup.object({
  // firstName: yup.string().required("FirstName is required"),
  name: yup.string().required("Name is required"),
});
const UpdateCategoryPage = () => {
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
    handleSubmit,
    formState: { errors },
    setValue: setValue1,
    getValues: getValues1,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const dispatch = useDispatch();

  const { slug } = useParams();
  const { dataCate, loadingCate } = useSelector((state) => state.category);
  console.log(
    "🚀 ~ file: UpdateCategoryPage.js:41 ~ UpdateCategoryPage ~ dataCate:",
    dataCate
  );
  const [nameImg, setNameImg] = useState("");

  useEffect(() => {
    dispatch(CateGetDetails(slug));
  }, [dispatch, slug]);

  const handleUpdateCate = (values) => {
    if (!values.image || values.image === "") {
      toast.error("You must select a image for the Category");
    } else {
      dispatch(CateUpdate({ id: slug, values: values }));
      console.log(
        "🚀 ~ file: AddCategoryPage.js:25 ~ handleUpdateCate ~ values:",
        values
      );
    }
  };
  useEffect(() => {
    if (dataCate?.name) {
      setValue1("name", dataCate?.name);
    }

    if (dataCate?.image) {
      setValue1("image", dataCate?.image);
      setNameImg(getValues1("image"));
    }
  }, [dataCate, getValues1, setValue1]);

  return (
    <LayoutAdminAct
      label={`Update Category - ${dataCate?.name}`}
      content="Manage My Categories"
    >
      <form action="" onSubmit={handleSubmit(handleUpdateCate)}>
        <div className="flex gap-x-4 justify-end py-5">
          <Button
            kind="discard"
            href="/admin/categories"
            className="hover:bg-danger hover:text-white uppercase transition-all"
          >
            Discard
          </Button>
          <Button
            kind="ghost"
            type="submit"
            className="hover:bg-greenGray1 hover:text-primary uppercase transition-all w-[218px]"
            isLoading={loadingCate}
          >
            UPDATE CATEGORY
          </Button>
        </div>
        <BoxBigAdmin>
          <BoxField className="flex-1">
            <LabelField label="Name"></LabelField>
            <Input
              control={control}
              name="name"
              placeholder="Enter Name..."
              error={errors?.name?.message}
            ></Input>
          </BoxField>
          <BoxField className="flex-1 mt-5">
            <LabelField label="Image"></LabelField>
            <ImageUpload
              className="w-[400px]"
              name="image"
              onChange={(name, data) => setValue1("image", data.url)}
              setValue1={setValue1}
              getValues1={nameImg}
            ></ImageUpload>
          </BoxField>
        </BoxBigAdmin>
      </form>
    </LayoutAdminAct>
  );
};

export default UpdateCategoryPage;
