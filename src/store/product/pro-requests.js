import axios from "../../api/axios";

export const requestProAll = () => {
  return axios.get("/api/product");
};

export const requestProBestSeller = () => {
  return axios.get("/api/bestSellerProducts");
};

export const requestProFeauture = () => {
  return axios.get("/api/featuredProducts");
};

export const requestProHotDeal = () => {
  return axios.get("/api/hotDeals");
};

export const requestProTopRated = () => {
  return axios.get("/api/topRated");
};
