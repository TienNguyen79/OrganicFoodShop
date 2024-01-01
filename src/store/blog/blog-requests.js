import axios from "../../api/axios";
import { getToken } from "../../utils/auth";

export const requestBlogAll = (page) => {
  return axios.get(`/api/blog?page=${page}`);
};

export const requestBlogWithParam = (id) => {
  return axios.get(`/api/blog/${id}`);
};

export const requestCommentBlog = (data) => {
  return axios.get(`/api/blog/comments/${data.blog_id}?limit=${data.limit}`);
};
export const requestSearchBlog = (data) => {
  return axios.get(
    `/api/search_blog?content_search=${data.content}&&page=${data.page}`
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

//ADMIN
export const requestAdminAddBlog = (data) => {
  const decodedToken = atob(getToken()); //giải mã base64
  if (!decodedToken) return;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${decodedToken}`,
    },
  };

  return axios.post(`/api/admin/blog/create`, data, config);
};

export const requestAdminUpdateBlog = (data) => {
  const decodedToken = atob(getToken()); //giải mã base64
  if (!decodedToken) return;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${decodedToken}`,
    },
  };

  return axios.put(`/api/admin/blog/update/${data.id}`, data, config);
};

export const requestAdminDeleteBlog = (data) => {
  const decodedToken = atob(getToken()); //giải mã base64
  if (!decodedToken) return;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${decodedToken}`,
    },
  };

  return axios.delete(`api/admin/blog/delete/${data.id}`, config);
};
