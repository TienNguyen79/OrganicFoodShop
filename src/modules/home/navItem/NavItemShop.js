import React from "react";

const fakeCategory = [
  {
    nameCate: "FreshFood",
    product: [
      { id: 1, name: "Đào" },
      { id: 2, name: "Táo " },
      { id: 3, name: "Cam" },
      { id: 4, name: "Ổi" },
    ],
  },
  {
    nameCate: "FreshFood2",
    product: [
      { id: 1, name: "Đào2" },
      { id: 2, name: "Táo2 " },
      { id: 3, name: "Cam2" },
      { id: 4, name: "Ổi2" },
    ],
  },
  {
    nameCate: "FreshFood3",
    product: [
      { id: 1, name: "Đào3" },
      { id: 2, name: "Táo3 " },
      { id: 3, name: "Cam4" },
      { id: 4, name: "Ổi5" },
    ],
  },
  {
    nameCate: "FreshFood4",
    product: [
      { id: 1, name: "Đào6" },
      { id: 2, name: "Táo 7" },
      { id: 3, name: "Cam8" },
      { id: 4, name: "Ổi7" },
    ],
  },
  {
    nameCate: "FreshFood4",
    product: [
      { id: 1, name: "Đào6" },
      { id: 2, name: "Táo 7" },
      { id: 3, name: "Cam8" },
      { id: 4, name: "Ổi7" },
    ],
  },
];

const NavItemShop = () => {
  return (
    <div className="absolute top-12 left-[-92px]  translate-y-8 invisible  transition-all opacity-0 duration-300 bg-white shadow-lg w-[73vw] group-hover:translate-y-0 group-hover:opacity-100  group-hover:visible">
      <div className="grid grid-cols-4 py-4 px-2">
        {fakeCategory.length > 0 &&
          fakeCategory.slice(0, 4).map((item, index) => (
            <div className="pl-[15px]" key={item.nameCate}>
              <h1 className="text-[16px] font-semibold text-gray-600 mb-3">
                {item.nameCate}
              </h1>
              <div className="flex flex-col justify-center gap-y-[10px]">
                {item.product.map((prod) => (
                  <span
                    className="text-sm font-normal text-[#232323]"
                    key={prod.id}
                  >
                    {prod.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default NavItemShop;
