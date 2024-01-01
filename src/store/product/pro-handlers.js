import { call, put } from "redux-saga/effects";
import {
  requestAdminAddPro,
  requestAdminDeletePro,
  requestAdminGetPro,
  requestAdminSearchNamePro,
  requestAdminUpdatePro,
  requestProAll,
  requestProBestSeller,
  requestProDetails,
  requestProFeauture,
  requestProHotDeal,
  requestProQuickview,
  requestProSearch,
  requestProTopRated,
  requestProWithFilter,
} from "./pro-requests";
import {
  proGetBestSeller,
  proGetSearch,
  setLoading,
  setLoadingSearchNamePro,
  setLoadings,
  updateData,
  updateData2,
} from "./pro-slice";
import { toast } from "react-toastify";
import History from "../../utils/history";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import { requestCateDataWithId } from "../category/cate-requests";

//lấy sản phẩm bán chạy nhất
export default function* handleGetProBestSeller(action) {
  try {
    yield put(setLoadings({ component: "bestSeller", value: true }));
    const response = yield call(requestProBestSeller);

    if (response.status === 200) {
      yield put(updateData({ resultBestSellers: response.data.bestSellers }));
      yield put(setLoadings({ component: "bestSeller", value: false }));
    }
  } catch (error) {
    yield put(setLoadings({ component: "bestSeller", value: false }));
    console.log(
      "🚀 ~ file: pro-handlers.js:14 ~ function*handleGetProBestSeller ~ error:",
      error
    );
  }
}

//lấy sản phẩm deal ngol
function* handleGetHotDeal() {
  try {
    yield put(setLoadings({ component: "hotDeal", value: true }));
    const response = yield call(requestProHotDeal);

    if (response.status === 200) {
      yield put(updateData({ resultHotDeal: response.data.products }));
      yield put(setLoadings({ component: "hotDeal", value: false }));
    }
  } catch (error) {
    yield put(setLoadings({ component: "hotDeal", value: false }));
    console.log(
      "🚀 ~ file: pro-handlers.js:36 ~ function*handleGetHotDeal ~ error:",
      error
    );
  }
}

//lấy những sản phẩm được đánh giá cao
function* handleGetProTopRated() {
  try {
    yield put(setLoadings({ component: "topRated", value: true }));
    const response = yield call(requestProTopRated);

    if (response.status === 200) {
      yield put(updateData({ resultTopRated: response.data.products }));
      yield put(setLoadings({ component: "topRated", value: false }));
    }
  } catch (error) {
    yield put(setLoadings({ component: "topRated", value: false }));
    console.log(
      "🚀 ~ file: pro-handlers.js:36 ~ function*handleGetHotDeal ~ error:",
      error
    );
  }
}

//lấy những sản phẩm nổi bật
function* handleGetProFeature() {
  try {
    yield put(setLoadings({ component: "feauture", value: true }));
    const response = yield call(requestProFeauture);

    if (response.status === 200) {
      yield put(updateData({ resultFeauture: response.data.products }));
      yield put(setLoadings({ component: "feauture", value: false }));
    }
  } catch (error) {
    yield put(setLoadings({ component: "feauture", value: false }));
    console.log(
      "🚀 ~ file: pro-handlers.js:36 ~ function*handleGetHotDeal ~ error:",
      error
    );
  }
}

//lấy tất cả sản phẩm
function* handleGetProAll() {
  try {
    yield put(setLoading(true));
    const response = yield call(requestProAll);

    if (response.status === 200) {
      yield put(updateData({ resultProAll: response.data.products }));
      yield put(setLoading(false));
    }
  } catch (error) {
    yield put(setLoading(false));
    console.log(
      "🚀 ~ file: pro-handlers.js:36 ~ function*handleGetHotDeal ~ error:",
      error
    );
  }
}

//bộ lọc trong shop
function* handleGetProWithFilter(action) {
  const { payload, type } = action;

  try {
    yield put(setLoading(true));
    const response = yield call(requestProWithFilter, payload);

    if (response.status === 200) {
      yield put(updateData({ resultProWithFilter: response.data.products }));
      yield put(setLoading(false));
    }
  } catch (error) {
    yield put(updateData({ resultProWithFilter: [] }));
    yield put(setLoading(false));
    console.log(
      "🚀 ~ file: pro-handlers.js:36 ~ function*handleGetHotDeal ~ error:",
      error
    );
  }
}
//tìm kiếm sản phẩm theo tên
function* handleGetProSearch(action) {
  const { payload } = action;

  try {
    yield put(setLoadings({ component: "searchNamePro", value: true }));
    const response = yield call(requestProSearch, payload);

    if (response.status === 200) {
      yield put(updateData({ resultProSearch: response.data.products }));
      yield put(setLoadings({ component: "searchNamePro", value: false }));
    }
  } catch (error) {
    yield put(updateData({ resultProSearch: {} }));
    yield put(setLoadings({ component: "searchNamePro", value: false }));
    console.log(
      "🚀 ~ file: pro-handlers.js:36 ~ function*handleGetHotDeal ~ error:",
      error
    );
  }
}

//lấy thông tin xem nhanh của sản phẩm
function* handleGetProQuickView(action) {
  const { payload, type } = action;

  try {
    yield put(setLoadings({ component: "quickview", value: true }));
    const response = yield call(requestProQuickview, payload);

    if (response.status === 200) {
      yield put(updateData({ resultProQuickView: response.data.product }));
      yield put(setLoadings({ component: "quickview", value: false }));
    }
  } catch (error) {
    toast.error(error.response.data.message);
    yield put(setLoadings({ component: "quickview", value: false }));
  }
}

//xem chi tiết sản phẩm
function* handleGetProDetails(action) {
  const { payload, type } = action;

  try {
    yield put(setLoadings({ component: "details", value: true }));
    const response = yield call(requestProDetails, payload);

    if (response.status === 200) {
      yield put(updateData({ resultProDetails: response.data }));
      yield put(setLoadings({ component: "details", value: false }));
    }
  } catch (error) {
    toast.error(error.response.data.message);
    yield put(setLoadings({ component: "details", value: false }));
  }
}
//ADMIN

//lấy tất cả sản phẩm
function* handleAdminGetProAll(action) {
  const { payload, type } = action;
  try {
    const response = yield call(requestAdminGetPro, payload);

    if (response.status === 200) {
      yield put(updateData({ resultProAll: response.data.products }));
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: pro-handlers.js:219 ~ function*handleAdminGetProAll ~ error:",
      error
    );
  }
}

//thêm sản phẩm
function* handleAdminAddPro(action) {
  yield put(setLoading(true));
  const { payload, type } = action;
  try {
    const response = yield call(requestAdminAddPro, payload);

    if (response.status === 200) {
      const response2 = yield call(requestAdminGetPro);

      yield put(updateData({ resultProAll: response2.data.products }));
      toast.success("Add Product success!");
      yield put(setLoading(false));

      History.push("/admin/products/product_list");
    }
  } catch (error) {
    toast.error(
      error?.response?.data?.message?.imageUrl &&
        error?.response?.data?.message?.imageUrl[0]
    );
    toast.error(
      error?.response?.data?.message?.thumbnails &&
        "Thumbnail must select at least 1 photo"
    );
    console.log(
      "🚀 ~ file: pro-handlers.js:241 ~ function*handleAdminAddPro ~ error:",
      error
    );
    yield put(setLoading(false));
  }
}

//xóa sản phẩm
function* handleAdmiDeletePro(action) {
  const { payload, type } = action;
  try {
    const response = yield call(requestAdminDeletePro, payload);

    if (response.status === 200) {
      const response2 = yield call(requestAdminGetPro, payload.page);

      yield put(updateData({ resultProAll: response2.data.products }));
      Swal.fire(
        "Deleted!",
        `Delete ProductId ${payload.id} success!`,
        "success"
      );
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: pro-handlers.js:277 ~ function*handleAdmiDeletePro ~ error:",
      error
    );
  }
}

//cập nhật sản phẩm

function* handleAdmiUpdatePro(action) {
  yield put(setLoading(true));
  const { payload, type } = action;

  try {
    const response = yield call(requestAdminUpdatePro, payload);

    if (response.status === 200) {
      const response2 = yield call(requestAdminGetPro, parseInt(payload.page));

      yield put(updateData({ resultProAll: response2.data.products }));
      toast.success("Update Product success!");
      History.push("/admin/products/product_list");
      yield put(setLoading(false));
    }
  } catch (error) {
    toast.error(
      error?.response?.data?.message?.imageUrl &&
        error?.response?.data?.message?.imageUrl[0]
    );
    toast.error(
      error?.response?.data?.message?.thumbnails &&
        "Thumbnail must select at least 1 photo"
    );
    console.log(
      "🚀 ~ file: pro-handlers.js:296 ~ function*handleAdmiUpdatePro ~ error:",
      error
    );
    yield put(setLoading(false));
  }
}

//tìm kiếm sản phẩm
function* handleAdmiSearchNamePro(action) {
  const { payload, type } = action;
  try {
    const response = yield call(requestAdminSearchNamePro, payload);
    console.log(
      "🚀 ~ file: pro-handlers.js:317 ~ function*handleAdmiSearchNamePro ~ response:",
      response
    );

    if (response.status === 200) {
      yield put(updateData({ resultProAll: response.data.products }));
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: pro-handlers.js:323 ~ function*handleAdmiSearchNamePro ~ error:",
      error
    );
  }
}
//tìm kiếm sản phẩm thông qua category
function* handleAdmiSearchProWithCate(action) {
  const { payload, type } = action;
  try {
    const response = yield call(requestCateDataWithId, payload);

    if (response.status === 200) {
      yield put(updateData({ resultProAll: response.data.products }));
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: pro-handlers.js:344 ~ function*handleAdmiSearchProWithCate ~ error:",
      error
    );
  }
}

export {
  handleGetHotDeal,
  handleGetProTopRated,
  handleGetProFeature,
  handleGetProAll,
  handleGetProWithFilter,
  handleGetProSearch,
  handleGetProQuickView,
  handleGetProDetails,
  handleAdminGetProAll,
  handleAdminAddPro,
  handleAdmiDeletePro,
  handleAdmiUpdatePro,
  handleAdmiSearchNamePro,
  handleAdmiSearchProWithCate,
};
