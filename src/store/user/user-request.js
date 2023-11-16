import axios from "../../api/axios";
import { getToken } from "../../utils/auth";

export const requestUserUpdate = (data) => {
  const decodedToken = atob(getToken()); //giải mã base64
  if (!decodedToken) return;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${decodedToken}`,
    },
  };

  return axios.put(`/api/user/update`, data, config);
};
