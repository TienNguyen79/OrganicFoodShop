import React from "react";
import BlogImage from "./parts/BlogImage";
import BlogLabel from "./parts/BlogLabel";
import BlogIcon from "./parts/BlogIcon";
import BlogDesc from "./parts/BlogDesc";
import LabelRedirect from "../../components/label/LabelRedirect";
import BlogDate from "./parts/BlogDate";

const BlogItem = () => {
  return (
    <div className="relative">
      <BlogImage></BlogImage>
      <div className="p-4 bg-white rounded-b-lg">
        <div className="flex gap-x-3 mb-1 ">
          <div className="flex gap-x-1">
            <BlogIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={21}
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  d="M17.1587 11.6748L11.1837 17.6498C11.0289 17.8048 10.8451 17.9277 10.6427 18.0116C10.4404 18.0955 10.2235 18.1386 10.0045 18.1386C9.78547 18.1386 9.56859 18.0955 9.36626 18.0116C9.16393 17.9277 8.98011 17.8048 8.82533 17.6498L1.66699 10.4998V2.1665H10.0003L17.1587 9.32484C17.4691 9.63711 17.6433 10.0595 17.6433 10.4998C17.6433 10.9401 17.4691 11.3626 17.1587 11.6748V11.6748Z"
                  stroke="#B3B3B3"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.83398 6.33301H5.84232"
                  stroke="#B3B3B3"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </BlogIcon>
            <BlogLabel label="Food" className="text-gray7"></BlogLabel>
          </div>
          <div className="flex gap-x-1">
            <BlogIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={21}
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  d="M9.99935 9.66667C11.8403 9.66667 13.3327 8.17428 13.3327 6.33333C13.3327 4.49238 11.8403 3 9.99935 3C8.1584 3 6.66602 4.49238 6.66602 6.33333C6.66602 8.17428 8.1584 9.66667 9.99935 9.66667Z"
                  stroke="#B3B3B3"
                  strokeWidth="1.2"
                />
                <path
                  d="M12.4997 12.1665H7.4997C5.19804 12.1665 3.1372 14.2915 4.65137 16.024C5.68137 17.2023 7.3847 17.9998 9.9997 17.9998C12.6147 17.9998 14.3172 17.2023 15.3472 16.024C16.8622 14.2907 14.8005 12.1665 12.4997 12.1665Z"
                  stroke="#B3B3B3"
                  strokeWidth="1.2"
                />
              </svg>
            </BlogIcon>
            <BlogLabel
              label="By Admin"
              kind="whitespace-nowrap overflow-hidden overflow-ellipsis max-w-[50px]"
              className="text-gray5"
            ></BlogLabel>
          </div>
          <div className="flex gap-x-1">
            <BlogIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={19}
                viewBox="0 0 18 19"
                fill="none"
              >
                <path
                  d="M10.5238 14.2728L9.48206 16.0087C9.43209 16.092 9.36139 16.1609 9.27687 16.2088C9.19234 16.2566 9.09686 16.2818 8.99972 16.2818C8.90258 16.2818 8.8071 16.2566 8.72257 16.2088C8.63804 16.1609 8.56735 16.092 8.51738 16.0087L7.47675 14.2728C7.42671 14.1895 7.35596 14.1206 7.27138 14.0728C7.1868 14.025 7.09128 13.9999 6.99413 14H2.8125C2.66332 14 2.52024 13.9407 2.41475 13.8352C2.30926 13.7298 2.25 13.5867 2.25 13.4375V4.4375C2.25 4.28832 2.30926 4.14524 2.41475 4.03975C2.52024 3.93426 2.66332 3.875 2.8125 3.875H15.1875C15.3367 3.875 15.4798 3.93426 15.5852 4.03975C15.6907 4.14524 15.75 4.28832 15.75 4.4375V13.4375C15.75 13.5867 15.6907 13.7298 15.5852 13.8352C15.4798 13.9407 15.3367 14 15.1875 14H11.0059C10.9088 14 10.8134 14.0252 10.7289 14.073C10.6445 14.1208 10.5738 14.1896 10.5238 14.2728V14.2728Z"
                  stroke="#B3B3B3"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </BlogIcon>
            <BlogLabel
              number="65"
              label="comment"
              className="text-gray6"
            ></BlogLabel>
          </div>
        </div>

        <BlogDesc>
          Curabitur porttitor orci eget neque accumsan venenatis. Nunc
          fermentum.
        </BlogDesc>

        <LabelRedirect
          className="text-[14px] font-semibold"
          title="Read More"
        ></LabelRedirect>
      </div>

      <BlogDate className="bottom-16 -translate-y-20 left-4"></BlogDate>
    </div>
  );
};

export default BlogItem;
