import React from "react";
import LayoutDetail from "../layout/LayoutDetail";
import Button from "../components/button/Button";

const NotFoundPage = () => {
  return (
    <div className="pt-[80px] flex flex-col justify-center items-center ">
      <img src="/notfound.png" className="mb-[32px]" alt="notfound" />
      <h1 className="text-[40px] font-semibold text-gray9 mb-5">
        Oops! page not found
      </h1>
      <p className="text-gray-500 text-[16px] font-normal w-[612px] text-center mb-[24px]">
        Sorry but the page you are looking for does not exist, have been
        removed, name changed or is temporarity unavailable
      </p>
      <Button kind="primary" href="/">
        Back to Home
      </Button>
    </div>
  );
};

export default NotFoundPage;
