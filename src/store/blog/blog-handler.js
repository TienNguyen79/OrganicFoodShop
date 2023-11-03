import { call, put } from "redux-saga/effects";
import {
  requestAddCommentBlog,
  requestBlogAll,
  requestBlogWithParam,
  requestCommentBlog,
  requestDeleteCommentBlog,
} from "./blog-requests";
import { setLoading, updateDataBlog } from "./blog-slice";
import { toast } from "react-toastify";

export default function* handleGetBlogAll(action) {
  try {
    //   yield put(setLoading(true));
    const response = yield call(requestBlogAll);
    console.log(
      "🚀 ~ file: blog-handler.js:9 ~ function*handleGetBlogAll ~ response:",
      response
    );

    if (response.status === 200) {
      yield put(updateDataBlog({ resultBlogAll: response.data }));
      // yield put(setLoading(false));
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: blog-handler.js:20 ~ function*handleGetBlogAll ~ error:",
      error
    );

    //   yield put(setLoading(false));
  }
}

function* handleGetBlogWithParam(action) {
  const { payload, type } = action;

  try {
    //   yield put(setLoading(true));
    const response = yield call(requestBlogWithParam, payload);
    console.log(
      "🚀 ~ file: blog-handler.js:34 ~ function*handleGetBlogWithParam ~ response:",
      response
    );

    if (response.status === 200) {
      yield put(updateDataBlog({ resultBlogWithParam: response.data }));
      // yield put(setLoading(false));
      // toast.success("Add to cart successfully!");
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: blog-handler.js:46 ~ function*handleGetBlogWithParam ~ error:",
      error
    );

    //   yield put(setLoading(false));
  }
}

function* handleGetCommentBlog(action) {
  const { payload, type } = action;

  try {
    //   yield put(setLoading(true));
    const response = yield call(requestCommentBlog, payload);
    console.log(
      "🚀 ~ file: blog-handler.js:61 ~ function*handleGetCommentBlog ~ response:",
      response
    );

    if (response.status === 200) {
      yield put(updateDataBlog({ resultCommentBlog: response.data }));
      // yield put(setLoading(false));
      // toast.success("Add to cart successfully!");
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: blog-handler.js:70 ~ function*handleGetCommentBlog ~ error:",
      error
    );

    //   yield put(setLoading(false));
  }
}

function* handleBlogAddCmtNew(action) {
  const { payload, type } = action;
  console.log(
    "🚀 ~ file: blog-handler.js:87 ~ function*handleBlogAddNew ~ payload:",
    payload
  );

  try {
    yield put(setLoading(true));
    const response = yield call(requestAddCommentBlog, payload);

    if (response.status === 200) {
      //khi thành công update comment blog
      const BlogResponse = yield call(requestCommentBlog, payload.blog_id);
      yield put(updateDataBlog({ resultCommentBlog: BlogResponse.data }));
      yield put(setLoading(false));
      // toast.success("Add comment successfully!");
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: blog-handler.js:105 ~ function*handleBlogAddNew ~ error:",
      error
    );

    yield put(setLoading(false));
  }
}

function* handleBlogDeleteCmt(action) {
  const { payload, type } = action;

  try {
    yield put(setLoading(true));
    const response = yield call(requestDeleteCommentBlog, payload);

    if (response.status === 200) {
      //khi thành công update comment blog
      const BlogResponse = yield call(requestCommentBlog, payload.idBlog);
      yield put(updateDataBlog({ resultCommentBlog: BlogResponse.data }));
      yield put(setLoading(false));
      // toast.success("Add comment successfully!");
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: blog-handler.js:132 ~ function*handleBlogDeleteCmt ~ error:",
      error
    );

    yield put(setLoading(false));
  }
}

export {
  handleGetBlogWithParam,
  handleGetCommentBlog,
  handleBlogAddCmtNew,
  handleBlogDeleteCmt,
};
