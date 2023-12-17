import React from "react";
import Input from "../../input/Input";
import { useForm } from "react-hook-form";
import IconSearch from "../../Icons/IconSearch";
import IconBell from "../../Icons/IconBell";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
const Header = ({ scrollPosition }) => {
  const { control } = useForm();
  const { user } = useSelector((state) => state.auth);

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
        <div className="flex items-center gap-x-3 ">
          <span>
            <IconBell></IconBell>
          </span>
          <div className="flex items-center gap-x-2">
            <div className="w-[40px] h-[40px]">
              <img
                src={user?.avata}
                className="w-full h-full object-cover rounded-full"
                alt=""
              />
            </div>

            <h3 className="text-[18px]  font-semibold text-darkPrimary">
              <span className="text-[14px] font-medium text-gray-600">
                Hello Boss
              </span>{" "}
              {user?.name?.split(" ").pop()}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
