import React from "react";
import IconMinus from "../../../components/Icons/IconMinus";
import IconPlus from "../../../components/Icons/IconPlus";
import Input from "../../../components/input/Input";
import { useForm } from "react-hook-form";
import { useState } from "react";

const ProHandleQuantity = () => {
  const [quantity, setQuantity] = useState(0);
  console.log(
    "🚀 ~ file: ProHandleQuantity.js:14 ~ ProHandleQuantity ~ quantity:",
    quantity
  );

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrease = () => {
    if (quantity <= 0) return;
    setQuantity(quantity - 1);
  };

  return (
    <div className="flex items-center gap-x-2 rounded-[170px] p-2 border-[2px]">
      <span
        className="block bg-gray-200 rounded-full p-[10px] cursor-pointer"
        onClick={handleDecrease}
      >
        <IconMinus></IconMinus>
      </span>
      <input
        value={quantity}
        className="w-[40px] text-center"
        onChange={(e) => {
          const newValue = parseInt(e.target.value, 10) || "";
          setQuantity(newValue);
        }}
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
