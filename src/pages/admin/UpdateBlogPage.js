import React, { useEffect, useMemo, useState } from "react";
import LayoutAdminAct from "../../layout/LayoutAdminAct";
import Button from "../../components/button/Button";
import BoxBigAdmin from "../../modules/admin/BoxBigAdmin";
import BoxField from "../../modules/user/partsSetting/BoxField";
import LabelField from "../../modules/user/partsSetting/LabelField";
import Input from "../../components/input/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import ImageUpload from "../../components/image/ImageUpload";
import TextArea from "../../components/input/TextArea";
import DropdownInit from "../../components/dropdown/init/DropdownInit";
import SelectInit from "../../components/dropdown/init/SelectInit";
import ListInit from "../../components/dropdown/init/ListInit";
import { cateGetdataAll } from "../../store/category/cate-slice";
import OptionsInit from "../../components/dropdown/init/OptionsInit";
import GroupJusBeween from "../../components/common/GroupJusBeween";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  blogAdminAdd,
  blogAdminUpdate,
  blogGetWithParam,
} from "../../store/blog/blog-slice";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getToken } from "../../utils/auth";
const UpdateBlogPage = () => {
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
    getValues,
  } = useForm({
    // resolver: yupResolver(schema),
    mode: "onChange",
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cateGetdataAll());
  }, []);

  const [searchCate, setSearchCate] = useState("");
  const [idCate, setIdCate] = useState("");
  const [content, setContent] = useState("");
  const { dataCate } = useSelector((state) => state.category);
  const { slug } = useParams();

  useEffect(() => {
    dispatch(blogGetWithParam(slug));
  }, [dispatch, slug]);

  const { dataBlogWithParam, loading } = useSelector((state) => state.blog);
  console.log(
    "🚀 ~ file: UpdateBlogPage.js:52 ~ UpdateBlogPage ~ dataBlogWithParam:",
    dataBlogWithParam
  );

  useEffect(() => {
    setValue1("title", dataBlogWithParam?.title);
    setIdCate(dataBlogWithParam?.category_id);
    setSearchCate(dataBlogWithParam?.category?.name);
    setContent(dataBlogWithParam?.content && dataBlogWithParam?.content[0]);
    setValue1("image", dataBlogWithParam?.image);
  }, [
    dataBlogWithParam?.category?.name,
    dataBlogWithParam?.category_id,
    dataBlogWithParam?.content,
    dataBlogWithParam.id,
    dataBlogWithParam?.image,
    dataBlogWithParam?.title,
    setValue1,
  ]);

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

  const handleUpdateBlog = (values) => {
    let dataBlog = {
      id: slug,
      title: values.title,
      category_id: idCate,
      image: getValues("image"),
      content: [content],
      page: localStorage.getItem("pageAdmin"),
    };

    if (dataBlog.title === "") {
      toast.error("Title is Require");
    } else if (dataBlog.image === "") {
      toast.error("Image is Require");
    } else if (dataBlog.content === "") {
      toast.error("Content is Require");
    } else if (dataBlog.category_id === "") {
      toast.error("Category is Require");
    } else {
      dispatch(blogAdminUpdate(dataBlog));
      console.log(
        "🚀 ~ file: UpdateBlogPage.js:122 ~ handleUpdateBlog ~ values:",
        dataBlog
      );
    }

    console.log(
      "🚀 ~ file: AddBlogPage.js:61 ~ handleUpdateBlog ~ dataBlog:",
      dataBlog
    );
  };
  return (
    <LayoutAdminAct
      label={`Update Blog - ${dataBlogWithParam?.title}`}
      content="Update a  Blog"
      content2="Manage My Blogs"
    >
      <form action="" onSubmit={handleSubmit(handleUpdateBlog)}>
        <div className="flex gap-x-4 justify-end py-5">
          <Button
            kind="discard"
            href="/admin/blog/blog_list"
            className="hover:bg-danger hover:text-white uppercase transition-all"
          >
            Discard
          </Button>
          <Button
            kind="ghost"
            type="submit"
            className="hover:bg-greenGray1 hover:text-primary uppercase transition-all w-[175px]"
            isLoading={loading}
          >
            UPDATE BLOG
          </Button>
        </div>
        <BoxBigAdmin>
          <BoxField className="flex-1">
            <LabelField label="Title*"></LabelField>
            <TextArea
              control={control}
              name="title"
              placeholder="Enter Title..."
              error={errors?.name?.message}
            ></TextArea>
          </BoxField>
          <GroupJusBeween className="gap-x-10 !items-start">
            <BoxField className="flex-1 mt-5">
              <LabelField label="Image*"></LabelField>
              <ImageUpload
                className="w-[400px]"
                name="image"
                onChange={(name, data) => setValue1("image", data.url)}
                setValue1={setValue1}
                getValues1={getValues("image")}
              ></ImageUpload>
            </BoxField>
            <BoxField className="flex-[3] mt-5">
              <LabelField label="Category*"></LabelField>

              <div className="">
                <DropdownInit>
                  <SelectInit
                    className="bg-white w-full "
                    placeholder={`${searchCate || "Search for Category"}  `}
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
          </GroupJusBeween>
          <BoxField className="entry-content mt-5">
            <LabelField label="Content*"></LabelField>
            <div className="mt-4">
              <ReactQuill
                modules={modules}
                theme="snow"
                value={content}
                onChange={setContent}
                className="w-full max-w-[350px]  md:max-w-[[60px] lg:max-w-full "
                placeholder="Enter the my content..."
              />
            </div>
          </BoxField>
        </BoxBigAdmin>
      </form>
    </LayoutAdminAct>
  );
};

export default UpdateBlogPage;
