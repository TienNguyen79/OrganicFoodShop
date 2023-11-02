import { takeLatest } from "redux-saga/effects";
import {
  blogAddNew,
  blogComment,
  blogGetAll,
  blogGetWithParam,
} from "./blog-slice";
import handleGetBlogAll, {
  handleBlogAddNew,
  handleGetBlogWithParam,
  handleGetCommentBlog,
} from "./blog-handler";

export default function* blogSaga() {
  yield takeLatest(blogGetAll.type, handleGetBlogAll);
  yield takeLatest(blogGetWithParam.type, handleGetBlogWithParam);
  yield takeLatest(blogComment.type, handleGetCommentBlog);
  yield takeLatest(blogAddNew.type, handleBlogAddNew);
}
