import React from "react";
import BlogImage from "./parts/BlogImage";
import BlogDesc from "./parts/BlogDesc";
import BlogDate2 from "./parts/BlogDate2";

const BlogRencentlyItem = () => {
  return (
    <div className="flex items-center gap-x-2 mt-4 mb-6">
      <BlogImage className="w-[100px] h-[77px] rounded-lg"></BlogImage>
      <div className="flex flex-col flex-1 ">
        <BlogDesc className="text-[16px] mb-2 !font-normal multiline-ellipsis ">
          Curabitur porttitor orci eget nequ accumsan.
        </BlogDesc>
        <BlogDate2 icon={true}></BlogDate2>
      </div>
    </div>
  );
};

export default BlogRencentlyItem;
