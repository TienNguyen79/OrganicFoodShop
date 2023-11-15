import React from "react";

const LabelField = ({ label = "text1" }) => {
  return <span className="block text-gray9 text-sm font-normal">{label}</span>;
};

export default LabelField;
