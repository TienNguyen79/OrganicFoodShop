import React, { useEffect, useState } from "react";
import BoxSettings from "../modules/user/partsSetting/BoxSettings";
import BoxField from "../modules/user/partsSetting/BoxField";
import LabelField from "../modules/user/partsSetting/LabelField";
import { useForm } from "react-hook-form";
import Input from "../components/input/Input";
import Button from "../components/button/Button";
import FieldBill from "../modules/cart/parts/FieldBill";
import BillLabel from "../modules/cart/parts/BillLabel";
import DropdownInit from "../components/dropdown/init/DropdownInit";
import SelectInit from "../components/dropdown/init/SelectInit";
import ListInit from "../components/dropdown/init/ListInit";
import OptionsInit from "../components/dropdown/init/OptionsInit";
import axios from "axios";
import { debounce } from "lodash";
import useToggleValue from "../hooks/useToggleValue";
import IconEyeToggle from "../components/Icons/IconEyeToggle";
import ImageUpload from "../components/image/ImageUpload";
import { useDispatch } from "react-redux";
import { UserUpdate } from "../store/user/user-slice";

const SettingsPage = () => {
  const {
    control: control1,
    setValue: setValue1,
    handleSubmit: handleSubmit1,
  } = useForm();

  const {
    control: control2,
    setValue: setValue2,
    handleSubmit: handleSubmit2,
  } = useForm();

  const {
    control: control3,
    setValue: setValue3,
    handleSubmit: handleSubmit3,
  } = useForm();
  //city
  const [city, setCity] = useState([]);
  const [queryCity, setQueryCity] = useState("Hà Nội");
  const [labelCity, setLabelCity] = useState("");
  const [codeCity, setCodeCity] = useState("");
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        `https://provinces.open-api.vn/api/p/search/?q=${queryCity}`
      );
      setCity(result.data);
    }
    fetchData();
  }, [queryCity]);

  const handleCityChangeDebounced = debounce((value) => {
    setQueryCity(value);
  }, 300); // 300 milliseconds là khoảng thời gian debounce

  //district

  const [distric, setDistric] = useState([]);
  const [queryDistric, setQueryDistric] = useState("");
  const [labelDistric, setLabelDistric] = useState("");
  const [codeDistric, setCodeDistrict] = useState("");

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        // `https://provinces.open-api.vn/api/d/search/?q=${queryDistric}` chọn thành phố thì xuất hiện các quận huyện tương ứng dựa vào mã code
        `https://provinces.open-api.vn/api/p/${codeCity}?depth=2`
      );

      setDistric(result.data);
    }
    fetchData();
  }, [codeCity]);

  const handleDistricChangeDebounced = debounce((value) => {
    setQueryDistric(value);
  }, 300); // 300 milliseconds là khoảng thời gian debounce

  //Village

  const [village, setVillage] = useState([]);
  const [queryVillage, setQueryVillage] = useState("");
  const [labelvillage, setLabelvillage] = useState("");

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        // `https://provinces.open-api.vn/api/w/search/?q=${queryVillage}` chọn quận huyện thì xuất hiện các xã tương ứng dựa vào mã code
        `https://provinces.open-api.vn/api/d/${codeDistric}?depth=2`
      );

      setVillage(result.data);
    }
    fetchData();
  }, [codeDistric]);

  const { value: showEye, handleToggleValue: handleToggleEye } =
    useToggleValue();
  const { value: showEye2, handleToggleValue: handleToggleEye2 } =
    useToggleValue();
  const { value: showEye3, handleToggleValue: handleToggleEye3 } =
    useToggleValue();
  const dispatch = useDispatch();
  const handleAccoutSetting = async (values) => {
    dispatch(UserUpdate(values));
  };
  const handleBillAddress = async (values) => {
    console.log(
      "🚀 ~ file: SettingsPage.js:111 ~ handleBillAddress ~ values:",
      values
    );
  };
  const handleChangePassword = async (values) => {
    console.log(
      "🚀 ~ file: SettingsPage.js:117 ~ handleChangePassword ~ values:",
      values
    );
  };
  return (
    <div>
      <BoxSettings label="Account Settings">
        <form action="" onSubmit={handleSubmit1(handleAccoutSetting)}>
          <div className="flex items-center gap-x-10">
            <div className="flex flex-col flex-1 gap-y-4">
              <BoxField>
                <LabelField label="Name"></LabelField>
                <Input
                  control={control1}
                  name="name"
                  placeholder="Enter your Name..."
                  className="placeholder:opacity-80 placeholder:text-[14px]"
                ></Input>
              </BoxField>
              <BoxField>
                <LabelField label="Email"></LabelField>
                <Input
                  control={control1}
                  name="email"
                  placeholder="Enter your Email..."
                  className="placeholder:opacity-80 placeholder:text-[14px]"
                ></Input>
              </BoxField>
              <BoxField>
                <LabelField label="Phone"></LabelField>
                <Input
                  control={control1}
                  name="phone_number"
                  placeholder="Enter your PhoneNumber..."
                  className="placeholder:opacity-80 placeholder:text-[14px]"
                ></Input>
              </BoxField>

              <Button
                kind="primary"
                type="submit"
                className="w-[180px] text-sm"
              >
                Save Changes
              </Button>
            </div>
            <div className="flex flex-1 justify-center">
              {/* <Input control={control} type="file" name="image"></Input> */}
              <ImageUpload
                name="avata"
                onChange={(name, data) => setValue1("avata", data.url)}
                setValue1={setValue1}
              ></ImageUpload>
            </div>
          </div>
        </form>
      </BoxSettings>
      <BoxSettings label="Billing Address" className="mt-[26px]">
        <form action="" onSubmit={handleSubmit2(handleBillAddress)}>
          <div className="flex flex-col gap-y-4">
            <div className="flex items-center gap-x-2">
              <BoxField>
                <LabelField label="First Name"></LabelField>
                <Input
                  control={control2}
                  name="billFirstName"
                  placeholder="Enter your firstName..."
                  className="placeholder:opacity-80 placeholder:text-[14px]"
                ></Input>
              </BoxField>
              <BoxField>
                <LabelField label="Last Name"></LabelField>
                <Input
                  control={control2}
                  name="billLastName"
                  placeholder="Enter your LastName..."
                  className="placeholder:opacity-80 placeholder:text-[14px]"
                ></Input>
              </BoxField>
              <BoxField>
                <LabelField label="Company Name (optional)"></LabelField>
                <Input
                  control={control2}
                  name="billCompanyName"
                  placeholder="Enter your CompanyName..."
                  className="placeholder:opacity-80 placeholder:text-[14px]"
                ></Input>
              </BoxField>
            </div>
            <BoxField>
              <LabelField label="Street Address"></LabelField>
              <Input
                control={control2}
                name="billStreetAddress"
                placeholder="Enter your Street Address..."
                className="placeholder:opacity-80 placeholder:text-[14px]"
              ></Input>
            </BoxField>

            <div>
              <div className="flex items-center gap-x-3  ">
                <div className="flex-1">
                  <FieldBill>
                    <BillLabel
                      className="text-gray9 font-normal"
                      label="City / Province*"
                    ></BillLabel>
                    <DropdownInit>
                      <SelectInit
                        className="w-full"
                        placeholder={labelCity || "Select"}
                      ></SelectInit>
                      <ListInit>
                        <div className="bg-white p-4 ">
                          <input
                            control={control2}
                            name="city"
                            placeholder="Search..."
                            className="py-3 px-4 w-full border  font-medium  rounded-md placeholder:text-text4 dark:placeholder:text-text2  dark:text-white text-text1"
                            onChange={(e) =>
                              handleCityChangeDebounced(e.target.value)
                            }
                          ></input>
                        </div>
                        <div className="max-h-[230px] overflow-y-auto">
                          {city.length > 0 &&
                            city.map((item, index) => (
                              <OptionsInit
                                key={index}
                                onClick={() => {
                                  setLabelCity(item.name);
                                  setCodeCity(item.code);
                                }}
                              >
                                {item.name}
                              </OptionsInit>
                            ))}
                        </div>
                      </ListInit>
                    </DropdownInit>
                  </FieldBill>
                </div>
                <div className="flex-1">
                  <FieldBill>
                    <BillLabel
                      className="text-gray9 font-normal "
                      label="District*"
                    ></BillLabel>
                    <DropdownInit>
                      <SelectInit
                        placeholder={labelDistric || "Select"}
                        className={`w-full ${
                          labelCity !== ""
                            ? ""
                            : "pointer-events-none opacity-50"
                        }`}
                      ></SelectInit>
                      <ListInit>
                        <div className="max-h-[230px] overflow-y-auto">
                          {distric?.districts?.length > 0 &&
                            distric.districts.map((item, index) => (
                              <OptionsInit
                                key={index}
                                onClick={() => {
                                  setLabelDistric(item.name);
                                  setCodeDistrict(item.code);
                                }}
                              >
                                {item.name}
                              </OptionsInit>
                            ))}
                        </div>
                      </ListInit>
                    </DropdownInit>
                  </FieldBill>
                </div>
                <div className="flex-1">
                  <FieldBill>
                    <BillLabel
                      className="text-gray9 font-normal"
                      label="Village*"
                    ></BillLabel>
                    <DropdownInit>
                      <SelectInit
                        placeholder={labelvillage || "Select"}
                        className={`w-full ${
                          labelDistric !== ""
                            ? ""
                            : "pointer-events-none opacity-50"
                        }`}
                      ></SelectInit>
                      <ListInit>
                        <div className="max-h-[230px] overflow-y-auto">
                          {village?.wards?.length > 0 &&
                            village?.wards.map((item, index) => (
                              <OptionsInit
                                key={index}
                                onClick={() => setLabelvillage(item.name)}
                              >
                                {item.name}
                              </OptionsInit>
                            ))}
                        </div>
                      </ListInit>
                    </DropdownInit>
                  </FieldBill>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-x-4">
              <div className="w-full">
                <BoxField>
                  <LabelField label="Email"></LabelField>
                  <Input
                    control={control2}
                    name="billEmail"
                    placeholder="Enter your Email..."
                    className="placeholder:opacity-80 placeholder:text-[14px]"
                  ></Input>
                </BoxField>
              </div>
              <div className="w-full">
                <BoxField>
                  <LabelField label="Phone "></LabelField>
                  <Input
                    control={control2}
                    name="billPhoneNumber"
                    placeholder="Enter your PhoneNumber..."
                    className="placeholder:opacity-80 placeholder:text-[14px]"
                  ></Input>
                </BoxField>
              </div>
            </div>
            <Button kind="primary" type="submit" className="w-[180px] text-sm">
              Save Changes
            </Button>
          </div>
        </form>
      </BoxSettings>

      <BoxSettings label="Change Password" className="mt-[26px]">
        <form action="" onSubmit={handleSubmit3(handleChangePassword)}>
          <div className="flex flex-col gap-y-4">
            <BoxField>
              <LabelField label="Current Password "></LabelField>
              <Input
                control={control3}
                kind="eye"
                name="currentPassword"
                type={`${showEye ? "text" : "password"}`}
                placeholder="Enter your Current Password..."
                className="placeholder:opacity-80 placeholder:text-[14px]"
                cssEye="mt-[5px]"
              >
                <IconEyeToggle
                  open={showEye}
                  onClick={handleToggleEye}
                ></IconEyeToggle>
              </Input>
            </BoxField>

            <div className="flex items-center gap-x-3 ">
              <div className="flex-1">
                <BoxField>
                  <LabelField label="New Password "></LabelField>
                  <Input
                    control={control3}
                    kind="eye"
                    name="newPassword"
                    type={`${showEye2 ? "text" : "password"}`}
                    placeholder="Enter your New Password..."
                    className="placeholder:opacity-80 placeholder:text-[14px] "
                    cssEye="mt-[5px]"
                  >
                    <IconEyeToggle
                      open={showEye2}
                      onClick={handleToggleEye2}
                    ></IconEyeToggle>
                  </Input>
                </BoxField>
              </div>
              <div className="flex-1">
                <BoxField>
                  <LabelField label="Confirm Password "></LabelField>
                  <Input
                    control={control3}
                    kind="eye"
                    name="confirmPassword"
                    type={`${showEye3 ? "text" : "password"}`}
                    placeholder="Enter your Confirm Password..."
                    className="placeholder:opacity-80 placeholder:text-[14px]"
                    cssEye="mt-[5px]"
                  >
                    <IconEyeToggle
                      open={showEye3}
                      onClick={handleToggleEye3}
                    ></IconEyeToggle>
                  </Input>
                </BoxField>
              </div>
            </div>
            <Button kind="primary" type="submit" className="w-[200px]  text-sm">
              Change Password
            </Button>
          </div>
        </form>
      </BoxSettings>
    </div>
  );
};

export default SettingsPage;
