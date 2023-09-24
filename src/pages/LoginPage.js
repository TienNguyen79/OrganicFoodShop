import React from "react";
import LayoutAuth from "../layout/LayoutAuth";
import { useForm } from "react-hook-form";
import useToggleValue from "../hooks/useToggleValue";
import Input from "../components/input/Input";
import IconEyeToggle from "../components/Icons/IconEyeToggle";
import Checkbox from "../components/checkbox/Checkbox";
import Button from "../components/button/Button";

const LoginPage = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { isValid, isSubmitting, errors },
    watch,
  } = useForm({
    mode: "onChange",
  });

  const { value: acceptTerm, handleToggleValue: handleToggleTerm } =
    useToggleValue();

  const { value: showEye, handleToggleValue: handleToggleEye } =
    useToggleValue();

  return (
    <LayoutAuth heading="Login" navName="Register" navLink="/register">
      <form action="">
        <Input
          control={control}
          name="email"
          placeholder="Email"
          className="mb-3"
        ></Input>
        <Input
          control={control}
          name="password"
          placeholder="Password"
          kind="eye"
          type={`${showEye ? "text" : "password"}`}
          className="mb-3"
        >
          <IconEyeToggle
            open={showEye}
            onClick={handleToggleEye}
          ></IconEyeToggle>
        </Input>

        <Checkbox
          name="remember"
          checked={acceptTerm}
          onClick={handleToggleTerm}
          value="remember"
        >
          Remember me
        </Checkbox>

        <Button className="w-full text-sm" kind="primary">
          Login
        </Button>
      </form>
    </LayoutAuth>
  );
};

export default LoginPage;
