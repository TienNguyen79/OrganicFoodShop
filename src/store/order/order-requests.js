import axios from "../../api/axios";
import { getToken } from "../../utils/auth";

export const requestGetOrderAll = (page = 1) => {
  const decodedToken = atob(getToken()); //giải mã base64
  if (!decodedToken) return;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${decodedToken}`,
    },
  };

  return axios.get(`/api/order_detail?page=${page}`, config);
};

export const requestPostOrder = (data) => {
  const decodedToken = atob(getToken()); //giải mã base64
  if (!decodedToken) return;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${decodedToken}`,
    },
  };

  return axios.post(`/api/order_detail`, data, config);
};

export const requestGetOrderDetails = (slug) => {
  const decodedToken = atob(getToken()); //giải mã base64
  if (!decodedToken) return;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${decodedToken}`,
    },
  };

  return axios.get(`/api/order_detail/${slug}`, config);
};

//ADMIN

//filter in order admin
export const requestGetFilterOrder = (data) => {
  const decodedToken = atob(getToken()); //giải mã base64
  if (!decodedToken) return;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${decodedToken}`,
    },
  };

  return axios.get(
    `/api/admin/order/filter_status?approval_status=${data.status}&&page=${data.page}`,
    config
  );
};

//filter in order user
export const requestGetFilterOrderUser = (data) => {
  const decodedToken = atob(getToken()); //giải mã base64
  if (!decodedToken) return;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${decodedToken}`,
    },
  };

  return axios.get(
    `/api/order_filter_status?approval_status=${data.status}&&page=${data.page}`,
    config
  );
};

export const requestAdminGetOrder = (page = 1) => {
  const decodedToken = atob(getToken()); //giải mã base64
  if (!decodedToken) return;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${decodedToken}`,
    },
  };

  return axios.get(`/api/admin/order?page=${page}`, config);
};

export const requestAdminGetOrderDetail = (id) => {
  const decodedToken = atob(getToken()); //giải mã base64
  if (!decodedToken) return;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${decodedToken}`,
    },
  };

  return axios.get(`/api/admin/order/view_order_details/${id}`, config);
};

export const requestAdminUpdateStatusOrder = (data) => {
  const decodedToken = atob(getToken()); //giải mã base64

  if (!decodedToken) return;
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${decodedToken}`,
    },
  };

  return axios.put(`/api/admin/order/approve_orders/${data.id}`, config);
};

export const requestAdminCancelOrder = (data) => {
  const decodedToken = atob(getToken()); //giải mã base64

  if (!decodedToken) return;
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${decodedToken}`,
    },
  };

  return axios.put(`/api/admin/order/cancel_order/${data.id}`, config);
};
