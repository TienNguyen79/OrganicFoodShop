import axios from "../../api/axios";
import { getToken } from "../../utils/auth";

export const requestBlogAll = (page) => {
  const decodedToken = atob(getToken()); //giải mã base64
  if (!decodedToken) return;
  return axios.get(`/api/blog?page=${page}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${decodedToken}`,
    },
  });
};

export const requestBlogWithParam = (id) => {
  const decodedToken = atob(getToken()); //giải mã base64
  if (!decodedToken) return;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${decodedToken}`,
    },
  };

  return axios.get(`/api/blog/${id}`, config);
};

export const requestCommentBlog = (data) => {
  const decodedToken = atob(getToken()); //giải mã base64
  if (!decodedToken) return;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${decodedToken}`,
    },
  };

  return axios.get(
    `/api/blog/comments/${data.blog_id}?limit=${data.limit}`,
    config
  );
};

export const requestAddCommentBlog = (data) => {
  const decodedToken = atob(getToken()); //giải mã base64
  if (!decodedToken) return;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${decodedToken}`,
    },
  };

  return axios.post(`/api/comment`, data, config);
};

export const requestDeleteCommentBlog = (data) => {
  const decodedToken = atob(getToken()); //giải mã base64
  if (!decodedToken) return;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${decodedToken}`,
    },
  };

  return axios.delete(`/api/comment/${data.idCmt}`, config);
};

export const requestUpdateCommentBlog = (data) => {
  const decodedToken = atob(getToken()); //giải mã base64
  if (!decodedToken) return;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${decodedToken}`,
    },
  };

  return axios.put(`/api/comment/${data.idCmt}`, data, config);
};
