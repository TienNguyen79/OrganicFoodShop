import React, { useEffect, useState } from "react";
import LayoutAdminAct from "../../layout/LayoutAdminAct";
import Table from "../../components/table/Table";
import { useForm } from "react-hook-form";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { convertDate, defaultImage3 } from "../../constants/global";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import ProName from "../../modules/product/partsCartAndTym/ProName";
import { useDispatch, useSelector } from "react-redux";
import { CateDelete, cateGetdataAll } from "../../store/category/cate-slice";
import { proGetAll } from "../../store/product/pro-slice";
import Swal from "sweetalert2";
const AdCategoriesPage = () => {
  const { control } = useForm();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cateGetdataAll());
    dispatch(proGetAll());
  }, []);

  const { dataCate } = useSelector((state) => state.category);
  const { dataPro } = useSelector((state) => state.product);

  const [datatLength, setDatatLength] = useState([]);
  // useEffect(() => {
  //   const arr = [];
  //   const arrLength = [];
  //   dataCate?.map((item) => {
  //     arr.push(item.id);
  //   });

  //   arr?.map((id) => {
  //     const productsInCategory = dataPro?.filter(
  //       (product) => product.category_id === id
  //     );
  //     arrLength.push(productsInCategory.length);
  //   });
  //   setDatatLength(arrLength);
  // }, [dataCate, dataPro]);

  const handleDeleteCate = (item) => {
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
        dispatch(CateDelete({ name: item.name, id: item.id }));
      }
    });
  };
  return (
    <LayoutAdminAct label="Categories List" content="Manage My Categories">
      <div>
        <div className="flex items-center justify-between my-5 px-3">
          <Input
            control={control}
            name="search"
            className="!w-[300px]"
            placeholder="Search my Category..."
          ></Input>
          <Button
            href="/admin/add_category"
            kind="secondary2"
            className="hover:bg-primary hover:text-white transition-all"
          >
            + Add Category
          </Button>
        </div>
        <Table>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Category</th>
                <th>Total Product</th>
                {/* <th>Quantity Ordered</th> */}
                {/* <th>Total Spent</th> */}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {dataCate.length > 0 &&
                dataCate.map((item, index) => (
                  <tr key={item.id} className="bg-white">
                    <td className="!text-center">#{item.id}</td>
                    <td className="!text-center">
                      <div className="flex items-center  gap-x-3 ">
                        <div className="w-[60px] h-[60px]">
                          <img
                            src={item?.image}
                            className="w-full h-full object-cover"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col justify-center items-start ">
                          <ProName
                            maxW="max-w-[500px]"
                            name={item?.name}
                            className="capitalize"
                          ></ProName>
                          <p className="text-sm font-normal text-gray4">
                            {convertDate(item?.created_at)}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="!text-center">999</td>
                    <td className="!text-center">
                      <div className="flex items-center justify-center gap-x-4">
                        {/* <Link className="border p-2">
                          <FontAwesomeIcon icon={faEye} size="lg" />
                        </Link> */}
                        <Link
                          className="border p-2"
                          to={`/admin/update_category/${item.id}`}
                        >
                          <FontAwesomeIcon icon={faPenToSquare} size="lg" />
                        </Link>
                        <div
                          className="border p-2 cursor-pointer"
                          onClick={() => handleDeleteCate(item)}
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
    </LayoutAdminAct>
  );
};

export default AdCategoriesPage;
