import { call, put } from "redux-saga/effects";
import {
  requestAddCommentBlog,
  requestBlogAll,
  requestBlogWithParam,
  requestCommentBlog,
  requestDeleteCommentBlog,
  requestUpdateCommentBlog,
} from "./blog-requests";
import { setDataCMT, setLoading, updateDataBlog } from "./blog-slice";
import { toast } from "react-toastify";

export default function* handleGetBlogAll(action) {
  const { payload, type } = action;
  try {
    //   yield put(setLoading(true));
    const response = yield call(requestBlogAll, payload);
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
  console.log(
    "🚀 ~ file: blog-handler.js:63 ~ function*handleGetCommentBlog ~ payload:",
    payload
  );

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
  yield 1;
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
    console.log(
      "🚀 ~ file: blog-handler.js:97 ~ function*handleBlogAddCmtNew ~ response:",
      response
    );

    if (response.status === 200) {
      //khi thành công update comment blog
      const BlogResponse = yield call(requestCommentBlog, {
        blog_id: payload.blog_id,
        limit: payload.limit,
      });

      yield put(updateDataBlog({ resultCommentBlog: BlogResponse.data }));

      yield put(setLoading(false));
      toast.success("Add comment successfully!");
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
    console.log(
      "🚀 ~ file: blog-handler.js:134 ~ function*handleBlogDeleteCmt ~ response:",
      response
    );

    if (response.status === 200) {
      //khi thành công update comment blog
      const BlogResponse = yield call(requestCommentBlog, {
        blog_id: payload.blog_id,
        limit: payload.limit,
      });
      console.log(
        "🚀 ~ file: blog-handler.js:145 ~ function*handleBlogDeleteCmt ~ BlogResponse:",
        BlogResponse
      );
      yield put(updateDataBlog({ resultCommentBlog: BlogResponse.data }));
      yield put(setLoading(false));
      toast.success("Delete comment successfully!");
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: blog-handler.js:132 ~ function*handleBlogDeleteCmt ~ error:",
      error
    );

    yield put(setLoading(false));
  }
}

function* handleBlogUpdateCmt(action) {
  const { payload, type } = action;

  try {
    yield put(setLoading(true));
    const response = yield call(requestUpdateCommentBlog, payload);
    console.log(
      "🚀 ~ file: blog-handler.js:173 ~ function*handleBlogUpdateCmt ~ response:",
      response
    );

    if (response.status === 200) {
      //khi thành công update comment blog
      const BlogResponse = yield call(requestCommentBlog, {
        blog_id: payload.blog_id,
        limit: payload.limit,
      });

      yield put(updateDataBlog({ resultCommentBlog: BlogResponse.data }));
      yield put(setLoading(false));
      toast.success("Update comment successfully!");
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: blog-handler.js:188 ~ function*handleBlogUpdateCmt ~ error:",
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
  handleBlogUpdateCmt,
};
