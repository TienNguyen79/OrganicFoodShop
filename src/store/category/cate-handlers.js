import { call, put } from "redux-saga/effects";
import {
  requestAdminAddCate,
  requestAdminDeleteCate,
  requestAdminGetDetailCate,
  requestAdminSearchCate,
  requestAdminUpdateCate,
  requestCateData,
  requestCateDataWithId,
} from "./cate-requests";
import { cateGetdataAll, setLoading, updateData } from "./cate-slice";
import History from "../../utils/history";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

//lấy tất cả category
export default function* handleGetCate(action) {
  try {
    const response = yield call(requestCateData);

    if (response.status === 200) {
      yield put(updateData({ resultCateAll: response.data.categories }));
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: pro-handlers.js:14 ~ function*handleGetProBestSeller ~ error:",
      error
    );
  }
}

//lấy chi tiết cate -- nó trả ra tất cả sản phẩm thuộc về category đó
function* handleGetCateWithId(action) {
  const { payload, type } = action;

  try {
    const response = yield call(requestCateDataWithId, payload);

    if (response.status === 200) {
      yield put(updateData({ resultCateWithId: response.data.products }));
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: pro-handlers.js:14 ~ function*handleGetProBestSeller ~ error:",
      error
    );
  }
}
//-------------------ADMIN--------------------

//lấy chi tiết category--admin
function* handleGetDetailCate(action) {
  const { payload, type } = action;

  try {
    const response = yield call(requestAdminGetDetailCate, payload);

    if (response.status === 200) {
      yield put(updateData({ resultCateAll: response.data.category }));
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: cate-handlers.js:52 ~ function*handleGetDetailCate ~ error:",
      error
    );
  }
}

//thêm category
function* handlePostCategory(action) {
  yield put(setLoading(true));
  const { payload, type } = action;

  try {
    const response = yield call(requestAdminAddCate, payload);

    if (response.status === 200) {
      const resultCateAll = yield call(requestCateData);

      yield put(updateData({ resultCateAll: resultCateAll.data.categories }));
      toast.success("Add a new Category success!");
      History.push("/admin/categories");
      yield put(setLoading(false));
    }
  } catch (error) {
    toast.error("Name categories already exist");
    console.log(
      "🚀 ~ file: cate-handlers.js:81 ~ function*handlePostCategory ~ error:",
      error
    );
    yield put(setLoading(false));
  }
}

//xóa category
function* handleDeleteCategory(action) {
  const { payload, type } = action;

  try {
    const response = yield call(requestAdminDeleteCate, payload);

    if (response.status === 200) {
      const resultCateAll2 = yield call(requestCateData);

      yield put(updateData({ resultCateAll: resultCateAll2.data.categories }));
      Swal.fire(
        "Deleted!",
        `Delete category ${payload.name} success!`,
        "success"
      );
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: cate-handlers.js:111 ~ function*handleDeleteCategory ~ error:",
      error
    );
  }
}

//cập nhật category
function* handleUpdateCategory(action) {
  yield put(setLoading(true));
  const { payload, type } = action;

  try {
    const response = yield call(requestAdminUpdateCate, payload);

    if (response.status === 200) {
      const resultCateAll = yield call(requestCateData);
      yield put(updateData({ resultCateAll: resultCateAll.data.categories }));
      toast.success("Update Category success!");
      History.push("/admin/categories");
      yield put(setLoading(false));
    }
  } catch (error) {
    toast.error("Name categories already exist");
    console.log(
      "🚀 ~ file: cate-handlers.js:81 ~ function*handlePostCategory ~ error:",
      error
    );
    yield put(setLoading(false));
  }
}

//tìm kiếm với name category
function* handleSearchCategory(action) {
  const { payload, type } = action;

  try {
    const response = yield call(requestAdminSearchCate, payload);
    console.log(
      "🚀 ~ file: cate-handlers.js:168 ~ function*handleSearchCategory ~ response:",
      response
    );

    if (response.status === 200) {
      yield put(updateData({ resultCateAll: response.data.categories }));
    }
  } catch (error) {
    toast.error("No categories found!");
    console.log(
      "🚀 ~ file: cate-handlers.js:179 ~ function*handleSearchCategory ~ error:",
      error
    );
  }
}
export {
  handleGetCateWithId,
  handlePostCategory,
  handleDeleteCategory,
  handleUpdateCategory,
  handleGetDetailCate,
  handleSearchCategory,
};
