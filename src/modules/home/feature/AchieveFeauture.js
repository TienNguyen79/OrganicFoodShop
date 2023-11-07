import React from "react";

const AchieveFeauture = () => {
  return (
    <div className="grid grid-cols-4 gap-x-6">
      <div className="bg-white bg-opacity-60 py-10 rounded-lg flex flex-col justify-center items-center">
        <h1 className="text-primary text-[40px] font-light">37+</h1>
        <span className="block text-[#FFF] text-[18px]">
          Years of Hard Work
        </span>
      </div>
      <div className="bg-white bg-opacity-60 py-10 rounded-lg flex flex-col justify-center items-center">
        <h1 className="text-primary text-[40px] font-light">500K+</h1>
        <span className="block text-[#FFF] text-[18px]">Customer</span>
      </div>
      <div className="bg-white bg-opacity-60 py-10 rounded-lg flex flex-col justify-center items-center">
        <h1 className="text-primary text-[40px] font-light">2</h1>
        <span className="block text-[#FFF] text-[18px]">
          Qualified Team Member
        </span>
      </div>
      <div className="bg-white bg-opacity-60 py-10 rounded-lg flex flex-col justify-center items-center">
        <h1 className="text-primary text-[40px] font-light">5K+</h1>
        <span className="block text-[#FFF] text-[18px]">Monthly Orders</span>
      </div>
    </div>
  );
};

export default AchieveFeauture;
