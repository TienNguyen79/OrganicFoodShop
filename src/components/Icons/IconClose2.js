import React from "react";

const IconClose2 = ({ onClick = () => {} }) => {
  return (
    <span onClick={onClick} className="cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
      >
        <g clipPath="url(#clip0_629_6652)">
          <path
            d="M12 23C18.0748 23 23 18.0748 23 12C23 5.92525 18.0748 1 12 1C5.92525 1 1 5.92525 1 12C1 18.0748 5.92525 23 12 23Z"
            stroke="#CCCCCC"
            strokeMiterlimit={10}
          />
          <path
            d="M16 8L8 16"
            stroke="#666666"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 16L8 8"
            stroke="#666666"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_629_6652">
            <rect width={24} height={24} fill="white" />
          </clipPath>
        </defs>
      </svg>
    </span>
  );
};

export default IconClose2;
