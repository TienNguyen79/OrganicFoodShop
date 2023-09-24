import React, { useState } from "react";
import LayoutAuth from "../layout/LayoutAuth";
import Input from "../components/input/Input";
import { useForm } from "react-hook-form";
import IconEyeToggle from "../components/Icons/IconEyeToggle";
import Button from "../components/button/Button";
import Checkbox from "../components/checkbox/Checkbox";
import useToggleValue from "../hooks/useToggleValue";

const RegisterPage = () => {
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
  const { value: showEye2, handleToggleValue: handleToggleEye2 } =
    useToggleValue();
  // console.log(
  //   "🚀 ~ file: RegisterPage.js:22 ~ RegisterPage ~ acceptTerm:",
  //   acceptTerm
  // );

  return (
    <LayoutAuth heading="Create Account" navName="Login" navLink="/login">
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
        <Input
          control={control}
          name="confirmPass"
          placeholder="Confirm Password"
          kind="eye"
          type={`${showEye2 ? "text" : "password"}`}
          className="mb-4"
        >
          <IconEyeToggle
            open={showEye2}
            onClick={handleToggleEye2}
          ></IconEyeToggle>
        </Input>

        <Checkbox
          name="term"
          checked={acceptTerm}
          onClick={handleToggleTerm}
          value="term"
        >
          Accept all terms & Conditions
        </Checkbox>

        <Button className="w-full text-sm" kind="primary">
          Create Account
        </Button>
      </form>
    </LayoutAuth>
  );
};

export default RegisterPage;
// import { useState } from "react";

// export default function useToggleValue(initialValue = false) {
//   const [value, setValue] = useState(initialValue);
//   const handleToggleValue = () => {
//     setValue(!value);
//   };
//   return {
//     value,
//     handleToggleValue,
//   };
// }
