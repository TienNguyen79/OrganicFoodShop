import React, { useEffect } from "react";
import LayoutAdminAct from "../../layout/LayoutAdminAct";
import {
  convertDate,
  convertDateTime,
  defaultImage3,
} from "../../constants/global";
import Table from "../../components/table/Table";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { blogAdminDelete, blogGetAll } from "../../store/blog/blog-slice";
import usePagination from "../../hooks/usePagination";
import ReactPaginate from "react-paginate";
import IconPagiNext from "../../components/Icons/IconPagiNext";
import IconPagiPrev from "../../components/Icons/IconPagiPrev";
import moment from "moment";
import Input from "../../components/input/Input";
import { useForm } from "react-hook-form";
import Button from "../../components/button/Button";
import Swal from "sweetalert2";

const AdBlogsPage = () => {
  const { control } = useForm();
  const dispatch = useDispatch();

  const { dataBlogAll } = useSelector((state) => state.blog);
  //pagination hook
  const { handlePageClick, pageCount, nextPage } = usePagination(
    dataBlogAll,
    dataBlogAll?.per_page
  );

  useEffect(() => {
    if (localStorage.getItem("statusUpdate") === "0") {
      console.log("vllllll");
      dispatch(blogGetAll(nextPage));
    }
    console.log(localStorage.getItem("statusUpdate"));
  }, [dispatch, nextPage]);

  //mục đích để khi update blog ở trang nào sẽ quay về trang đó--- nhưng đang lỗi
  useEffect(() => {
    localStorage.setItem("statusUpdate", "0");
  });

  const handleDeleteBlog = (item) => {
    Swal.fire({
      title: `Are you sure to delete blogID  <span class="capitalize font-semibold italic underline text-darkPrimary">${item?.id}</span>?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(
          blogAdminDelete({ id: item.id, page: dataBlogAll.current_page })
        );
      }
    });
  };

  return (
    <LayoutAdminAct label="Blog List" content="Manage My Blogs">
      <div className="my-5 mx-2 flex justify-between items-center">
        <Input
          control={control}
          name="search"
          className={`!w-[300px] `}
          placeholder="Search my blogs..."
          autoComplete="off"
        ></Input>
        <Button
          href="/admin/add_blog"
          kind="secondary2"
          className="hover:bg-primary hover:text-white transition-all"
        >
          + Add Blog
        </Button>
      </div>
      <Table>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Blog</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {dataBlogAll?.data?.length > 0 &&
              dataBlogAll?.data?.map((item) => (
                <tr key={item?.id} className="bg-white">
                  <td className="!text-center">#{item?.id}</td>
                  <td className="!text-center">
                    <div className="flex items-center gap-x-3">
                      <div className="w-[60px] h-[60px]">
                        <img
                          src={item?.image}
                          className="w-full h-full object-cover"
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col justify-center items-start ">
                        <h1 className="text-gray6 font-semibold whitespace-nowrap overflow-hidden overflow-ellipsis max-w-[550px]">
                          {item?.title}
                        </h1>
                        <p className="text-sm font-normal text-gray4">
                          {convertDateTime(item?.created_at)}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="!text-center">{item?.category?.name}</td>
                  <td className="!text-center">
                    <div className="flex items-center justify-center gap-x-4">
                      <Link className="border p-2">
                        <FontAwesomeIcon icon={faEye} size="lg" />
                      </Link>
                      <Link
                        className="border p-2"
                        to={`/admin/update_blog/${item?.id}`}
                      >
                        <FontAwesomeIcon icon={faPenToSquare} size="lg" />
                      </Link>
                      <div
                        className="border p-2 cursor-pointer"
                        onClick={() => handleDeleteBlog(item)}
                      >
                        <FontAwesomeIcon icon={faTrashCan} size="lg" />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </Table>
      {dataBlogAll?.last_page > 1 && (
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
    </LayoutAdminAct>
  );
};

export default AdBlogsPage;
