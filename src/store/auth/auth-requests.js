// import axios from "../../api/axios";

import axios from "../../api/axios";
import { getToken } from "../../utils/auth";
import { useLocation, useNavigate } from "react-router-dom";

export const requestAuthRegister = (data) => {
  console.log(
    "🚀 ~ file: auth-requests.js:4 ~ requestAuthRegister ~ data:",
    data
  );

  return axios.post("/api/register", {
    ...data,
  });
};

export const requestAuthLogin = (data) => {
  return axios.post("/api/login", {
    ...data,
  });
};

export const requestAuthFetchMe = (token) => {
  const decodedToken = atob(token); //giải mã base64
  if (!decodedToken) return;
  return axios.get("/api/getCurrentUser", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${decodedToken}`,
    },
  });
};

export const requestAuthLogOut = (token) => {
  const decodedToken = atob(token); //giải mã base64
  if (!decodedToken) return;
  return axios.delete("/api/logout", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${decodedToken}`,
    },
  });
};
