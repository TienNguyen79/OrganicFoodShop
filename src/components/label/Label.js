import React from "react";
import PropTypes from "prop-types";
const Label = ({ children, className = "" }) => {
  return (
    <div className={`text-gray9 font-semibold ${className}`}>{children}</div>
  );
};

Label.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};
export default Label;
