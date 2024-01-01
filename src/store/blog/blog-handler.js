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

//lấy tất cả blog
export default function* handleGetBlogAll(action) {
  const { payload, type } = action;
  try {
    yield put(setLoading(true));
    const response = yield call(requestBlogAll, payload);

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

//lấy blog chi tiết
function* handleGetBlogWithParam(action) {
  const { payload, type } = action;

  try {
    const response = yield call(requestBlogWithParam, payload);

    if (response.status === 200) {
      yield put(updateDataBlog({ resultBlogWithParam: response.data }));
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: blog-handler.js:46 ~ function*handleGetBlogWithParam ~ error:",
      error
    );
  }
}
//tìm kiếm blog
function* handleSearchBlog(action) {
  const { payload, type } = action;

  try {
    //   yield put(setLoading(true));
    const response = yield call(requestSearchBlog, payload);

    if (response.status === 200) {
      yield put(updateDataBlog({ resultBlogAll: response.data }));
      // yield put(setLoading(false));
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: blog-handler.js:83 ~ function*handleSearchBlog ~ error:",
      error
    );

    //   yield put(setLoading(false));
  }
}

//lấy comment trong blog
function* handleGetCommentBlog(action) {
  const { payload, type } = action;

  try {
    //   yield put(setLoading(true));
    const response = yield call(requestCommentBlog, payload);

    if (response.status === 200) {
      yield put(updateDataBlog({ resultCommentBlog: response.data }));
      // yield put(setLoading(false));
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: blog-handler.js:70 ~ function*handleGetCommentBlog ~ error:",
      error
    );

    //   yield put(setLoading(false));
  }
}
//thêm comment
function* handleBlogAddCmtNew(action) {
  const { payload, type } = action;

  try {
    yield put(setLoading(true));
    const response = yield call(requestAddCommentBlog, payload);

    if (response.status === 200) {
      //khi thành công update comment blog
      const BlogResponse = yield call(requestCommentBlog, {
        blog_id: payload.blog_id,
        limit: payload.limit,
      });

      yield put(updateDataBlog({ resultCommentBlog: BlogResponse.data }));

      yield put(setLoading(false));
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: blog-handler.js:105 ~ function*handleBlogAddNew ~ error:",
      error
    );

    yield put(setLoading(false));
  }
}

//xóa comment
function* handleBlogDeleteCmt(action) {
  const { payload, type } = action;

  try {
    const response = yield call(requestDeleteCommentBlog, payload);

    if (response.status === 200) {
      //khi thành công update comment blog
      const BlogResponse = yield call(requestCommentBlog, {
        blog_id: payload.blog_id,
        limit: payload.limit,
      });

      yield put(updateDataBlog({ resultCommentBlog: BlogResponse.data }));
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: blog-handler.js:132 ~ function*handleBlogDeleteCmt ~ error:",
      error
    );
  }
}

//cập nhật comment
function* handleBlogUpdateCmt(action) {
  const { payload, type } = action;

  try {
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
      toast.success("Update comment successfully!");
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: blog-handler.js:188 ~ function*handleBlogUpdateCmt ~ error:",
      error
    );
  }
}

//----------------ADMIN-------------------

//post blog
function* handleAdminAddBlog(action) {
  const { payload, type } = action;

  try {
    yield put(setLoading(true));
    const response = yield call(requestAdminAddBlog, payload);

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

//cập nhật blog
function* handleAdminUpdateBlog(action) {
  const { payload, type } = action;
  console.log(
    "🚀 ~ file: blog-handler.js:239 ~ function*handleAdminUpdateBlog ~ payload:",
    payload
  );

  try {
    yield put(setLoading(true));
    const response = yield call(requestAdminUpdateBlog, payload);

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
//xóa blog
function* handleAdmiDeleteBlog(action) {
  const { payload, type } = action;

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
