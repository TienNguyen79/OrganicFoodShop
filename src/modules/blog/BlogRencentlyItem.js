import React from "react";
import BlogImage from "./parts/BlogImage";
import BlogDesc from "./parts/BlogDesc";
import BlogDate2 from "./parts/BlogDate2";
import { convertDate } from "../../constants/global";

const BlogRencentlyItem = ({ item }) => {
  return (
    <div className="flex items-center gap-x-2 mt-4 mb-6">
      <BlogImage
        className="w-[100px] h-[77px] rounded-lg"
        linkUrl={item?.image}
      ></BlogImage>
      <div className="flex flex-col flex-1 ">
        <BlogDesc className="text-[16px] mb-2 text-gray-600 !font-medium  multiline-ellipsis ">
          {item?.title}
        </BlogDesc>
        <BlogDate2 date={convertDate(item?.created_at)} icon={true}></BlogDate2>
      </div>
    </div>
  );
};

export default BlogRencentlyItem;
