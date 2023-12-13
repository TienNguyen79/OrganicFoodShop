import moment from "moment";
import IconStarGray from "../components/Icons/IconStarGray";
import IconStarYellow from "../components/Icons/IconStarYellow";

export const defaultImage =
  "https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg";

export const defaultImage2 =
  "https://images.unsplash.com/photo-1690619354359-275436bb0e7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80";

export const defaultImage3 =
  "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80";

export const dataRating = [
  {
    id: 1,
    stars: [
      <IconStarYellow></IconStarYellow>,
      <IconStarGray></IconStarGray>,
      <IconStarGray></IconStarGray>,
      <IconStarGray></IconStarGray>,
      <IconStarGray></IconStarGray>,
    ],
  },
  {
    id: 2,
    stars: [
      <IconStarYellow></IconStarYellow>,
      <IconStarYellow></IconStarYellow>,
      <IconStarGray></IconStarGray>,
      <IconStarGray></IconStarGray>,
      <IconStarGray></IconStarGray>,
    ],
  },
  {
    id: 3,
    stars: [
      <IconStarYellow></IconStarYellow>,
      <IconStarYellow></IconStarYellow>,
      <IconStarYellow></IconStarYellow>,
      <IconStarGray></IconStarGray>,
      <IconStarGray></IconStarGray>,
    ],
  },
  {
    id: 4,
    stars: [
      <IconStarYellow></IconStarYellow>,
      <IconStarYellow></IconStarYellow>,
      <IconStarYellow></IconStarYellow>,
      <IconStarYellow></IconStarYellow>,
      <IconStarGray></IconStarGray>,
    ],
  },
  {
    id: 5,
    stars: [
      <IconStarYellow></IconStarYellow>,
      <IconStarYellow></IconStarYellow>,
      <IconStarYellow></IconStarYellow>,
      <IconStarYellow></IconStarYellow>,
      <IconStarYellow></IconStarYellow>,
    ],
  },
];
//convertDate
export const convertDate = (data) => {
  const dateTimeString = data;
  const date = new Date(dateTimeString);
  const options = { year: "numeric" };
  const options2 = { month: "long" };
  const options3 = { day: "numeric" };
  return (
    date.toLocaleDateString("en-US", options3) +
    " " +
    date.toLocaleDateString("en-US", options2).slice(0, 3) +
    ", " +
    date.toLocaleDateString("en-US", options)
  );
};
//datetime
export const convertDateTime = (data) => {
  const createdAt = data;
  const formattedDate = moment(createdAt).format("DD MMM,YYYY HH:mm");
  return formattedDate;
};

//convertStatus
export const convertStatus = (data) => {
  switch (data) {
    case "0":
      return (
        <span className="block py-2 px-[8px] rounded-md text-center text-sm bg-[#fff4d9] text-[#ffb400]">
          Wait for confirm
        </span>
      );
    case "1":
      return (
        <span className="block py-2 px-[8px] rounded-md text-center text-sm bg-[#eee6ff] text-[#9055fd]">
          Order received
        </span>
      );
    case "2":
      return (
        <span className="block py-2 px-[8px] rounded-md text-center text-sm bg-[#dcf3ff] text-[#16b1ff]">
          Processing
        </span>
      );
    case "3":
      return (
        <span className="block py-2 px-[8px] rounded-md text-center text-sm bg-[#ecd9f7] text-[#ca0094]">
          On the way
        </span>
      );
    case "4":
      return (
        <span className="block py-2 px-[8px] rounded-md text-center text-sm  bg-[#e6f7d9] text-[#56ca00]">
          Delivered
        </span>
      );
    case "5":
      return (
        <span className="block py-2 px-[8px] rounded-md text-center text-sm bg-[#ffe4e5] text-[#ff4c51]">
          Canceled
        </span>
      );
    default:
      break;
  }
};

// status user

export const convertUserStatus = (status) => {
  switch (status) {
    case 0:
      return (
        <span className="block py-2 px-[8px] rounded-md text-center text-sm bg-[#e6f7d9] text-[#56ca00]">
          Active
        </span>
      );
    case 1:
      return (
        <span className="block py-2 px-[8px] rounded-md text-center text-sm bg-[#ffe4e5] text-[#ff4c51]">
          Banned
        </span>
      );
    default:
      break;
  }
};

export const convertStockStatus = (stock) => {
  switch (stock) {
    case false:
      return (
        <span className="block py-2 px-[8px] rounded-md text-center text-sm bg-[#e6f7d9] text-[#56ca00]">
          InStock
        </span>
      );
    case true:
      return (
        <span className="block py-2 px-[8px] rounded-md text-center text-sm bg-[#ffe4e5] text-[#ff4c51]">
          Out of Stock
        </span>
      );
    default:
      break;
  }
};

//ROLE

export const userRole = {
  USER: 1,
  ADMIN: 2,
  SHIPPER: 3,
};

export const userStatus = {
  ACTIVE: 0,
  BAN: 1,
};
