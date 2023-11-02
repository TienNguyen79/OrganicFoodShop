import React from "react";

const BlogDate2 = ({
  icon = false,
  date = "Apr 25, 2021",
  className = "text-sm",
}) => {
  if (icon) {
    return (
      <div className="flex items-center gap-x-2">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={19}
            viewBox="0 0 18 19"
            fill="none"
          >
            <path
              d="M14.25 3.5H3.75C2.92157 3.5 2.25 4.17157 2.25 5V15.5C2.25 16.3284 2.92157 17 3.75 17H14.25C15.0784 17 15.75 16.3284 15.75 15.5V5C15.75 4.17157 15.0784 3.5 14.25 3.5Z"
              stroke="#00B307"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 2V5"
              stroke="#00B307"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 2V5"
              stroke="#00B307"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.25 8H15.75"
              stroke="#00B307"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className={`text-gray6 font-normal ${className}`}>{date}</span>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-x-2">
      <span className="text-gray6 font-normal">{date}</span>
    </div>
  );
};

export default BlogDate2;
