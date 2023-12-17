import React from "react";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../common/ErrorComponent";
import { Link } from "react-router-dom";
const FooterItem = ({
  title = "",
  label1 = "",
  label2 = "",
  label3 = "",
  label4 = "",
  link1 = "#",
  link2 = "#",
  link3 = "#",
  link4 = "#",
}) => {
  return (
    <div>
      <h1 className="text-white ">{title}</h1>
      <div className="text-gray4 text-sm flex flex-col gap-y-[12px] pt-5">
        <Link to={link1} className="hover:text-white cursor-pointer">
          {label1}
        </Link>
        <Link to={link2} className="hover:text-white cursor-pointer">
          {label2}
        </Link>
        <Link to={link3} className="hover:text-white cursor-pointer">
          {label3}
        </Link>
        <Link to={link4} className="hover:text-white cursor-pointer">
          {label4}
        </Link>
      </div>
    </div>
  );
};

FooterItem.propTypes = {
  title: PropTypes.string,
  label1: PropTypes.string,
  label2: PropTypes.string,
  label3: PropTypes.string,
  label4: PropTypes.string,
};

export default withErrorBoundary(FooterItem, {
  FallbackComponent: ErrorComponent,
});
