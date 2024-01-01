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
import { useDispatch, useSelector } from "react-redux";
import {
  UserChangePassword,
  UserUpdate,
  UserUpdateAddress,
} from "../store/user/user-slice";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { authCheckToken } from "../store/auth/auth-slice";

const schema3 = yup.object({
  current_password: yup
    .string()
    .required("Current Password is required")
    .min(8, "Current Password must be at least  8 character "),
  new_password: yup
    .string()
    .required("New Password is required")
    .min(8, "New password must be at least 8 characters "),
  confirm_password: yup
    .string()
    .required("Confirm Password is required")
    .min(8, "Confirm Password must be at least 8 characters "),
});

const schema1 = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(5, "Please enter at least 5 characters"),
  phone_number: yup
    .string()
    .required("Phone Number is required")
    .matches(/^\d+$/, "This field only enters numbers")
    .matches(/^[0-9]{10}$/, "The phone number must be exactly 10 digits"),
  email: yup
    .string()
    .required("E-mail is required")
    .email("Field should contain a valid e-mail"),
});

const schema2 = yup.object({
  // firstName: yup.string().required("FirstName is required"),
  name: yup.string().required("Name is required"),
  address: yup
    .string()
    .required("Street Address is required")
    .min(5, "Please enter at least 5 characters"),
  phone: yup
    .string()
    .required("Phone Number is required")
    .matches(/^\d+$/, "This field only enters numbers")
    .matches(/^[0-9]{10}$/, "The phone number must be exactly 10 digits"),
  email: yup
    .string()
    .required("E-mail is required")
    .email("Field should contain a valid e-mail"),

  // term: yup.boolean().required("Please accpect the terms and condition"),
});
const SettingsPage = () => {
  const {
    control: control1,
    setValue: setValue1,
    getValues: getValues1,
    handleSubmit: handleSubmit1,
    formState: { errors: errors1 },
  } = useForm({
    resolver: yupResolver(schema1),
    mode: "onChange",
  });
  // console.log(
  //   "🚀 ~ file: SettingsPage.js:86 ~ SettingsPage ~ getValues:",
  //   getValues1("avata")
  // );

  const {
    control: control2,
    setValue: setValue2,
    getValues: getValues2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm({
    resolver: yupResolver(schema2),
    mode: "onChange",
  });

  const {
    control: control3,
    setValue: setValue3,
    handleSubmit: handleSubmit3,
    formState: { errors: errors3 },
    reset: reset3,
  } = useForm({
    resolver: yupResolver(schema3),
    mode: "onChange",
  });
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
  const navigate = useNavigate();

  const handleBillAddress = async (values) => {
    if (labelCity === "" || labelDistric === "" || labelvillage === "") {
      toast.error("Address must be complete");
    } else {
      let DataInfoShip = {
        address:
          values.address +
          ", " +
          labelvillage +
          ", " +
          labelDistric +
          ", " +
          labelCity,
        name: values.name,
        email: values.email,
        phone: values.phone,
        company_name: values.company_name,
      };
      dispatch(UserUpdateAddress(DataInfoShip));
      // localStorage.setItem("DataInfoShip", DataInfoShip);
    }
  };
  const handleChangePassword = async (values) => {
    if (values.confirm_password !== values.new_password) {
      toast.error("Confirm Password must match New Password");
      return;
    }
    dispatch(UserChangePassword(values));
    reset3({});
    // navigate("/");
  };

  const { user, accessToken } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(authCheckToken());
  }, []);

  //khi vào settting các thông tin mặc định sẽ hiện lên
  useEffect(() => {
    setValue1("name", user?.name);
    setValue1("email", user?.email);
    setValue1("phone_number", user?.phone_number);
    setValue1("avata", user?.avata);
  }, [setValue1, user?.avata, user?.email, user?.name, user?.phone_number]);

  useEffect(() => {
    setValue2("name", user?.billing_address?.name);
    setValue2("email", user?.billing_address?.email);
    setValue2("phone", user?.billing_address?.phone);
    setValue2("phone", user?.billing_address?.phone);
    setValue2("company_name", user?.billing_address?.company_name || "");
    setValue2("address", user?.billing_address?.address.split(",")[0]);
    setLabelvillage(user?.billing_address?.address.split(",")[1]);
    setLabelDistric(user?.billing_address?.address.split(",")[2]);
    setLabelCity(user?.billing_address?.address.split(",")[3]);
  }, [
    city,
    setValue2,
    user?.billing_address?.address,
    user?.billing_address?.company_name,
    user?.billing_address?.email,
    user?.billing_address?.name,
    user?.billing_address?.phone,
  ]);
  // useEffect(() => {
  //   var storedArrayJSON = localStorage.getItem("DataInfoShip");
  //   var storedArray = JSON.parse(storedArrayJSON);
  //   setValue2("billName", storedArray?.name);
  //   setValue2("billCompanyName", storedArray?.companyName);
  //   setValue2("billStreetAddress", storedArray?.shippingAddress?.split(",")[0]);
  //   setLabelCity(storedArray?.shippingAddress?.split(",")[3]);
  //   setLabelDistric(storedArray?.shippingAddress?.split(",")[2]);
  //   setLabelvillage(storedArray?.shippingAddress?.split(",")[1]);
  //   setValue2("billEmail", storedArray?.email);
  //   setValue2("billPhoneNumber", storedArray?.phone_number);
  // }, []);

  return (
    <div>
      <BoxSettings label="Account Settings">
        <form action="" onSubmit={handleSubmit1(handleAccoutSetting)}>
          <div className="flex flex-col-reverse md:flex-row lg:flex-row items-center  gap-x-10 gap-y-4">
            <div className="flex flex-col flex-1 gap-y-4 w-full">
              <BoxField>
                <LabelField label="Name"></LabelField>
                <Input
                  control={control1}
                  name="name"
                  placeholder="Enter your Name..."
                  className="placeholder:opacity-80 placeholder:text-[14px] w-full"
                  error={errors1?.name?.message}
                ></Input>
              </BoxField>
              <BoxField>
                <LabelField label="Email"></LabelField>
                <Input
                  control={control1}
                  name="email"
                  placeholder="Enter your Email..."
                  className="placeholder:opacity-80 placeholder:text-[14px]"
                  error={errors1?.email?.message}
                ></Input>
              </BoxField>
              <BoxField>
                <LabelField label="Phone"></LabelField>
                <Input
                  control={control1}
                  name="phone_number"
                  placeholder="Enter your PhoneNumber..."
                  className="placeholder:opacity-80 placeholder:text-[14px]"
                  error={errors1?.phone_number?.message}
                ></Input>
              </BoxField>

              <Button
                kind="primary"
                type="submit"
                className="w-[180px] text-sm self-center md:self-start lg:self-start"
              >
                Save Changes
              </Button>
            </div>
            <div className="flex flex-1 justify-end w-full">
              {/* <Input control={control} type="file" name="image"></Input> */}
              <ImageUpload
                name="avata"
                onChange={(name, data) => setValue1("avata", data.url)}
                setValue1={setValue1}
                getValues1={getValues1("avata")}
              ></ImageUpload>
            </div>
          </div>
        </form>
      </BoxSettings>
      <BoxSettings label="Billing Address" className="mt-[26px]">
        <form action="" onSubmit={handleSubmit2(handleBillAddress)}>
          <div className="flex flex-col gap-y-4 ">
            <div className="flex flex-col md:flex-row lg:flex-row gap-y-4  items-center gap-x-2">
              <div className="flex-1 w-full">
                <BoxField>
                  <LabelField label="Name"></LabelField>
                  <Input
                    control={control2}
                    name="name"
                    placeholder="Enter your Name..."
                    className="placeholder:opacity-80 placeholder:text-[14px] w-full"
                    error={errors2?.name?.message}
                  ></Input>
                </BoxField>
              </div>
              <div className="flex-1 w-full">
                <BoxField>
                  <LabelField label="Company Name (optional)"></LabelField>
                  <Input
                    control={control2}
                    name="company_name"
                    placeholder="Enter your CompanyName..."
                    className="placeholder:opacity-80 placeholder:text-[14px] w-full"
                  ></Input>
                </BoxField>
              </div>
            </div>
            <BoxField>
              <LabelField label="Detail Address"></LabelField>
              <Input
                control={control2}
                name="address"
                placeholder="Enter your Street Address..."
                className="placeholder:opacity-80 placeholder:text-[14px]"
                error={errors2?.address?.message}
              ></Input>
            </BoxField>

            <div>
              <div className="flex flex-col md:flex-row lg:flex-row items-center gap-x-3  ">
                <div className="flex-1 w-full">
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
                <div className="flex-1 w-full">
                  <FieldBill>
                    <BillLabel
                      className="text-gray9 font-normal "
                      label="District*"
                    ></BillLabel>
                    <DropdownInit className="z-[7]">
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
                <div className="flex-1 w-full">
                  <FieldBill>
                    <BillLabel
                      className="text-gray9 font-normal"
                      label="Village*"
                    ></BillLabel>
                    <DropdownInit className="z-[6]">
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

            <div className="flex flex-col md:flex-row lg:flex-row gap-y-4 items-center gap-x-4">
              <div className="w-full">
                <BoxField>
                  <LabelField label="Email"></LabelField>
                  <Input
                    control={control2}
                    name="email"
                    placeholder="Enter your Email..."
                    className="placeholder:opacity-80 placeholder:text-[14px]"
                    error={errors2?.email?.message}
                  ></Input>
                </BoxField>
              </div>
              <div className="w-full">
                <BoxField>
                  <LabelField label="Phone "></LabelField>
                  <Input
                    control={control2}
                    name="phone"
                    placeholder="Enter your PhoneNumber..."
                    className="placeholder:opacity-80 placeholder:text-[14px]"
                    error={errors2?.phone?.message}
                  ></Input>
                </BoxField>
              </div>
            </div>
            <Button
              kind="primary"
              type="submit"
              className="w-[180px] text-sm self-center md:self-start lg:self-start"
            >
              Save Changes
            </Button>
          </div>
        </form>
      </BoxSettings>

      <BoxSettings
        label="Change Password"
        className="mt-[26px] mb-8 md:mb-0 lg:mb-0"
      >
        <form action="" onSubmit={handleSubmit3(handleChangePassword)}>
          <div className="flex flex-col gap-y-4">
            <BoxField>
              <LabelField label="Current Password "></LabelField>
              <Input
                control={control3}
                kind="eye"
                name="current_password"
                type={`${showEye ? "text" : "password"}`}
                placeholder="Enter your Current Password..."
                className="placeholder:opacity-80 placeholder:text-[14px]"
                cssEye="mt-[5px]"
                error={errors3?.current_password?.message}
              >
                <IconEyeToggle
                  open={showEye}
                  onClick={handleToggleEye}
                ></IconEyeToggle>
              </Input>
            </BoxField>

            <div className="flex flex-col md:flex-row lg:flex-row gap-y-4 items-center gap-x-3 ">
              <div className="flex-1 w-full">
                <BoxField>
                  <LabelField label="New Password "></LabelField>
                  <Input
                    control={control3}
                    kind="eye"
                    name="new_password"
                    type={`${showEye2 ? "text" : "password"}`}
                    placeholder="Enter your New Password..."
                    className="placeholder:opacity-80 placeholder:text-[14px] "
                    cssEye="mt-[5px]"
                    error={errors3?.new_password?.message}
                  >
                    <IconEyeToggle
                      open={showEye2}
                      onClick={handleToggleEye2}
                    ></IconEyeToggle>
                  </Input>
                </BoxField>
              </div>
              <div className="flex-1 w-full">
                <BoxField>
                  <LabelField label="Confirm Password "></LabelField>
                  <Input
                    control={control3}
                    kind="eye"
                    name="confirm_password"
                    type={`${showEye3 ? "text" : "password"}`}
                    placeholder="Enter your Confirm Password..."
                    className="placeholder:opacity-80 placeholder:text-[14px]"
                    cssEye="mt-[5px]"
                    error={errors3?.confirm_password?.message}
                  >
                    <IconEyeToggle
                      open={showEye3}
                      onClick={handleToggleEye3}
                    ></IconEyeToggle>
                  </Input>
                </BoxField>
              </div>
            </div>
            <Button
              kind="primary"
              type="submit"
              className="w-[200px]  text-sm self-center md:self-start lg:self-start"
            >
              Change Password
            </Button>
          </div>
        </form>
      </BoxSettings>
    </div>
  );
};

export default SettingsPage;
