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
    `/api/filterProducts?category=${
      categoryI || ""
    }&price[]=${minPriceI}&price[]=${maxPriceI}&rating=${
      rateI || ""
    }&page=${nextPage}`
  );
};

export const requestProSearch = (name) => {
  return axios.get(`/api/searchProduct?name=${name}`);
};
