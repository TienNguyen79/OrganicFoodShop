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
import { blogComment, blogGetAll } from "../store/blog/blog-slice";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import IconPagiNext from "../components/Icons/IconPagiNext";
import IconPagiPrev from "../components/Icons/IconPagiPrev";
const itemsPerPage = 10;
const BlogPage = () => {
  //Phân trang
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [nextPage, setNextPage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(blogGetAll(nextPage));
  }, [nextPage]);
  const { dataBlogAll } = useSelector((state) => state.blog);
  console.log(
    "🚀 ~ file: BlogPage.js:26 ~ BlogPage ~ dataBlogAll:",
    dataBlogAll
  );

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

  // const [limit, setLimit] = useState(5);
  // useEffect(() => {
  //   dispatch(blogComment({ blog_id: 1, limit: 1000 }));
  // }, [dispatch, limit]);

  // const { dataCommentBlog } = useSelector((state) => state.blog);
  // console.log(
  //   "🚀 ~ file: BlogPage.js:59 ~ BlogPage ~ dataCommentBlog:",
  //   dataCommentBlog
  // );

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
        <div className="mt-16 flex justify-center items-center">
          <ReactPaginate
            // key={watchCate} //key duy nhất đảm bảo rằng component sẽ được unmount và mount lại khi thay đổi radio category
            breakLabel="..."
            nextLabel={<IconPagiNext></IconPagiNext>}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5} //đến khoảng số thứ 5 thì có dấu ...
            pageCount={pageCount}
            previousLabel={<IconPagiPrev></IconPagiPrev>}
            renderOnZeroPageCount={null}
            className="pagination"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
