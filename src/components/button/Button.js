import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Button = ({
  type = "button",
  children,
  className = "",
  isLoading = false,
  ...rest
}) => {
  const child = !!isLoading ? (
    <img src="/Spin-1s-200px.svg" className="loadingsvg" alt="loading" />
  ) : (
    children
  );

  let defaultClassName =
    "flex justify-center items-center  py-[14px] px-[32px] font-semibold  "; //nhớ có dấu cách ở cuối

  switch (rest.kind) {
    case "primary":
      defaultClassName =
        defaultClassName + "bg-primary text-[#FFF] rounded-[43px]";
      break;
    case "secondary":
      defaultClassName =
        defaultClassName + "bg-greenGray1 text-primary rounded-[43px]";
      break;
    case "disable":
      defaultClassName =
        defaultClassName + "bg-gray5_1 text-gray3 rounded-[43px]";
      break;
    case "ghost":
      defaultClassName =
        defaultClassName + "bg-primary text-[#FFF] rounded-[6px]";
      break;
    default:
      break;
  }
  if (rest.href)
    return (
      <Link to={rest.href} className={`${defaultClassName} ${className}`}>
        {child}
      </Link>
    );
  return (
    <button
      type={type}
      {...rest}
      className={`${defaultClassName} ${
        !!isLoading ? "opacity-50 pointer-events-none select-none" : ""
      } ${className}`}
    >
      {child}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  href: PropTypes.string,
  kind: PropTypes.oneOf(["primary", "secondary", "disable", "ghost"]),
};

export default Button;
