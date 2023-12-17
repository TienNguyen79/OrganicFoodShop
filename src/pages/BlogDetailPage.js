import React, { useState } from "react";
import BlogFilterItem from "../modules/blog/BlogFilterItem";
import BlogImage from "../modules/blog/parts/BlogImage";
import BlogIcon from "../modules/blog/parts/BlogIcon";
import BlogLabel from "../modules/blog/parts/BlogLabel";
import BlogDesc from "../modules/blog/parts/BlogDesc";
import UserAvatar from "../modules/user/parts/UserAvatar";
import UserName from "../modules/user/parts/UserName";
import BlogDate2 from "../modules/blog/parts/BlogDate2";
import FieldBill from "../modules/cart/parts/FieldBill";
import Input from "../components/input/Input";
import { useForm } from "react-hook-form";
import TextArea from "../components/input/TextArea";
import Button from "../components/button/Button";
import UserCmtItem from "../modules/user/UserCmtItem";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  blogAddCmtNew,
  blogComment,
  blogGetAll,
  blogGetWithParam,
} from "../store/blog/blog-slice";
import parse from "html-react-parser";
import { getToken } from "../utils/auth";

const BlogDetailPage = () => {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  const dispatch = useDispatch();
  const { slug } = useParams();
  const [limit, setLimit] = useState(5);
  console.log(
    "🚀 ~ file: BlogDetailPage.js:45 ~ BlogDetailPage ~ limit:",
    limit
  );

  useEffect(() => {
    dispatch(blogGetWithParam(slug));
    dispatch(blogGetAll());
  }, [dispatch, slug]);

  useEffect(() => {
    dispatch(blogComment({ blog_id: slug, limit: limit }));
  }, [dispatch, limit, slug]);

  const { dataBlogWithParam, dataBlogAll, dataCommentBlog, loading } =
    useSelector((state) => state.blog);

  // const [dataCMT2, setDataCmt2] = useState([]);
  const [isLoadMore, setIsLoadMore] = useState(false);

  // Định dạng ngày và tháng
  const dateTimeString = dataBlogWithParam?.created_at;
  const date = new Date(dateTimeString);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  //XỬ LÝ THÊM CMT
  const handleCommentBlog = async (values) => {
    console.log(
      "🚀 ~ file: BlogDetailPage.js:52 ~ handleCommentBlog ~ values:",
      values
    );
    setIsLoadMore(false);
    // setDataCmt([...dataCMT]); // làm mới lại data xong mới thêm vào
    dispatch(
      blogAddCmtNew({
        blog_id: slug,
        content: values.message,
        limit: limit + 1,
      })
    );
    reset({});
  };

  //thực hiện validate khi chưa nhập cmt
  const [getCommentBlog, setCommentBlog] = useState("");
  //------------
  // const { user } = useSelector((state) => state.auth);
  // console.log("🚀 ~ file: BlogDetailPage.js:81 ~ BlogDetailPage ~ user:", user);

  // lúc mới vào khởi tao lại data cho đỡ trùng
  useEffect(() => {
    setLimit(5);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <div className=" mt-8">
        <BlogImage
          linkUrl={dataBlogWithParam?.image}
          className="w-full h-[350px] rounded-lg"
        ></BlogImage>
        <div className="mt-8">
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
              <BlogLabel
                label={dataBlogWithParam?.category?.name}
                className="text-gray7"
              ></BlogLabel>
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
                kind="whitespace-nowrap overflow-hidden overflow-ellipsis max-w-[300px]"
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
                number={dataBlogWithParam?.CmtNumber}
                label="comment"
                className="text-gray6"
              ></BlogLabel>
            </div>
          </div>

          <BlogDesc className="text-[32px] cursor-default">
            {dataBlogWithParam?.title}
          </BlogDesc>

          <div className="flex items-center justify-between pr-3 py-8 border-b-[1px]">
            <div className="flex items-center gap-x-2">
              <UserAvatar linkUrl="https://w7.pngwing.com/pngs/1019/187/png-transparent-computer-icons-avatar-encapsulated-postscript-avatar-heroes-hand-computer-thumbnail.png"></UserAvatar>
              <div>
                <UserName name="ADMIN"></UserName>
                <BlogDate2 date={formattedDate}></BlogDate2>
              </div>
            </div>
            <div className="flex items-center gap-x-4 cursor-pointer">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <g clipPath="url(#clip0_2392_11802)">
                    <path
                      d="M11.9976 2.98875H13.6409V0.12675C13.3574 0.08775 12.3824 0 11.2469 0C8.87764 0 7.25464 1.49025 7.25464 4.22925V6.75H4.64014V9.9495H7.25464V18H10.4601V9.95025H12.9689L13.3671 6.75075H10.4594V4.5465C10.4601 3.62175 10.7091 2.98875 11.9976 2.98875Z"
                      fill="#4D4D4D"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2392_11802">
                      <rect width={18} height={18} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M9.24471 0C4.31136 0 1.68774 3.16139 1.68774 6.60855C1.68774 8.20724 2.58103 10.2008 4.01097 10.8331C4.22811 10.931 4.34624 10.8894 4.39462 10.688C4.43737 10.535 4.62525 9.79807 4.71638 9.45042C4.74451 9.33904 4.72988 9.24229 4.63988 9.13766C4.16511 8.58864 3.78821 7.58847 3.78821 6.65017C3.78821 4.24594 5.69967 1.91146 8.9522 1.91146C11.7648 1.91146 13.7325 3.73854 13.7325 6.35204C13.7325 9.30529 12.1698 11.3484 10.1391 11.3484C9.0152 11.3484 8.17816 10.4663 8.44367 9.37505C8.76431 8.07561 9.39321 6.6783 9.39321 5.74113C9.39321 4.90072 8.91844 4.20544 7.94865 4.20544C6.80447 4.20544 5.87631 5.33837 5.87631 6.85943C5.87631 7.82585 6.21832 8.47838 6.21832 8.47838C6.21832 8.47838 5.08652 13.0506 4.87614 13.9045C4.52062 15.3502 4.92451 17.6914 4.95939 17.8928C4.98077 18.0042 5.10565 18.0391 5.1754 17.9479C5.28678 17.8017 6.65484 15.8497 7.03848 14.4389C7.17799 13.9248 7.75064 11.84 7.75064 11.84C8.12753 12.5207 9.21546 13.0911 10.3743 13.0911C13.8214 13.0911 16.3123 10.0613 16.3123 6.30141C16.2999 2.69675 13.215 0 9.24471 0Z"
                    fill="#4D4D4D"
                  />
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <g clipPath="url(#clip0_2392_11814)">
                    <path
                      d="M17.9822 5.29205C17.9401 4.33564 17.7854 3.67812 17.5639 3.10836C17.3353 2.50359 16.9837 1.96213 16.523 1.51201C16.0729 1.05489 15.5278 0.699691 14.9301 0.474702C14.357 0.253147 13.7029 0.0984842 12.7465 0.0563159C11.783 0.0105764 11.4771 0 9.03324 0C6.58941 0 6.28351 0.0105764 5.32354 0.0527447C4.36713 0.0949129 3.70961 0.249713 3.13999 0.471131C2.53508 0.699691 1.99362 1.05132 1.54351 1.51201C1.08639 1.96213 0.731322 2.50716 0.506195 3.10493C0.284641 3.67812 0.129978 4.33207 0.08781 5.28848C0.0420705 6.25203 0.0314941 6.55792 0.0314941 9.00176C0.0314941 11.4456 0.0420705 11.7515 0.0842387 12.7115C0.126407 13.6679 0.281207 14.3254 0.502762 14.8952C0.731322 15.4999 1.08639 16.0414 1.54351 16.4915C1.99362 16.9486 2.53865 17.3038 3.13642 17.5288C3.70961 17.7504 4.36356 17.905 5.3201 17.9472C6.27994 17.9895 6.58597 17.9999 9.0298 17.9999C11.4736 17.9999 11.7795 17.9895 12.7395 17.9472C13.6959 17.905 14.3534 17.7504 14.9231 17.5288C16.1327 17.0611 17.0892 16.1047 17.5568 14.8952C17.7783 14.322 17.9331 13.6679 17.9752 12.7115C18.0174 11.7515 18.028 11.4456 18.028 9.00176C18.028 6.55792 18.0244 6.25203 17.9822 5.29205ZM16.3613 12.6411C16.3226 13.5202 16.1749 13.9949 16.0518 14.3114C15.7494 15.0956 15.127 15.7179 14.3429 16.0204C14.0264 16.1434 13.5483 16.2911 12.6726 16.3297C11.7232 16.372 11.4385 16.3824 9.03681 16.3824C6.63514 16.3824 6.34684 16.372 5.40087 16.3297C4.52179 16.2911 4.04709 16.1434 3.73062 16.0204C3.34039 15.8761 2.98519 15.6476 2.69688 15.3487C2.398 15.0568 2.16944 14.7052 2.02521 14.315C1.90214 13.9985 1.75448 13.5202 1.71589 12.6447C1.67358 11.6953 1.66314 11.4104 1.66314 9.00876C1.66314 6.60709 1.67358 6.31878 1.71589 5.37295C1.75448 4.49387 1.90214 4.01917 2.02521 3.7027C2.16944 3.31234 2.398 2.95727 2.70045 2.66883C2.9922 2.36994 3.34383 2.14138 3.73419 1.99729C4.05066 1.87422 4.52893 1.72656 5.40444 1.68783C6.35384 1.64566 6.63872 1.63508 9.04024 1.63508C11.4455 1.63508 11.7302 1.64566 12.6762 1.68783C13.5553 1.72656 14.03 1.87422 14.3464 1.99729C14.7367 2.14138 15.0919 2.36994 15.3802 2.66883C15.6791 2.96071 15.9076 3.31234 16.0518 3.7027C16.1749 4.01917 16.3226 4.49731 16.3613 5.37295C16.4035 6.32236 16.414 6.60709 16.414 9.00876C16.414 11.4104 16.4035 11.6917 16.3613 12.6411Z"
                      fill="#4D4D4D"
                    />
                    <path
                      d="M9.03337 4.37793C6.48061 4.37793 4.40942 6.44898 4.40942 9.00188C4.40942 11.5548 6.48061 13.6258 9.03337 13.6258C11.5863 13.6258 13.6573 11.5548 13.6573 9.00188C13.6573 6.44898 11.5863 4.37793 9.03337 4.37793ZM9.03337 12.0013C7.37727 12.0013 6.03393 10.6581 6.03393 9.00188C6.03393 7.34564 7.37727 6.00244 9.03337 6.00244C10.6896 6.00244 12.0328 7.34564 12.0328 9.00188C12.0328 10.6581 10.6896 12.0013 9.03337 12.0013Z"
                      fill="#4D4D4D"
                    />
                    <path
                      d="M14.9199 4.19472C14.9199 4.79084 14.4365 5.2742 13.8402 5.2742C13.2441 5.2742 12.7607 4.79084 12.7607 4.19472C12.7607 3.59845 13.2441 3.11523 13.8402 3.11523C14.4365 3.11523 14.9199 3.59845 14.9199 4.19472Z"
                      fill="#4D4D4D"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2392_11814">
                      <rect width={18} height={18} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={21}
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    d="M5.83325 7.16667C4.9492 7.16667 4.10135 7.51786 3.47623 8.14298C2.85111 8.7681 2.49992 9.61594 2.49992 10.5C2.49992 11.3841 2.85111 12.2319 3.47623 12.857C4.10135 13.4821 4.9492 13.8333 5.83325 13.8333H7.49992C7.72093 13.8333 7.93289 13.9211 8.08917 14.0774C8.24545 14.2337 8.33325 14.4457 8.33325 14.6667C8.33325 14.8877 8.24545 15.0996 8.08917 15.2559C7.93289 15.4122 7.72093 15.5 7.49992 15.5H5.83325C4.50717 15.5 3.2354 14.9732 2.29772 14.0355C1.36004 13.0979 0.833252 11.8261 0.833252 10.5C0.833252 9.17392 1.36004 7.90215 2.29772 6.96447C3.2354 6.02678 4.50717 5.5 5.83325 5.5H7.49992C7.72093 5.5 7.93289 5.5878 8.08917 5.74408C8.24545 5.90036 8.33325 6.11232 8.33325 6.33333C8.33325 6.55435 8.24545 6.76631 8.08917 6.92259C7.93289 7.07887 7.72093 7.16667 7.49992 7.16667H5.83325ZM11.6666 6.33333C11.6666 6.11232 11.7544 5.90036 11.9107 5.74408C12.0669 5.5878 12.2789 5.5 12.4999 5.5H14.1666C15.4927 5.5 16.7644 6.02678 17.7021 6.96447C18.6398 7.90215 19.1666 9.17392 19.1666 10.5C19.1666 11.8261 18.6398 13.0979 17.7021 14.0355C16.7644 14.9732 15.4927 15.5 14.1666 15.5H12.4999C12.2789 15.5 12.0669 15.4122 11.9107 15.2559C11.7544 15.0996 11.6666 14.8877 11.6666 14.6667C11.6666 14.4457 11.7544 14.2337 11.9107 14.0774C12.0669 13.9211 12.2789 13.8333 12.4999 13.8333H14.1666C15.0506 13.8333 15.8985 13.4821 16.5236 12.857C17.1487 12.2319 17.4999 11.3841 17.4999 10.5C17.4999 9.61594 17.1487 8.7681 16.5236 8.14298C15.8985 7.51786 15.0506 7.16667 14.1666 7.16667H12.4999C12.2789 7.16667 12.0669 7.07887 11.9107 6.92259C11.7544 6.76631 11.6666 6.55435 11.6666 6.33333ZM5.83325 10.5C5.83325 10.279 5.92105 10.067 6.07733 9.91074C6.23361 9.75446 6.44557 9.66667 6.66658 9.66667H13.3333C13.5543 9.66667 13.7662 9.75446 13.9225 9.91074C14.0788 10.067 14.1666 10.279 14.1666 10.5C14.1666 10.721 14.0788 10.933 13.9225 11.0893C13.7662 11.2455 13.5543 11.3333 13.3333 11.3333H6.66658C6.44557 11.3333 6.23361 11.2455 6.07733 11.0893C5.92105 10.933 5.83325 10.721 5.83325 10.5Z"
                    fill="#4D4D4D"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        {dataBlogWithParam?.content && (
          <div className="entry-content mt-6 ">
            {parse(dataBlogWithParam?.content[0] || "")}
          </div>
        )}

        <div className="mt-10">
          <h1 className="text-gray9 text-[20px] font-medium py-4">
            Leave a Comment
          </h1>
          {getToken() ? (
            <form onSubmit={handleSubmit(handleCommentBlog)}>
              <div className="flex flex-col gap-y-2">
                <span className="text-gray9 text-sm font-medium">Message</span>
                <TextArea
                  control={control}
                  name="message"
                  placeholder="Write your comment here…"
                  setCommentBlog={setCommentBlog}
                ></TextArea>
              </div>
              <Button
                kind={getCommentBlog === "" ? "disable" : "primary"}
                type="submit"
                className="mt-6 w-[200px]"
                disabled={getCommentBlog === "" ? true : false}
                isLoading={loading}
              >
                Post Comments
              </Button>
            </form>
          ) : (
            <h1>
              Please{" "}
              <Link to={"/login"} className="text-primary hover:opacity-80">
                login
              </Link>{" "}
              to comment
            </h1>
          )}
        </div>
        <div className="my-10">
          <h1 className="text-gray9 text-[20px] font-medium py-4">Comments</h1>
          <div>
            {dataCommentBlog?.comment?.length > 0 ? (
              dataCommentBlog?.comment?.map((item, index) => (
                <UserCmtItem
                  key={index}
                  data={item}
                  limit={limit}
                  loading={loading}
                ></UserCmtItem>
              ))
            ) : (
              <span>Be the first to comment on this blog...</span>
            )}
          </div>
        </div>
        {dataCommentBlog?.comment?.length > 4 &&
        dataCommentBlog?.comment?.length < dataCommentBlog?.count ? (
          <Button
            kind="secondary"
            onClick={() => {
              setIsLoadMore(true);
              setLimit(() => limit + 3);
            }}
          >
            Load More
          </Button>
        ) : (
          dataCommentBlog?.comment?.length > 5 &&
          dataCommentBlog?.comment?.length === dataCommentBlog?.count && (
            <Button
              kind="secondary"
              className="!text-white !bg-[#2388FF]"
              onClick={() => {
                setLimit(5);
              }}
            >
              Load Less
            </Button>
          )
        )}
      </div>
      {/* <div className="col-span-1 mt-8">
        <BlogFilterItem result={dataBlogAll}></BlogFilterItem>
      </div> */}
    </div>
  );
};

export default BlogDetailPage;
