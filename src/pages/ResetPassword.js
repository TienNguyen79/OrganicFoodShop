import React from "react";
import LayoutAuth from "../layout/LayoutAuth";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Input from "../components/input/Input";
import IconEyeToggle from "../components/Icons/IconEyeToggle";
import useToggleValue from "../hooks/useToggleValue";
import Button from "../components/button/Button";

const schema = yup.object({
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be 8 character "),
  password_confirmation: yup
    .string()
    .required("confirmPass is required")
    .min(8, "confirmPass must be 8 character "),
});

const ResetPassword = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { isValid, isSubmitting, errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const { value: showEye, handleToggleValue: handleToggleEye } =
    useToggleValue();
  const { value: showEye2, handleToggleValue: handleToggleEye2 } =
    useToggleValue();
  return (
    <LayoutAuth heading="Reset Password" contentFooter="">
      <p className="text-[14px] text-center text-gray4">
        Please complete the fields below to reset a new password
      </p>

      <div className="px-4 mt-8">
        <Input
          control={control}
          name="password"
          placeholder="Password"
          kind="eye"
          type={`${showEye ? "text" : "password"}`}
          className="mb-3 w-full "
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
          className="mb-4 "
          error={errors.password_confirmation?.message}
        >
          <IconEyeToggle
            open={showEye2}
            onClick={handleToggleEye2}
          ></IconEyeToggle>
        </Input>
        <Button type="submit" className="w-full" kind="ghost">
          RESET PASSWORD
        </Button>
      </div>
    </LayoutAuth>
  );
};

export default ResetPassword;
