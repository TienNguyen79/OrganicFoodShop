import axios from "../../api/axios";
import { getToken } from "../../utils/auth";

export const requestCartAll = (token) => {
  const decodedToken = atob(token); //giải mã base64
  if (!decodedToken) return;
  return axios.get("/api/cart", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${decodedToken}`,
    },
  });
};
//thêm
export const requestCartAddnew = (data) => {
  const decodedToken = atob(data.token); //giải mã base64
  if (!decodedToken) return;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${decodedToken}`,
    },
  };

  return axios.post("/api/cartItem", data, config);
};
//xóa
export const requestCartDelete = (id) => {
  const decodedToken = atob(getToken()); //giải mã base64
  if (!decodedToken) return;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${decodedToken}`,
    },
  };

  return axios.delete(`/api/cartItem/${id}`, config);
};
//sửa
export const requestCartUpdate = (data) => {
  const decodedToken = atob(getToken()); //giải mã base64
  if (!decodedToken) return;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${decodedToken}`,
    },
  };

  return axios.put(`/api/cartItem/${data.id}`, data, config);
};

//wishList

export const requestWishListAll = (token) => {
  console.log(
    "🚀 ~ file: cart-requests.js:60 ~ requestWishListAll ~ token:",
    token
  );
  const decodedToken = atob(token); //giải mã base64
  if (!decodedToken) return;
  return axios.get("/api/wish_list", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${decodedToken}`,
    },
  });
};

export const requestWishListAddnew = (id) => {
  const decodedToken = atob(getToken()); //giải mã base64
  if (!decodedToken) return;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${decodedToken}`,
    },
  };

  return axios.post("/api/wish_list", id, config);
};

export const requestwishListDelete = (id) => {
  const decodedToken = atob(getToken()); //giải mã base64
  if (!decodedToken) return;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${decodedToken}`,
    },
  };

  return axios.delete(`/api/wish_list/${id}`, config);
};
