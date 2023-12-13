import React, { useEffect, useState } from "react";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useToggleValue from "../../hooks/useToggleValue";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../components/input/Input";
import IconEyeToggle from "../../components/Icons/IconEyeToggle";
import Checkbox from "../../components/checkbox/Checkbox";
import Button from "../../components/button/Button";
import { authRegister, authRegisterShip } from "../../store/auth/auth-slice";
import { userRole } from "../../constants/global";

const schema = yup.object({
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
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 character "),
  password_confirmation: yup
    .string()
    .required("confirmPass is required")
    .min(8, "confirmPass must be at least 8 character "),
  // term: yup.boolean().required("Please accpect the terms and condition"),
});

const ShipRegisterPage = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { isValid, errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // const { value: acceptTerm, handleToggleValue: handleToggleTerm } =
  //   useToggleValue();

  const { value: showEye, handleToggleValue: handleToggleEye } =
    useToggleValue();
  const { value: showEye2, handleToggleValue: handleToggleEye2 } =
    useToggleValue();
  const { loading } = useSelector((state) => state.auth);

  const [showError, setShowError] = useState(false); //phục vụ checkterm
  const [acceptTerm, setAcceptTerm] = useState(false); //phục vụ checkterm
  const [showConfirm, setErrorConfirm] = useState("");

  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handleRegister = async (values) => {
    if (!isValid) return;
    try {
      // dispatch(authRegister({ ...values }));
      // axios.post("http://localhost:8000/api/register", { ...values });

      if (!acceptTerm) {
        setShowError(true);
        return;
      } else if (values.password_confirmation !== values.password) {
        setErrorConfirm("Confirm password must match password");
      } else {
        console.log(
          "🚀 ~ file: RegisterPage.js:69 ~ handleRegister ~ values:",
          values
        );

        dispatch(
          authRegisterShip({
            name: values.name,
            email: values.email,
            phone_number: values.phone_number,
            password: values.password,
            password_confirmation: values.password_confirmation,
            role_id: userRole.SHIPPER,
          })
        );
      }
      // setErrorConfirm("");
      // setAcceptTerm(false);
      // setShowError(false);
      // reset({});
      // console.log("không lỗi");
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="px-[238px] pb-[80px] pt-[80px] flex-grow">
      <div className="w-full max-w-[520px] my-[80px] px-6 pt-6 pb-[32px] bg-white shadow-2xl rounded-lg mx-auto">
        <h1 className="text-[32px] font-semibold text-gray9 mb-5 text-center">
          Shipper Register
        </h1>
        <div className="">
          <form onSubmit={handleSubmit(handleRegister)}>
            <Input
              control={control}
              name="name"
              placeholder="Name"
              className="mb-3"
              error={errors.name?.message}
            ></Input>
            <Input
              control={control}
              name="email"
              placeholder="Email"
              className="mb-3"
              error={errors.email?.message}
            ></Input>
            <Input
              control={control}
              name="phone_number"
              placeholder="Phone Number"
              className="mb-3"
              error={errors.phone_number?.message}
            ></Input>
            <Input
              control={control}
              name="password"
              placeholder="Password"
              kind="eye"
              type={`${showEye ? "text" : "password"}`}
              className="mb-3"
              error={errors.password?.message}
            >
              <IconEyeToggle
                open={showEye}
                onClick={handleToggleEye}
              ></IconEyeToggle>
            </Input>
            <Input
              control={control}
              name="password_confirmation"
              placeholder="Confirm Password"
              kind="eye"
              type={`${showEye2 ? "text" : "password"}`}
              className="mb-4"
              error={errors.password_confirmation?.message || showConfirm}
            >
              <IconEyeToggle
                open={showEye2}
                onClick={handleToggleEye2}
              ></IconEyeToggle>
            </Input>

            <Checkbox
              name="term"
              checked={acceptTerm}
              onClick={() => {
                setAcceptTerm(!acceptTerm);
              }}
              // onChange={()=>{}}
              value="term"
              showError={showError}
              error={errors.term?.message}
            >
              Accept all terms & Conditions
            </Checkbox>

            <Button
              type="submit"
              className="w-full text-sm"
              kind="primary"
              isLoading={loading}
            >
              Create Account
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ShipRegisterPage;
