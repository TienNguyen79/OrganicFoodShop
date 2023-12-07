import axios from "../../api/axios";
import { getToken } from "../../utils/auth";

export const requestProAll = () => {
  return axios.get("/api/product");
};

export const requestProBestSeller = () => {
  return axios.get("/api/products/bestSellerProducts");
};

export const requestProFeauture = () => {
  return axios.get("/api/products/featuredProducts");
};

export const requestProHotDeal = () => {
  return axios.get("/api/products/hotDeals");
};

export const requestProTopRated = () => {
  return axios.get("/api/products/topRated");
};

export const requestProWithFilter = (data) => {
  console.log(
    "🚀 ~ file: pro-requests.js:24 ~ requestProWithFilter ~ data:",
    data
  );
  const { category, rate, minPrice, maxPrice, nextPage } = data;
  let categoryI = category;
  let rateI = parseInt(rate);
  let minPriceI = parseInt(minPrice);
  let maxPriceI = parseInt(maxPrice);
  return axios.get(
    `/api/products/filterProducts?category=${
      categoryI || ""
    }&price[]=${minPriceI}&price[]=${maxPriceI}&rating=${
      rateI || ""
    }&page=${nextPage}`
  );
};

export const requestProSearch = (name) => {
  return axios.get(`/api/products/searchProduct?name=${name}`);
};

export const requestProQuickview = (id) => {
  return axios.get(`/api/products/quickView/${id}`);
};

export const requestProDetails = (id) => {
  return axios.get(`/api/product/${id}`);
};

//ADMIN

export const requestAdminGetPro = (page = 1) => {
  const decodedToken = atob(getToken()); //giải mã base64
  if (!decodedToken) return;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${decodedToken}`,
    },
  };

  return axios.get(`/api/admin/product/show_products?page=${page}`, config);
};

export const requestAdminAddPro = (data) => {
  const decodedToken = atob(getToken()); //giải mã base64
  if (!decodedToken) return;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${decodedToken}`,
    },
  };

  return axios.post(`/api/admin/product`, { ...data }, config);
};

export const requestAdminDeletePro = (data) => {
  const decodedToken = atob(getToken()); //giải mã base64
  if (!decodedToken) return;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${decodedToken}`,
    },
  };

  return axios.delete(`/api/admin/product/${data.id}`, config);
};

export const requestAdminUpdatePro = (result) => {
  const decodedToken = atob(getToken()); //giải mã base64
  if (!decodedToken) return;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${decodedToken}`,
    },
  };

  return axios.put(`/api/admin/product/${result.id}`, result.data, config);
};

export const requestAdminSearchNamePro = (data) => {
  console.log(
    "🚀 ~ file: pro-requests.js:114 ~ requestAdminSearchNamePro ~ data:",
    data
  );
  const decodedToken = atob(getToken()); //giải mã base64
  if (!decodedToken) return;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${decodedToken}`,
    },
  };

  return axios.get(
    `/api/admin/product/admin_search_product?name=${data.name}&&page=${data.page}`,
    config
  );
};
