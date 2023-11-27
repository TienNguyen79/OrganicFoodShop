import React from "react";
import Input from "../../input/Input";
import { useForm } from "react-hook-form";
import IconSearch from "../../Icons/IconSearch";
import IconBell from "../../Icons/IconBell";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const Header = ({ scrollPosition }) => {
  const { control } = useForm();
  return (
    <div>
      <div className="flex items-center justify-between ">
        <Input
          control={control}
          name="search"
          className={`!w-[400px] ${
            scrollPosition > 0 ? "border-none" : "bg-[#F4F5FA] border-none"
          }`}
          placeholder="Enter for search...."
          kind="search"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
        </Input>
        <div className="flex items-center gap-x-3 cursor-pointer">
          <span>
            <IconBell></IconBell>
          </span>
          <div className="flex items-center gap-x-2">
            <div className="w-[40px] h-[40px]">
              <img
                src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/avatars/1.png"
                className="w-full h-full object-cover rounded-full"
                alt=""
              />
            </div>

            <h3 className="text-[18px]  font-semibold text-darkPrimary">
              <span className="text-[14px] font-medium text-gray-600">
                Hello
              </span>{" "}
              Tiến
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
