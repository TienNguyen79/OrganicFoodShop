import React from "react";
import { useController } from "react-hook-form";

const TextArea = (props) => {
  const { control, name, placeholder = "", children, ...rest } = props;

  const { field } = useController({
    control,
    name,
    defaultValue: "",
    mode: "onSubmit",
  });
  return (
    <textarea
      className="py-4 px-6 w-full min-h-[141px] outline-none resize-none border font-medium  rounded-xl placeholder:text-text4 dark:placeholder:text-text2 dark:text-white text-text1"
      placeholder={placeholder}
      id={name}
      {...rest}
      {...field}
    ></textarea>
  );
};

export default TextArea;
