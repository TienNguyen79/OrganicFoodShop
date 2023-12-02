import axios from "../../api/axios";
import { getToken } from "../../utils/auth";

export const requestCateData = () => {
  return axios.get("/api/categories");
};

export const requestCateDataWithId = (id) => {
  return axios.get(`/api/categories/${id}`);
};

export const requestAdminGetDetailCate = (id) => {
  const decodedToken = atob(getToken()); //giải mã base64
  if (!decodedToken) return;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${decodedToken}`,
    },
  };

  return axios.get(`/api/admin/category/details/${id}`, config);
};

export const requestAdminAddCate = (data) => {
  const decodedToken = atob(getToken()); //giải mã base64
  if (!decodedToken) return;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${decodedToken}`,
    },
  };

  return axios.post(`/api/admin/category`, data, config);
};

export const requestAdminDeleteCate = (data) => {
  const decodedToken = atob(getToken()); //giải mã base64
  if (!decodedToken) return;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${decodedToken}`,
    },
  };

  return axios.delete(`/api/admin/category/${data.id}`, config);
};

export const requestAdminUpdateCate = (data) => {
  const decodedToken = atob(getToken()); //giải mã base64
  if (!decodedToken) return;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${decodedToken}`,
    },
  };

  return axios.put(`/api/admin/category/${data.id}`, data.values, config);
};
