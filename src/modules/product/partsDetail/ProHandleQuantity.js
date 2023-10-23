import React from "react";
import IconMinus from "../../../components/Icons/IconMinus";
import IconPlus from "../../../components/Icons/IconPlus";
import Input from "../../../components/input/Input";
import { useController, useForm } from "react-hook-form";
import { useState } from "react";

const ProHandleQuantity = ({ control, name }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: 0,
  });
  const handleIncrease = () => {
    // Lấy giá trị hiện tại của trường nhập liệu thông qua field
    const currentQuantity = field.value;
    const newQuantity = parseInt(currentQuantity, 10) + 1;
    field.onChange(newQuantity);
  };

  const handleDecrease = () => {
    const currentQuantity = field.value;
    if (currentQuantity > 0) {
      const newQuantity = parseInt(currentQuantity, 10) - 1;
      field.onChange(newQuantity);
    }
  };

  return (
    <div className="inline-flex items-center gap-x-2 rounded-[170px] p-2 border-[2px]">
      <span
        className="block bg-gray-200 rounded-full p-[10px] cursor-pointer"
        onClick={handleDecrease}
      >
        <IconMinus></IconMinus>
      </span>
      <input
        value={field.value}
        className="w-[40px] text-center"
        onChange={field.onChange}
        {...field}
      ></input>
      <span
        className="block bg-gray-200 rounded-full p-[10px] cursor-pointer"
        onClick={handleIncrease}
      >
        <IconPlus></IconPlus>
      </span>
    </div>
  );
};

export default ProHandleQuantity;
