import React from "react";
import LayoutAuth from "../layout/LayoutAuth";
import Input from "../components/input/Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../components/button/Button";
import IconArrowRight from "../components/Icons/IconArrowRight";

const schema = yup.object({
  email: yup
    .string()
    .required("E-mail is required")
    .email("Field should contain a valid e-mail"),
});

const ForgotPassword = () => {
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
  return (
    <LayoutAuth
      heading="Forgot Password"
      contentFooter="Back to"
      navName="LoginPage"
      navLink="/login"
    >
      <p className="text-[14px] text-center text-gray4">
        We will send you an email to reset your password.
      </p>

      <div className="mt-8 max-w-[350px] mx-auto">
        <Input
          type="email"
          control={control}
          name="email"
          placeholder="Enter Email..."
          error={errors.email?.message}
          className=" "
        ></Input>

        <Button type="submit" kind="ghost" className="w-full mt-6">
          SEND EMAIL
        </Button>
      </div>
    </LayoutAuth>
  );
};

export default ForgotPassword;
