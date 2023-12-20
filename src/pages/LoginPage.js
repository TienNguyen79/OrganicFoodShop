import React, { useEffect, useState } from "react";
import LayoutAuth from "../layout/LayoutAuth";
import { useForm } from "react-hook-form";
import useToggleValue from "../hooks/useToggleValue";
import Input from "../components/input/Input";
import IconEyeToggle from "../components/Icons/IconEyeToggle";
import Checkbox from "../components/checkbox/Checkbox";
import Button from "../components/button/Button";
import axios from "axios";
import fetchApiData1 from "../api/apiMethod1";
import { useDispatch, useSelector } from "react-redux";
import {
  authCheckToken,
  authGetStatus,
  authLogin,
} from "../store/auth/auth-slice";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { getToken } from "../utils/auth";
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

const LoginPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (getToken()) {
      navigate("/");
    }
  }, [navigate]);

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
  // const slug = useParams();
  // console.log("🚀 ~ file: LoginPage.js:53 ~ LoginPage ~ slug:", slug);

  const handlelogin = async (values) => {
    console.log("🚀 ~ file: LoginPage.js:28 ~ handlelogin ~ values:", values);

    try {
      dispatch(authLogin({ ...values }));
    } catch (error) {
      console.log("🚀 ~ file: LoginPage.js:38 ~ handlelogin ~ error:", error);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <LayoutAuth heading="Login" navName="Register" navLink="/register">
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
    </LayoutAuth>
  );
};

export default LoginPage;
