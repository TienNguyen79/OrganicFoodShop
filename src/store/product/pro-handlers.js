import { call, put } from "redux-saga/effects";
import {
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
  updateData,
  updateData2,
} from "./pro-slice";
import { toast } from "react-toastify";

export default function* handleGetProBestSeller(action) {
  const { payload, type } = action;

  try {
    yield put(setLoading(true));
    const response = yield call(requestProBestSeller);

    if (response.status === 200) {
      yield put(updateData({ resultBestSellers: response.data.bestSellers }));
      yield put(setLoading(false));
    }
  } catch (error) {
    yield put(setLoading(false));
    console.log(
      "🚀 ~ file: pro-handlers.js:14 ~ function*handleGetProBestSeller ~ error:",
      error
    );
  }
  yield 1;
}

function* handleGetHotDeal() {
  try {
    yield put(setLoading(true));
    const response = yield call(requestProHotDeal);

    if (response.status === 200) {
      yield put(updateData({ resultHotDeal: response.data.products }));
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

function* handleGetProTopRated() {
  try {
    yield put(setLoading(true));
    const response = yield call(requestProTopRated);

    if (response.status === 200) {
      yield put(updateData({ resultTopRated: response.data.products }));
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

function* handleGetProFeature() {
  try {
    yield put(setLoading(true));
    const response = yield call(requestProFeauture);

    if (response.status === 200) {
      yield put(updateData({ resultFeauture: response.data.products }));
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
    toast.error(error.response.data.message);
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
    yield put(setLoading(true));
    const response = yield call(requestProSearch, payload);

    if (response.status === 200) {
      yield put(updateData({ resultProSearch: response.data.products }));
      yield put(setLoading(false));
    }
  } catch (error) {
    yield put(updateData({ resultProSearch: {} }));
    yield put(setLoading(false));
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
    yield put(setLoading(true));
    const response = yield call(requestProQuickview, payload);
    console.log(
      "🚀 ~ file: pro-handlers.js:172 ~ function*handleGetProQuickView ~ response:",
      response
    );

    if (response.status === 200) {
      yield put(updateData({ resultProQuickView: response.data.product }));
      yield put(setLoading(false));
    }
  } catch (error) {
    toast.error(error.response.data.message);
    yield put(setLoading(false));
  }
}

function* handleGetProDetails(action) {
  const { payload, type } = action;

  try {
    yield put(setLoading(true));
    const response = yield call(requestProDetails, payload);
    console.log(
      "🚀 ~ file: pro-handlers.js:194 ~ function*handleGetProDetails ~ response:",
      response
    );

    if (response.status === 200) {
      yield put(updateData({ resultProDetails: response.data }));
      yield put(setLoading(false));
    }
  } catch (error) {
    toast.error(error.response.data.message);
    yield put(setLoading(false));
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
};
