import { useEffect } from "react";
import { useState } from "react";

export default function usePagination(result, page) {
  const itemsPerPage = page;

  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [nextPage, setNextPage] = useState(1);

  //xử lí phân trang
  useEffect(() => {
    if (!result?.data || !result?.total) return;
    setPageCount(Math.ceil(result?.total / itemsPerPage)); //xem có tất cả bao nhiêu trang vd có 5 trang (1 2 3 4 5)
  }, [result?.data, itemOffset]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % result?.total;
    setItemOffset(newOffset); //theo dõi vị trí bắt đầu của mục dữ liệu trên trang hiện tại khi bạn thực hiện phân trang hoặc điều hướng qua các trang dữ liệu.
    setNextPage(event.selected + 1);
    localStorage.setItem("pageAdmin", event.selected + 1);
  };
  // useEffect(() => {
  // }, [nextPage]);
  return {
    handlePageClick,
    pageCount,
    nextPage,
    setNextPage,
    setPageCount,
    setItemOffset,
  };
}
