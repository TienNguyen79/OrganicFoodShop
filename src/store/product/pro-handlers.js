import { call, put } from "redux-saga/effects";
import {
  requestProAll,
  requestProBestSeller,
  requestProFeauture,
  requestProHotDeal,
  requestProTopRated,
} from "./pro-requests";
import { proGetBestSeller, updateData, updateData2 } from "./pro-slice";

export default function* handleGetProBestSeller(action) {
  const { payload, type } = action;

  try {
    const response = yield call(requestProBestSeller);
    // console.log(
    //   "🚀 ~ file: pro-handlers.js:10 ~ function*handleGetProBestSeller ~ response:",
    //   response
    // );
    // console.log(
    //   "🚀 ~ file: pro-handlers.js:9 ~ function*handleGetProBestSeller ~ response:",
    //   response.data.bestSellers
    // );

    if (response.status === 200) {
      yield put(updateData({ resultBestSellers: response.data.bestSellers }));
      console.log("ok");
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: pro-handlers.js:14 ~ function*handleGetProBestSeller ~ error:",
      error
    );
  }
  yield 1;
}

function* handleGetHotDeal() {
  try {
    const response = yield call(requestProHotDeal);
    // console.log(
    //   "🚀 ~ file: pro-handlers.js:35 ~ function*handleGetHotDeal ~ response:",
    //   response
    // );
    if (response.status === 200) {
      yield put(updateData({ resultHotDeal: response.data.products }));
      console.log("ok");
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: pro-handlers.js:36 ~ function*handleGetHotDeal ~ error:",
      error
    );
  }
}

function* handleGetProTopRated() {
  try {
    const response = yield call(requestProTopRated);
    // console.log(
    //   "🚀 ~ file: pro-handlers.js:58 ~ function*handleGetProTopRated ~ response:",
    //   response
    // );

    if (response.status === 200) {
      yield put(updateData({ resultTopRated: response.data.products }));
      console.log("ok");
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: pro-handlers.js:36 ~ function*handleGetHotDeal ~ error:",
      error
    );
  }
}

function* handleGetProFeature() {
  try {
    const response = yield call(requestProFeauture);
    // console.log(
    //   "🚀 ~ file: pro-handlers.js:79 ~ function*handleGetProFeature ~ response:",
    //   response
    // );

    if (response.status === 200) {
      yield put(updateData({ resultFeauture: response.data.products }));
      console.log("ok");
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: pro-handlers.js:36 ~ function*handleGetHotDeal ~ error:",
      error
    );
  }
}

function* handleGetProAll() {
  try {
    const response = yield call(requestProAll);
    // console.log(
    //   "🚀 ~ file: pro-handlers.js:79 ~ function*handleGetProAll ~ response:",
    //   response
    // );

    if (response.status === 200) {
      yield put(updateData({ resultProAll: response.data.products }));
      console.log("ok");
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: pro-handlers.js:36 ~ function*handleGetHotDeal ~ error:",
      error
    );
  }
}

export {
  handleGetHotDeal,
  handleGetProTopRated,
  handleGetProFeature,
  handleGetProAll,
};
