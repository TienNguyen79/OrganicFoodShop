import { call, put } from "redux-saga/effects";
import {
  requestAddCommentBlog,
  requestAdminAddBlog,
  requestAdminDeleteBlog,
  requestAdminUpdateBlog,
  requestBlogAll,
  requestBlogWithParam,
  requestCommentBlog,
  requestDeleteCommentBlog,
  requestSearchBlog,
  requestUpdateCommentBlog,
} from "./blog-requests";
import { setDataCMT, setLoading, updateDataBlog } from "./blog-slice";
import { toast } from "react-toastify";
import History from "../../utils/history";

export default function* handleGetBlogAll(action) {
  const { payload, type } = action;
  try {
    yield put(setLoading(true));
    const response = yield call(requestBlogAll, payload);
    console.log(
      "🚀 ~ file: blog-handler.js:9 ~ function*handleGetBlogAll ~ response:",
      response
    );

    if (response.status === 200) {
      yield put(updateDataBlog({ resultBlogAll: response.data }));
      yield put(setLoading(false));
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: blog-handler.js:20 ~ function*handleGetBlogAll ~ error:",
      error
    );

    yield put(setLoading(false));
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

function* handleSearchBlog(action) {
  const { payload, type } = action;

  try {
    //   yield put(setLoading(true));
    const response = yield call(requestSearchBlog, payload);
    console.log(
      "🚀 ~ file: blog-handler.js:74 ~ function*handleSearchBlog ~ response:",
      response
    );

    if (response.status === 200) {
      yield put(updateDataBlog({ resultBlogAll: response.data }));
      // yield put(setLoading(false));
      // toast.success("Add to cart successfully!");
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: blog-handler.js:83 ~ function*handleSearchBlog ~ error:",
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

//admin

function* handleAdminAddBlog(action) {
  const { payload, type } = action;
  console.log(
    "🚀 ~ file: blog-handler.js:203 ~ function*handleAdminAddBlog ~ payload:",
    payload
  );

  try {
    yield put(setLoading(true));
    const response = yield call(requestAdminAddBlog, payload);
    console.log(
      "🚀 ~ file: blog-handler.js:210 ~ function*handleAdminAddBlog ~ response:",
      response
    );

    if (response.status === 200) {
      //khi thành công update comment blog
      const BlogResponse = yield call(requestBlogAll);

      yield put(updateDataBlog({ resultBlogAll: BlogResponse.data }));

      yield put(setLoading(false));
      toast.success("Add Blog successfully!");
      History.push("/admin/blog/blog_list");
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: blog-handler.js:224 ~ function*handleAdminAddBlog ~ error:",
      error
    );

    yield put(setLoading(false));
  }
}

function* handleAdminUpdateBlog(action) {
  const { payload, type } = action;
  console.log(
    "🚀 ~ file: blog-handler.js:239 ~ function*handleAdminUpdateBlog ~ payload:",
    payload
  );

  try {
    yield put(setLoading(true));
    const response = yield call(requestAdminUpdateBlog, payload);
    console.log(
      "🚀 ~ file: blog-handler.js:246 ~ function*handleAdminUpdateBlog ~ response:",
      response
    );

    if (response.status === 200) {
      //khi thành công update comment blog
      const BlogResponse = yield call(requestBlogAll, payload.page);

      yield put(updateDataBlog({ resultBlogAll: BlogResponse.data }));

      yield put(setLoading(false));
      toast.success("Update Blog successfully!");
      History.push("/admin/blog/blog_list");
      localStorage.setItem("statusUpdate", "1");
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: blog-handler.js:260 ~ function*handleAdminUpdateBlog ~ error:",
      error
    );

    yield put(setLoading(false));
  }
}

function* handleAdmiDeleteBlog(action) {
  const { payload, type } = action;
  console.log(
    "🚀 ~ file: blog-handler.js:275 ~ function*handleAdmiDeleteBlog ~ payload:",
    payload
  );

  try {
    yield put(setLoading(true));
    const response = yield call(requestAdminDeleteBlog, payload);

    if (response.status === 200) {
      //khi thành công update comment blog
      const BlogResponse = yield call(requestBlogAll, payload.page);

      yield put(updateDataBlog({ resultBlogAll: BlogResponse.data }));

      yield put(setLoading(false));
      toast.success("Delete Blog successfully!");
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: blog-handler.js:294 ~ function*handleAdmiDeleteBlog ~ error:",
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
  handleAdminAddBlog,
  handleAdminUpdateBlog,
  handleAdmiDeleteBlog,
  handleSearchBlog,
};
