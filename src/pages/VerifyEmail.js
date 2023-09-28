import React, { Fragment, useEffect, useState } from "react";
import LayoutAuth from "../layout/LayoutAuth";
import Input from "../components/input/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Button from "../components/button/Button";
const schema = yup.object({});
const VerifyEmail = () => {
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

  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        clearInterval(countdown); // Dừng đếm ngược khi số giây bằng 0
      }
    }, 1000);

    return () => {
      clearInterval(countdown); // Hủy đếm ngược khi component bị unmounted
    };
  }, [seconds]);

  return (
    <LayoutAuth heading="Verify Your Email Address" contentFooter="">
      <p className="text-[14px] text-center text-gray4">
        Please check email for Verification code
      </p>

      <div className="flex items-center gap-x-1 text-gray-700  text-[15px] mt-4 justify-center font-medium">
        {seconds > 0 ? (
          <Fragment>
            <span>Code is valid in </span>
            <span className="block text-primary ">{seconds}s</span>
          </Fragment>
        ) : (
          <span className="text-danger  ">Code has expired</span>
        )}
      </div>
      <div className="mt-8">
        <div className="flex items-center justify-between mb-2">
          <label
            htmlFor="code"
            className="block mb-2 text-gray-700 font-normal text-sm"
          >
            Verification Code
          </label>
          <div className="text-primary font-medium cursor-pointer text-[15px]">
            Resend Code
          </div>
        </div>
        <Input
          type="text"
          control={control}
          name="code"
          className="text-primary code-input text-[18px]"
        ></Input>
        <Button type="submit" kind="ghost" className="mt-6 w-full">
          VERIFY ME
        </Button>
      </div>
    </LayoutAuth>
  );
};

export default VerifyEmail;
