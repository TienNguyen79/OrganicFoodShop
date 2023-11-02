import React, { useEffect } from "react";
import Button from "../components/button/Button";
import IconFilter from "../components/Icons/IconFilter";
import IconSearch from "../components/Icons/IconSearch";
import DropdownInit from "../components/dropdown/init/DropdownInit";
import ListInit from "../components/dropdown/init/ListInit";
import OptionsInit from "../components/dropdown/init/OptionsInit";
import SelectInit from "../components/dropdown/init/SelectInit";
import BlogItem from "../modules/blog/BlogItem";
import BlogRencentlyItem from "../modules/blog/BlogRencentlyItem";
import BlogImage from "../modules/blog/parts/BlogImage";
import CateTitle from "../modules/category/parts/CateTitle";
import { useDispatch, useSelector } from "react-redux";
import { cateGetdataAll } from "../store/category/cate-slice";
import { proGetAll } from "../store/product/pro-slice";
import BlogFilterItem from "../modules/blog/BlogFilterItem";
import { blogGetAll } from "../store/blog/blog-slice";

const BlogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(blogGetAll());
  }, []);
  const { dataBlogAll } = useSelector((state) => state.blog);
  console.log(
    "🚀 ~ file: BlogPage.js:26 ~ BlogPage ~ dataBlogAll:",
    dataBlogAll
  );
  return (
    <div className="grid grid-cols-3 gap-x-6 mt-8 my-10">
      <div className="col-span-1 mt-5">
        <BlogFilterItem result={dataBlogAll}></BlogFilterItem>
      </div>
      <div className="col-span-2">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-baseline gap-x-2 ">
            <span className="inline-block text-gray5 text-[16px] font-normal w-full ">
              Sort by:
            </span>
            <div className="mt-[10px]">
              <DropdownInit>
                <SelectInit placeholder="Sort"></SelectInit>
                <ListInit>
                  <OptionsInit>ok</OptionsInit>
                  <OptionsInit>ok</OptionsInit>
                  <OptionsInit>ok</OptionsInit>
                  <OptionsInit>ok</OptionsInit>
                </ListInit>
              </DropdownInit>
            </div>
          </div>
          <div className="flex items-center gap-x-2 pr-[61px]">
            <span className="block text-gray9 text-[16px] font-semibold">
              {dataBlogAll?.total}
            </span>
            <span className="block text-gray6 text-[16px] font-normal ">
              Results Found
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 px-[60px]">
          {dataBlogAll?.data?.length > 0 &&
            dataBlogAll?.data.map((item) => (
              <BlogItem
                key={item.id}
                data={item}
                className="shadow-lg rounded-lg"
              ></BlogItem>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
