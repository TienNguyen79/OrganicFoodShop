import React, { useEffect, useState } from "react";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import useToggleValue from "../../hooks/useToggleValue";
import LayoutAuth from "../../layout/LayoutAuth";
import Input from "../../components/input/Input";
import IconEyeToggle from "../../components/Icons/IconEyeToggle";
import Checkbox from "../../components/checkbox/Checkbox";
import Button from "../../components/button/Button";
import {
  authLogin,
  authLoginAdmin,
  authLoginShip,
} from "../../store/auth/auth-slice";
const schema = yup.object({
  email: yup
    .string()
    .required("E-mail is required")
    .email("Field should contain a valid e-mail"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 character "),
});

const ShipLoginPage = () => {
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

  const { value: acceptTerm, handleToggleValue: handleToggleTerm } =
    useToggleValue();

  const { value: showEye, handleToggleValue: handleToggleEye } =
    useToggleValue();
  const { loading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const slug = useParams();
  // console.log("🚀 ~ file: LoginPage.js:53 ~ LoginPage ~ slug:", slug);

  const handlelogin = async (values) => {
    console.log("🚀 ~ file: LoginPage.js:28 ~ handlelogin ~ values:", values);

    try {
      dispatch(authLoginShip({ ...values }));
    } catch (error) {
      console.log("🚀 ~ file: LoginPage.js:38 ~ handlelogin ~ error:", error);
    }
  };

  return (
    <div className="px-[238px] pb-[80px] pt-[80px] flex-grow">
      <div className="w-full max-w-[520px] my-[80px] px-6 pt-6 pb-[32px] bg-white shadow-2xl rounded-lg mx-auto">
        <h1 className="text-[32px] font-semibold text-gray9 mb-5 text-center">
          Shipper Login
        </h1>
        <div className="">
          <form action="" onSubmit={handleSubmit(handlelogin)}>
            <Input
              control={control}
              name="email"
              placeholder="Email"
              className="mb-3"
              error={errors.email?.message}
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

            <div className="flex items-start justify-between">
              <Checkbox
                name="remember"
                checked={acceptTerm}
                onClick={handleToggleTerm}
                value="remember"
              >
                Remember me
              </Checkbox>

              <Link to="/forgot-pass">
                <span className="text-gray6 text-sm font-medium">
                  Forgot Password
                </span>
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full text-sm"
              kind="primary"
              isLoading={loading}
            >
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ShipLoginPage;
