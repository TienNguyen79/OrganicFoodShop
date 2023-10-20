import axios from "../../api/axios";

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
