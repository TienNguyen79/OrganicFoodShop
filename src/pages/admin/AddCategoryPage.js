import React from "react";
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
import { CateAdd } from "../../store/category/cate-slice";

const schema = yup.object({
  // firstName: yup.string().required("FirstName is required"),
  name: yup.string().required("Name is required"),
});
const AddCategoryPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue: setValue1,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const dispatch = useDispatch();
  const { loadingCate } = useSelector((state) => state.category);
  const handleAddCategory = (values) => {
    if (!values.image || values.image === "") {
      toast.error("You must select a image for the Category");
    } else {
      dispatch(CateAdd(values));
      console.log(
        "🚀 ~ file: AddCategoryPage.js:25 ~ handleAddCategory ~ values:",
        values
      );
    }
  };
  return (
    <LayoutAdminAct
      label="Add Category"
      content="Add a new Category"
      content2="Manage My Categories"
    >
      <form action="" onSubmit={handleSubmit(handleAddCategory)}>
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
            PUBLISH CATEGORY
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
            ></ImageUpload>
          </BoxField>
        </BoxBigAdmin>
      </form>
    </LayoutAdminAct>
  );
};

export default AddCategoryPage;
