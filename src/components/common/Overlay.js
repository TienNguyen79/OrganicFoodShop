import React from "react";

const Overlay = ({ open = "invisible", onClick = () => {} }) => {
  return (
    <div
      className={`fixed inset-0 bg-black  z-40 opacity-70 ${open}  `}
      onClick={onClick}
    ></div>
  );
};

export default Overlay;
