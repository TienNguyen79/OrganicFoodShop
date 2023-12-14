import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cateGetdataAll } from "../../store/category/cate-slice";
import { proGetAll } from "../../store/product/pro-slice";
import Button from "../../components/button/Button";
import IconFilter from "../../components/Icons/IconFilter";
import IconSearch from "../../components/Icons/IconSearch";
import CateTitle from "../category/parts/CateTitle";
import BlogImage from "./parts/BlogImage";
import BlogRencentlyItem from "./BlogRencentlyItem";
import { useState } from "react";
import { blogGetAll } from "../../store/blog/blog-slice";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Input from "../../components/input/Input";

const BlogFilterItem = ({ result, setContentBlog }) => {
  const { control } = useForm();
  const dispatch = useDispatch();
  const [dataRencentlyBlog, setDataRencentlyBlog] = useState([]);

  // dispatch để dữ liệu trả về
  useEffect(() => {
    dispatch(cateGetdataAll());
    dispatch(proGetAll());
    dispatch(blogGetAll(1));
  }, []);

  const { dataBlogAll } = useSelector((state) => state.blog);

  useEffect(() => {
    let data = [];
    if (dataBlogAll?.data?.length > 0) {
      dataBlogAll?.data?.slice(0, 4)?.map((item) => {
        data.push(item);
      });
      setDataRencentlyBlog(data);
    }
  }, []);

  //lấy được data đã trả về
  const { dataCate } = useSelector((state) => state.category);

  //sắp xếp cate theo thứ tự giảm dần
  const [sortedDataCate, setSortedDataCate] = useState([]);

  useEffect(() => {
    if (dataCate) {
      const sortedData = [...dataCate].sort(
        (a, b) => b.gross_product - a.gross_product
      );
      setSortedDataCate(sortedData);
    }
  }, [dataCate]);

  return (
    <div>
      <div>
        <Button className="!py-[10px] mb-6" kind="primary">
          Filter
          <span className="inline-block ml-2">
            <IconFilter />
          </span>
        </Button>

        <div>
          <Input
            name="search"
            placeholder="Search for blogs..."
            control={control}
            kind="search"
            setContentBlog={setContentBlog}
            // className="w-[400px] py-3 px-4 border font-medium pl-12  rounded-md placeholder:text-text4 dark:placeholder:text-text2 dark:text-white text-text1 "
          >
            <IconSearch></IconSearch>
          </Input>
        </div>

        <div className="mt-8">
          <span className="text-gray9 text-[20px] font-medium block ">
            Top Categories
          </span>
          {sortedDataCate.length > 0 &&
            sortedDataCate.map((item, index) => (
              <div
                key={item.id}
                className="flex items-center justify-between mt-4"
              >
                <CateTitle
                  className="text-[15px] font-normal group-hover:text-primary"
                  title={item?.name}
                ></CateTitle>

                <span className="ml-1 inline-block text-gray5 text-[14px] font-normal group-hover:text-primary">
                  ({item?.gross_product})
                </span>
              </div>
            ))}
        </div>

        <div className="mt-8">
          <span className="text-gray9 text-[20px] font-medium block ">
            Our Gallery
          </span>
          <div className="grid grid-cols-4 gap-y-2 mt-4 ">
            {result?.data?.length > 0 &&
              result.data
                .slice(0, 8)
                .map((item) => (
                  <BlogImage
                    key={item.id}
                    linkUrl={item.image}
                    className="w-[70px] h-[70px] rounded-lg"
                  ></BlogImage>
                ))}
          </div>
        </div>

        <div className="mt-8">
          <span className="text-gray9 text-[20px] font-medium block ">
            Recently Added
          </span>
          {dataRencentlyBlog?.length > 0 &&
            dataRencentlyBlog?.slice(0, 4)?.map((item) => (
              <Link key={item?.id} to={`/blog/${item?.id}`}>
                <BlogRencentlyItem item={item}></BlogRencentlyItem>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BlogFilterItem;
