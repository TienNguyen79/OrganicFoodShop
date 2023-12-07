import React, { useEffect } from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../common/ErrorComponent";
import { debounce } from "lodash";
const Input = (props) => {
  const {
    control,
    name,
    type = "text",
    error = "",
    placeholder = "",
    children,
    className,
    kind = "search",
    cssEye = "",
    min,
    max,
    setNameCustomer,
    setNameCate,
    setAdNamePro,
    handleFilterChangeDebounced,
    ...rest
  } = props;

  const { field } = useController({
    control,
    name,
    defaultValue: "",
    mode: "onChange",
  });
  // console.log(error);

  const debouncedSetName = debounce((text) => {
    setNameCustomer && setNameCustomer(text);
    setNameCate && setNameCate(text);
    setAdNamePro && setAdNamePro(text);
  }, 300);

  useEffect(() => {
    const text = field.value;
    debouncedSetName(text);
    return () => {
      debouncedSetName.cancel();
    };
  }, [field.value, debouncedSetName]);

  return (
    <div>
      <div className="relative">
        <input
          type={type}
          id={name}
          min={min}
          max={max}
          className={`py-3 px-4 w-full border font-medium  rounded-md placeholder:text-text4 dark:placeholder:text-text2 ${className} dark:text-white text-text1 ${
            error
              ? "border-danger "
              : "border-strock dark: dark:border-darkStroke"
          } ${
            children && kind === "eye"
              ? "pr-16"
              : children && kind === "search"
              ? "pl-12"
              : ""
          } dark:bg-darkSecondary`}
          placeholder={error.length > 0 ? "" : placeholder}
          {...rest}
          {...field}
        />

        {children && kind === "eye" && (
          <span
            className={`absolute top-2/4 right-6 -translate-y-3/4   select-none cursor-pointer ${cssEye}`}
          >
            {children}
          </span>
        )}

        {kind === "search" && children && (
          <span className="absolute top-2/4 left-4 -translate-y-2/4 select-none cursor-pointer ">
            {children}
          </span>
        )}
      </div>

      {error.length > 0 && (
        <span className=" block mt-4 text-[14px] font-medium text-danger top-2/4 left-6 -translate-y-2/4 pointer-events-none error-input ">
          {error}
        </span>
      )}
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  control: PropTypes.any.isRequired,
};
export default withErrorBoundary(Input, {
  FallbackComponent: ErrorComponent,
});
