import React from "react";
import { useController } from "react-hook-form";

const Checkbox = ({
  checked = false,
  onClick = () => {},
  name = "",
  value,
  children,
  control,
}) => {
  return (
    <div className="flex items-start gap-x-5">
      <div
        className={`inline-flex items-center justify-center  text-white  w-5 h-5 border rounded  cursor-pointer mb-5 ${
          checked ? "bg-primary border-primary " : "border-strock"
        }`}
        onClick={onClick}
      >
        <input
          type="checkbox"
          className="hidden"
          value={value}
          onChange={() => {}}
          name={name}
        />

        <span className={`${checked ? "" : "opacity-0 invisible"}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5  dark:text-white "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </span>
      </div>
      {children && (
        <div
          onClick={onClick}
          className="cursor-pointer text-sm font-normal text-gray6"
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Checkbox;
