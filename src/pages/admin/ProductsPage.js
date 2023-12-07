import React, { useEffect, useMemo, useState } from "react";
import LayoutAdminAct from "../../layout/LayoutAdminAct";
import Input from "../../components/input/Input";
import { useForm } from "react-hook-form";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import Table from "../../components/table/Table";
import { useDispatch, useSelector } from "react-redux";
import {
  ProAdminDelete,
  ProAdminGet,
  ProAdminSearchName,
  ProAdminSearchWithCate,
} from "../../store/product/pro-slice";
import { convertDate, convertStockStatus } from "../../constants/global";
import usePagination from "../../hooks/usePagination";
import ReactPaginate from "react-paginate";
import IconPagiNext from "../../components/Icons/IconPagiNext";
import IconPagiPrev from "../../components/Icons/IconPagiPrev";
import { cateGetdataAll } from "../../store/category/cate-slice";
import DropdownInit from "../../components/dropdown/init/DropdownInit";
import SelectInit from "../../components/dropdown/init/SelectInit";
import ListInit from "../../components/dropdown/init/ListInit";
import OptionsInit from "../../components/dropdown/init/OptionsInit";
import Swal from "sweetalert2";
const ProductsPage = () => {
  const { control } = useForm();
  const dispatch = useDispatch();
  const [searchCate, setSearchCate] = useState("");
  const [idCate, setIdCate] = useState("");
  const [adNamePro, setAdNamePro] = useState("");
  console.log(
    "🚀 ~ file: ProductsPage.js:39 ~ ProductsPage ~ adNamePro:",
    adNamePro
  );

  const { dataPro } = useSelector((state) => state.product);
  console.log(
    "🚀 ~ file: ProductsPage.js:37 ~ ProductsPage ~ dataPro:",
    dataPro
  );
  //pagination hook
  const { handlePageClick, pageCount, nextPage } = usePagination(
    dataPro,
    dataPro?.per_page
  );

  const {
    handlePageClick: handlePageClick1,
    pageCount: pageCount1,
    nextPage: nextPage1,
    setNextPage: setNextPage1,
    setPageCount: setPageCount1,
  } = usePagination(dataPro, dataPro?.per_page);

  const {
    handlePageClick: handlePageClick2,
    pageCount: pageCount2,
    nextPage: nextPage2,
    setNextPage: setNextPage2,
    setPageCount: setPageCount2,
    setItemOffset: setItemOffset2,
  } = usePagination(dataPro, dataPro?.per_page);

  useEffect(() => {
    dispatch(cateGetdataAll());
  }, []);

  //get pro
  useEffect(() => {
    if (adNamePro !== "") {
      dispatch(ProAdminSearchName({ name: adNamePro, page: nextPage1 }));
    } else if (searchCate !== "") {
      dispatch(ProAdminSearchWithCate({ id: idCate, page: nextPage2 }));
    } else {
      dispatch(ProAdminGet(nextPage));
    }
  }, [adNamePro, dispatch, idCate, nextPage, nextPage1, nextPage2, searchCate]);
  const { dataCate } = useSelector((state) => state.category);

  const handleDeletePro = (item) => {
    Swal.fire({
      title: `Are you sure to delete  <span class="capitalize font-semibold italic underline text-darkPrimary">${item?.name}</span>?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(ProAdminDelete({ page: dataPro.current_page, id: item.id }));
      }
    });
    console.log(
      "🚀 ~ file: ProductsPage.js:58 ~ handleDeletePro ~ item:",
      item.id
    );
  };
  return (
    <LayoutAdminAct label="Product List" content="Manage My Products">
      <div>
        <div className="flex items-center justify-between my-5 px-3">
          <div className="flex items-center gap-x-3">
            <Input
              control={control}
              name="search"
              className={`!w-[300px] ${
                searchCate !== "" && "pointer-events-none opacity-75"
              } `}
              placeholder="Search my Product..."
              setAdNamePro={setAdNamePro}
              autoComplete="off"
            ></Input>
            <div
              className={`mt-[20px]  ${
                adNamePro !== "" && "pointer-events-none opacity-75"
              }
              `}
            >
              <DropdownInit>
                <SelectInit
                  className="bg-white "
                  placeholder={`${searchCate || "Search for Category"}  `}
                ></SelectInit>
                <ListInit className={`${adNamePro !== "" && "hidden"}`}>
                  <div className="flex justify-center">
                    <span
                      className=" inline-block pt-1 px-4 text-center cursor-pointer"
                      onClick={() => {
                        setSearchCate("");
                      }}
                    >
                      <FontAwesomeIcon icon={faCircleXmark} size="lg" />
                    </span>
                  </div>
                  {dataCate.length > 0 &&
                    dataCate.map((item) => (
                      <OptionsInit
                        key={item.id}
                        className={`hover:bg-[#e6f7d9] text-gray5 font-medium  `}
                        onClick={() => {
                          setSearchCate(item?.name);
                          setIdCate(adNamePro !== "" ? null : item?.id);
                          setNextPage2(1);
                        }}
                      >
                        {item?.name}
                      </OptionsInit>
                    ))}
                </ListInit>
              </DropdownInit>
            </div>
          </div>
          <Button
            href="/admin/add_product"
            kind="secondary2"
            className="hover:bg-primary hover:text-white transition-all"
          >
            + Add Product
          </Button>
        </div>
        <Table>
          <table className="shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr>
                <th>ID</th>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {dataPro?.data?.length > 0 &&
                dataPro?.data?.map((item) => (
                  <tr key={item?.id} className={`bg-white`}>
                    <td className="!text-center">#{item?.id}</td>
                    <td className="!text-center">
                      <div className="flex items-center gap-x-3">
                        <div className="w-[60px] h-[60px]">
                          <img
                            className="w-full h-full object-cover"
                            src={item?.imageUrl}
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col justify-center items-start ">
                          <h1
                            className="text-gray6 font-semibold whitespace-nowrap overflow-hidden overflow-ellipsis max-w-[500px]
"
                          >
                            {item?.name}
                          </h1>

                          <p className="text-sm font-normal text-gray4">
                            {convertDate(item?.created_at)}
                          </p>
                        </div>
                      </div>
                    </td>
                    {dataCate.length > 0 &&
                      dataCate.map((cate, index) => {
                        if (cate?.id === item?.category_id)
                          return (
                            <td
                              key={index}
                              className="!text-center  whitespace-nowrap overflow-hidden overflow-ellipsis max-w-[200px] "
                            >
                              {cate?.name}
                            </td>
                          );
                      })}
                    <td className="!text-center ">{item?.price}</td>
                    <td className="!text-center">
                      {convertStockStatus(item?.stock)}
                    </td>
                    <td className="!text-center">
                      <div className="flex items-center justify-center gap-x-4">
                        <Link
                          className="border p-2"
                          to={`/admin/products/product_list/${item?.id}`}
                        >
                          <FontAwesomeIcon icon={faEye} size="lg" />
                        </Link>
                        <Link
                          className="border p-2"
                          to={`/admin/update_product/${item.id}`}
                        >
                          <FontAwesomeIcon icon={faPenToSquare} size="lg" />
                        </Link>
                        <div
                          className="border p-2 cursor-pointer"
                          onClick={() => handleDeletePro(item)}
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
      </div>
      {dataPro?.last_page > 1 && adNamePro === "" && searchCate === "" && (
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
      {dataPro?.last_page > 1 && adNamePro !== "" && (
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
      {dataPro?.last_page > 1 && searchCate !== "" && (
        <div className="flex justify-center items-center pt-10 ">
          <ReactPaginate
            breakLabel="..."
            nextLabel={<IconPagiNext></IconPagiNext>}
            onPageChange={handlePageClick2}
            pageRangeDisplayed={5} //đến khoảng số thứ 5 thì có dấu ...
            pageCount={pageCount2}
            previousLabel={<IconPagiPrev></IconPagiPrev>}
            renderOnZeroPageCount={null}
            className="pagination justify-center"
          />
        </div>
      )}
    </LayoutAdminAct>
  );
};

export default ProductsPage;
