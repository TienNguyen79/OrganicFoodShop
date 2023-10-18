import React from "react";

const ProReview = ({ number = 4 }) => {
  return (
    <div className="flex items-center text-gray6 text-sm font-normal gap-x-1 relative top-[3px]">
      <span>{number}</span>
      <span>Review</span>
    </div>
  );
};

export default ProReview;
