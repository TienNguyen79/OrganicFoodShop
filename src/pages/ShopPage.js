import React, { Fragment, useEffect, useState } from "react";
import LayoutDetail from "../layout/LayoutDetail";
import Button from "../components/button/Button";
import IconFilter from "../components/Icons/IconFilter";
import Dropdown from "../components/dropdown/Dropdown";
import Select from "../components/dropdown/Select";
import List from "../components/dropdown/List";
import Options from "../components/dropdown/Options";
import Radio from "../components/checkbox/Radio";
import { useForm } from "react-hook-form";
import CateTitle from "../modules/category/parts/CateTitle";
import { useDispatch, useSelector } from "react-redux";
import {
  cateGetdataAll,
  cateGetdataWithId,
} from "../store/category/cate-slice";
import ProductItem from "../modules/product/ProductItem";
import IconStarYellow from "../components/Icons/IconStarYellow";
import { dataRating } from "../constants/global";
import Label from "../components/label/Label";
import TopProductItem from "../modules/product/TopProductItem";
import SelectInit from "../components/dropdown/init/SelectInit";
import ListInit from "../components/dropdown/init/ListInit";
import OptionsInit from "../components/dropdown/init/OptionsInit";
import DropdownInit from "../components/dropdown/init/DropdownInit";
import {
  proGetAll,
  proGetBestSeller,
  proGetWithFilter,
} from "../store/product/pro-slice";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import lodash, { debounce } from "lodash";
import ReactPaginate from "react-paginate";
import IconHome from "../components/Icons/IconHome";
import IconArrowRight from "../components/Icons/IconArrowRight";
import IconPagiNext from "../components/Icons/IconPagiNext";
import IconPagiPrev from "../components/Icons/IconPagiPrev";
import ProDetailItem from "../modules/product/ProDetailItem";
import ProQuickView from "../modules/product/ProQuickView";

const itemsPerPage = 9;

const ShopPage = () => {
  const { control, watch, reset, setValue } = useForm({
    mode: "onChange",
  });

  //Phân trang
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [nextPage, setNextPage] = useState(1);

  const [dataFilter, setDataFilter] = useState({
    category: "",
    rate: "",
    minPrice: 0,
    maxPrice: 1000,
    nextPage: 1,
  });
  console.log("🚀 ~ file: ShopPage.js:59 ~ ShopPage ~ dataFilter:", dataFilter);

  const [searchParam, setSearchParam] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const watchCate = watch("cate");
  console.log("🚀 ~ file: ShopPage.js:66 ~ ShopPage ~ watchCate:", watchCate);
  const watchRate = watch("rate");
  const [rangeValue, setRangeValue] = useState({ min: 0, max: 1000 });
  const { slug } = useParams(); //lấy ra được slug

  // dispatch để dữ liệu trả về
  useEffect(() => {
    dispatch(cateGetdataAll());
    dispatch(proGetBestSeller());
    dispatch(proGetAll());
  }, []);

  //thông tin lấy được đưa vào dispatch và sẽ trả ra kết quả filter mong muốn
  useEffect(() => {
    dispatch(proGetWithFilter(dataFilter));
  }, [dataFilter, dispatch]);

  //lấy được data đã trả về
  const { dataCate } = useSelector((state) => state.category);
  const { dataProWithFilter, dataBestSeller, dataPro } = useSelector(
    (state) => state.product
  );
  const { loading } = useSelector((state) => state.product);

  //set các field đã được chọn or set lấy giá trị trên url
  useEffect(() => {
    setDataFilter({
      ...dataFilter,
      category: searchParam.get("category") || slug,
      rate: searchParam.get("rating"),
      minPrice: searchParam.getAll("price[]")[0] || 0,
      maxPrice: searchParam.getAll("price[]")[1] || 1000,
      nextPage: nextPage,
    });
  }, [watchCate, watchRate, rangeValue, searchParam, slug, nextPage]);

  // Tạo một phiên bản debounced của hàm handleRangeChange
  const debouncedHandleRangeChange = debounce((newRangeValue) => {
    setRangeValue(newRangeValue);
  }, 300); // Đặt thời gian debounce (milliseconds) ở đây

  const handleRangeChange = (e) => {
    const { name, value } = e.target;
    const intValue = parseInt(value);

    if (name === "min") {
      const newMinValue =
        intValue <= rangeValue.max ? intValue : rangeValue.min;
      debouncedHandleRangeChange({ ...rangeValue, min: newMinValue });
    } else if (name === "max") {
      const newMaxValue =
        intValue >= rangeValue.min ? intValue : rangeValue.max;
      debouncedHandleRangeChange({ ...rangeValue, max: newMaxValue });
    }
  };

  //hay. khi mình chọn filter cái nào nó sẽ bắn lên url
  useEffect(() => {
    // Tạo một mảng query string cho đường dẫn dựa trên các bộ lọc
    const queryParams = [];

    if (watchCate && !slug) {
      queryParams.push(`category=${watchCate}`);
      setValue("cate", watchCate);
    }

    // if (!slug && watchCate) {
    //   setValue("cate", "");
    // }

    if (rangeValue.min !== 0 || rangeValue.max !== 1000) {
      queryParams.push(`price[]=${rangeValue.min}`);
      queryParams.push(`price[]=${rangeValue.max}`);
    }

    if (watchRate) {
      queryParams.push(`rating=${watchRate}`);
    }

    // Tạo đường dẫn mới với các tham số query string
    const newPath = `?${queryParams.join("&")}`; //join : từ mảng chuyển thành chuỗi

    // Sử dụng navigate để cập nhật đường dẫn URL
    navigate(newPath, { replace: true });
  }, [watchCate, watchRate, rangeValue, navigate, slug]);

  //khi chọn sang category khác sẽ được reset
  useEffect(() => {
    if (localStorage.getItem("nameShop") === "") {
      navigate("/shop", { replace: true });
      setValue("cate", "");
    }

    if (watchRate || rangeValue) {
      localStorage.removeItem("nameShop");
    }

    if (watchCate && slug) {
      let query = `/shop/${watchCate}`;

      navigate(query, { replace: true });
      // setValue("cate", slug);
    }

    if (watchCate) {
      setRangeValue({ min: 0, max: 1000 });
      setValue("rate", "");
      //khi thay đổi category sẽ set về trang đầu tiên
      setNextPage(1);
      setPageCount(0);
      setItemOffset(0);
    }
  }, [slug, watchCate, navigate, setValue]);

  //khi từ nav chọn category thì vào shop radio category sẽ được check
  useEffect(() => {
    if (slug) {
      setValue("cate", slug);
    }
  }, []);

  //xử lí phân trang
  useEffect(() => {
    if (!dataProWithFilter.data || !dataProWithFilter.total) return;
    setPageCount(Math.ceil(dataProWithFilter.total / itemsPerPage)); //tổng count-(tổng số trang) làm tròn lên
  }, [dataProWithFilter.data, itemOffset]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % dataProWithFilter.total; //khoảng bao nhiêu thì có dấu ...
    setItemOffset(newOffset);
    setNextPage(event.selected + 1);
  };

  //lấy tất cả số lượng category tương ứng
  const uniqueIds = [...new Set(dataPro.map((product) => product.category_id))]; //trả ra 1 mảng các category_id không trùng nhau
  // Sắp xếp mảng uniqueIds theo thứ tự của dataCate
  uniqueIds.sort((a, b) => {
    const indexA = dataCate.findIndex((item) => item.id === a);
    const indexB = dataCate.findIndex((item) => item.id === b);
    return indexA - indexB;
  });

  const groupedProducts = uniqueIds.map((category_id) =>
    dataPro.filter((product) => product.category_id === category_id)
  );

  //....

  const [isModalOpen, setModalOpen] = useState(false);
  const [isClickClose, setIsClickClose] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setIsClickClose(true);
  };

  return (
    <Fragment>
      {loading && dataProWithFilter.length <= 0 && (
        <div className="fixed h-full flex items-center inset-0 bg-opacity-90  bg-white z-[999] ">
          <img
            src="/loading3.svg"
            className="loadingsvg  h-[150px] mx-auto"
            alt="loading"
          />
        </div>
      )}

      <ProQuickView
        open={isModalOpen ? "visible" : "invisible"}
        onClose={closeModal}
        isClickClose={isClickClose}
        // data={datafake}
      />

      <div className="grid grid-cols-4 gap-x-6 mt-8 mb-[80px]">
        <div className="col-span-1 z-10">
          <Button className="!py-[10px] mb-6" kind="primary">
            Filter
            <span className="inline-block ml-2">
              <IconFilter />
            </span>
          </Button>
          <div>
            <Dropdown>
              <Select placeholder="All Categories"></Select>
              <List>
                {dataCate.length > 0 &&
                  dataCate.map((item, index) => (
                    <Options key={item.id}>
                      <div className="flex items-center gap-y-2">
                        <Radio
                          name="cate"
                          control={control}
                          checked={Number(watchCate) === item.id}
                          value={item.id}
                        >
                          <div className="flex items-center group">
                            <CateTitle
                              className="text-[14px] font-normal group-hover:text-primary"
                              title={item?.name}
                            ></CateTitle>

                            <span className="ml-1 inline-block text-gray5 text-[14px] font-normal group-hover:text-primary">
                              ({groupedProducts[index]?.length})
                            </span>
                          </div>
                        </Radio>
                      </div>
                    </Options>
                  ))}
              </List>
            </Dropdown>
            <Dropdown>
              <Select placeholder="Price"></Select>
              <List>
                <div className="w-64 ">
                  {/* Thanh input kiểu range */}
                  <input
                    type="range"
                    min="0"
                    max="999"
                    name="min"
                    value={rangeValue.min}
                    onChange={handleRangeChange}
                    className="w-full input-range"
                  />

                  <input
                    type="range"
                    min="1"
                    max="1000"
                    name="max"
                    value={rangeValue.max}
                    onChange={handleRangeChange}
                    className="w-full input-range"
                  />

                  {/* Hiển thị giá trị min và max */}
                  <div className="flex items-center mt-2">
                    <span className="text-gray7 text-sm font-normal">
                      Price:{" "}
                    </span>
                    <div className="ml-1 text-gray9 text-sm font-medium">
                      <span> {rangeValue.min}</span>-
                      <span> {rangeValue.max}</span>
                    </div>
                  </div>
                </div>
              </List>
            </Dropdown>

            <Dropdown>
              <Select placeholder="Rating"></Select>
              <List>
                {dataRating.length > 0 &&
                  dataRating.map((item) => (
                    <Options key={item.id}>
                      <div className="flex items-center gap-y-2">
                        <Radio
                          name="rate"
                          control={control}
                          checked={Number(watchRate) === item.id}
                          value={item.id}
                        >
                          <div className="flex items-center gap-x-1">
                            {item.stars.map((star, index) => (
                              <div key={index}>{star}</div>
                            ))}
                            <span className="block text-gray9 text-sm font-normal">
                              {item.id + ".0"}
                            </span>
                          </div>
                        </Radio>
                      </div>
                    </Options>
                  ))}
              </List>
            </Dropdown>

            <div className=" mb-5">
              <Label className="text-[20px] !font-medium">Sale Products</Label>
              <div className="mt-3 flex flex-col gap-y-3">
                {dataBestSeller.length > 0 &&
                  dataBestSeller
                    .slice(0, 3)
                    .map((item) => (
                      <TopProductItem
                        key={item.id}
                        data={item}
                      ></TopProductItem>
                    ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-x-2 ">
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
            <div className="flex items-center gap-x-2">
              <span className="block text-gray9 text-[16px] font-semibold">
                {dataProWithFilter?.total}
              </span>
              <span className="block text-gray6 text-[16px] font-normal ">
                Results Found
              </span>
            </div>
          </div>

          {loading ? (
            <div className="h-[100vh] flex justify-center items-center">
              <img
                src="/loading2.svg"
                className="loadingsvg h-[60px] mx-auto"
                alt="loading"
              />
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-6 ">
              {dataProWithFilter?.data?.length > 0 ? (
                dataProWithFilter?.data
                  .slice(0, 9)
                  .map((item) => (
                    <ProductItem
                      openModal={openModal}
                      key={item.id}
                      data={item}
                    ></ProductItem>
                  ))
              ) : (
                <h1 className="text-danger text-[20px]">Product Not Found</h1>
              )}
            </div>
          )}

          <div className="mt-16 flex justify-center items-center">
            <ReactPaginate
              key={watchCate} //key duy nhất đảm bảo rằng component sẽ được unmount và mount lại khi thay đổi radio category
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
    </Fragment>
  );
};

export default ShopPage;
