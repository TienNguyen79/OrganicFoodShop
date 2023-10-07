import axios from "../../api/axios";

export const requestCateData = () => {
  return axios.get("/api/categories");
};

export const requestCateDataWithId = (id) => {
  return axios.get(`/api/categories/${id}`);
};
