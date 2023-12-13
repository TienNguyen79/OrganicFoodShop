import { takeLatest } from "redux-saga/effects";
import {
  blogAddCmtNew,
  blogAdminAdd,
  blogAdminDelete,
  blogAdminUpdate,
  blogComment,
  blogDeleteCmt,
  blogGetAll,
  blogGetWithParam,
  blogUpdateCmt,
} from "./blog-slice";
import handleGetBlogAll, {
  handleAdmiDeleteBlog,
  handleAdminAddBlog,
  handleAdminUpdateBlog,
  handleBlogAddCmtNew,
  handleBlogDeleteCmt,
  handleBlogUpdateCmt,
  handleGetBlogWithParam,
  handleGetCommentBlog,
} from "./blog-handler";

export default function* blogSaga() {
  yield takeLatest(blogGetAll.type, handleGetBlogAll);
  yield takeLatest(blogGetWithParam.type, handleGetBlogWithParam);
  yield takeLatest(blogComment.type, handleGetCommentBlog);
  yield takeLatest(blogAddCmtNew.type, handleBlogAddCmtNew);
  yield takeLatest(blogDeleteCmt.type, handleBlogDeleteCmt);
  yield takeLatest(blogUpdateCmt.type, handleBlogUpdateCmt);
  yield takeLatest(blogAdminAdd.type, handleAdminAddBlog);
  yield takeLatest(blogAdminUpdate.type, handleAdminUpdateBlog);
  yield takeLatest(blogAdminDelete.type, handleAdmiDeleteBlog);
}
