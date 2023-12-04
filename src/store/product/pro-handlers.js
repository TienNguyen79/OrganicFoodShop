import { call, put } from "redux-saga/effects";
import {
  requestAdminAddPro,
  requestAdminGetPro,
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

export default function* handleGetProBestSeller(action) {
  const { payload, type } = action;

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
  yield 1;
}

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

function* handleGetProWithFilter(action) {
  const { payload, type } = action;
  console.log(
    "🚀 ~ file: pro-handlers.js:120 ~ function*handleGetProWithFilter ~ payload:",
    payload
  );
  try {
    yield put(setLoading(true));
    const response = yield call(requestProWithFilter, payload);
    console.log(
      "🚀 ~ file: pro-handlers.js:126 ~ function*handleGetProWithFilter ~ response:",
      response
    );

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
  yield 1;
}

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
  yield 1;
}

function* handleGetProQuickView(action) {
  const { payload, type } = action;

  try {
    yield put(setLoadings({ component: "quickview", value: true }));
    const response = yield call(requestProQuickview, payload);
    console.log(
      "🚀 ~ file: pro-handlers.js:172 ~ function*handleGetProQuickView ~ response:",
      response
    );

    if (response.status === 200) {
      yield put(updateData({ resultProQuickView: response.data.product }));
      yield put(setLoadings({ component: "quickview", value: false }));
    }
  } catch (error) {
    toast.error(error.response.data.message);
    yield put(setLoadings({ component: "quickview", value: false }));
  }
}

function* handleGetProDetails(action) {
  const { payload, type } = action;

  try {
    yield put(setLoadings({ component: "details", value: true }));
    const response = yield call(requestProDetails, payload);
    console.log(
      "🚀 ~ file: pro-handlers.js:194 ~ function*handleGetProDetails ~ response:",
      response
    );

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

function* handleAdminAddPro(action) {
  const { payload, type } = action;
  try {
    const response = yield call(requestAdminAddPro, payload);

    if (response.status === 200) {
      const response2 = yield call(requestAdminGetPro);

      yield put(updateData({ resultProAll: response2.data.products }));
      toast.success("Add Product success!");
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: pro-handlers.js:241 ~ function*handleAdminAddPro ~ error:",
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
};
