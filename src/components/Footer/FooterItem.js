import React from "react";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../common/ErrorComponent";
const FooterItem = ({
  title = "",
  label1 = "",
  label2 = "",
  label3 = "",
  label4 = "",
}) => {
  return (
    <div>
      <h1 className="text-white ">{title}</h1>
      <div className="text-gray4 text-sm flex flex-col gap-y-[12px] pt-5">
        <span className="hover:text-white cursor-pointer">{label1}</span>
        <span className="hover:text-white cursor-pointer">{label2}</span>
        <span className="hover:text-white cursor-pointer">{label3}</span>
        <span className="hover:text-white cursor-pointer">{label4}</span>
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
