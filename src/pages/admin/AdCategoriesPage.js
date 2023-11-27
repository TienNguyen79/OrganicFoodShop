import React from "react";
import LayoutAdminAct from "../../layout/LayoutAdminAct";
import Table from "../../components/table/Table";
import { useForm } from "react-hook-form";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { defaultImage3 } from "../../constants/global";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import ProName from "../../modules/product/partsCartAndTym/ProName";
const AdCategoriesPage = () => {
  const { control } = useForm();
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
          <Button href="/admin/add_category" kind="secondary2">
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
              <tr className="bg-white">
                <td className="!text-center">1</td>
                <td className="!text-center">
                  <div className="flex items-center  gap-x-3 ">
                    <div className="w-[60px] h-[60px]">
                      <img
                        src={defaultImage3}
                        className="w-full h-full object-cover"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col justify-center items-start ">
                      {/* <h1 className="text-gray6 font-semibold">
                        Category Name
                      </h1> */}
                      <ProName maxW="max-w-[500px]"></ProName>
                      <p className="text-sm font-normal text-gray4">
                        27, Apir 2023
                      </p>
                    </div>
                  </div>
                </td>
                <td className="!text-center">9888</td>
                <td className="!text-center">
                  <div className="flex items-center justify-center gap-x-4">
                    <Link className="border p-2">
                      <FontAwesomeIcon icon={faEye} size="lg" />
                    </Link>
                    <Link className="border p-2" to={"/admin/update_customer"}>
                      <FontAwesomeIcon icon={faPenToSquare} size="lg" />
                    </Link>
                    <Link className="border p-2">
                      <FontAwesomeIcon icon={faTrashCan} size="lg" />
                    </Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </Table>
      </div>
    </LayoutAdminAct>
  );
};

export default AdCategoriesPage;
