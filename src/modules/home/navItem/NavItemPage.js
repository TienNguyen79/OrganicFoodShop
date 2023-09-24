import React from "react";

const NavItemPage = () => {
  return (
    <div className="absolute top-12  invisible translate-y-8  transition-all opacity-0 duration-300  group-hover:block bg-white shadow-lg w-[200px] group-hover:translate-y-0 group-hover:opacity-100  group-hover:visible">
      <ul className="p-[15px] flex flex-col gap-y-3">
        <span className="text-sm text-gray-500 font-normal ">NavItemPage</span>
        <span className="text-sm text-gray-500 font-normal ">NavItemPage</span>
        <span className="text-sm text-gray-500 font-normal ">NavItemPage</span>
        <span className="text-sm text-gray-500 font-normal ">NavItemPage</span>
      </ul>
    </div>
  );
};

export default NavItemPage;
