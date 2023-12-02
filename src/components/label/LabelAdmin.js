import React from "react";
import PropTypes from "prop-types";
const LabelAdmin = ({ children, className = "" }) => {
  return (
    <div
      className={`text-darkPrimary text-[25px] font-semibold uppercase ${className}`}
    >
      {children}
    </div>
  );
};

LabelAdmin.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};
export default LabelAdmin;
