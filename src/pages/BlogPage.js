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
import { blogComment, blogGetAll, blogSearch } from "../store/blog/blog-slice";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import IconPagiNext from "../components/Icons/IconPagiNext";
import IconPagiPrev from "../components/Icons/IconPagiPrev";
import LoadingBlog from "../components/loading/LoadingBlog";
import usePagination from "../hooks/usePagination";
const itemsPerPage = 10;
const BlogPage = () => {
  //Phân trang
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [nextPage, setNextPage] = useState(1);

  const dispatch = useDispatch();
  const [contentBlog, setContentBlog] = useState("");
  // useEffect(() => {
  //   dispatch(blogGetAll(nextPage));
  // }, [nextPage]);

  const { dataBlogAll, loading } = useSelector((state) => state.blog);
  console.log("🚀 ~ file: BlogPage.js:35 ~ BlogPage ~ loading:", loading);

  //xử lí phân trang
  useEffect(() => {
    if (!dataBlogAll.data || !dataBlogAll.total) return;
    setPageCount(Math.ceil(dataBlogAll.total / itemsPerPage)); //tổng count-(tổng tất cả số trang) làm tròn lên
  }, [dataBlogAll.data, itemOffset]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % dataBlogAll.total;
    setItemOffset(newOffset); //theo dõi vị trí bắt đầu của mục dữ liệu trên trang hiện tại khi bạn thực hiện phân trang hoặc điều hướng qua các trang dữ liệu.

    setNextPage(event.selected + 1);
  };

  const {
    handlePageClick: handlePageClick1,
    pageCount: pageCount1,
    nextPage: nextPage1,
  } = usePagination(dataBlogAll, dataBlogAll?.per_page);

  useEffect(() => {
    if (contentBlog === "") {
      dispatch(blogGetAll(nextPage));
    } else {
      dispatch(blogSearch({ content: contentBlog, page: nextPage1 }));
    }
  }, [contentBlog, dispatch, nextPage, nextPage1]);
  return (
    <div className="grid grid-cols-3 gap-x-6 mt-8 my-10">
      <div className="col-span-1 mt-5">
        <BlogFilterItem
          result={dataBlogAll}
          setContentBlog={setContentBlog}
        ></BlogFilterItem>
      </div>
      <div className="col-span-2">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-baseline gap-x-2 "></div>
          <div className="flex items-center gap-x-2 pr-[61px] py-5">
            <span className="block text-gray9 text-[16px] font-semibold">
              {dataBlogAll?.total}
            </span>
            <span className="block text-gray6 text-[16px] font-normal ">
              Results Found
            </span>
          </div>
        </div>
        {loading ? (
          <div className="grid grid-cols-2 gap-6 px-[60px]">
            {Array(10)
              .fill(0)
              .map((item, index) => (
                <div key={index}>
                  <LoadingBlog></LoadingBlog>
                </div>
              ))}
          </div>
        ) : (
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
        )}
        <div className=" flex justify-center items-center">
          {dataBlogAll?.last_page > 1 && contentBlog === "" && (
            <div className="flex justify-center items-center pt-10 ">
              <ReactPaginate
                breakLabel="..."
                nextLabel={<IconPagiNext></IconPagiNext>}
                onPageChange={handlePageClick}
                pageRangeDisplayed={5} //đến khoảng số thứ 5 thì có dấu ...
                pageCount={pageCount}
                previousLabel={<IconPagiPrev></IconPagiPrev>}
                renderOnZeroPageCount={null}
                className="pagination justify-center"
              />
            </div>
          )}
          {dataBlogAll?.last_page > 1 && contentBlog !== "" && (
            <div className="flex justify-center items-center pt-10 ">
              <ReactPaginate
                breakLabel="..."
                nextLabel={<IconPagiNext></IconPagiNext>}
                onPageChange={handlePageClick1}
                pageRangeDisplayed={5} //đến khoảng số thứ 5 thì có dấu ...
                pageCount={pageCount1}
                previousLabel={<IconPagiPrev></IconPagiPrev>}
                renderOnZeroPageCount={null}
                className="pagination justify-center"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
