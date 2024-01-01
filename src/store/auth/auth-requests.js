import axios from "../../api/axios";

export const requestAuthRegister = (data) => {
  return axios.post("/api/register", {
    ...data,
  });
};

export const requestAuthLogin = (data) => {
  return axios.post("/api/login", {
    ...data,
  });
};

//lấy ra được thông tin của user đang đăng nhập thông qua token
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
