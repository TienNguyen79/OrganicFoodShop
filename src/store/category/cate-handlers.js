import { call, put } from "redux-saga/effects";
import { requestCateData, requestCateDataWithId } from "./cate-requests";
import { updateData } from "./cate-slice";

export default function* handleGetCate(action) {
  const { payload, type } = action;

  try {
    const response = yield call(requestCateData);
    console.log(
      "🚀 ~ file: cate-handlers.js:9 ~ function*handleGetCate ~ response:",
      response
    );

    if (response.status === 200) {
      yield put(updateData({ resultCateAll: response.data.categories }));
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

function* handleGetCateWithId(action) {
  const { payload, type } = action;

  try {
    const response = yield call(requestCateDataWithId, payload);
    console.log(
      "🚀 ~ file: cate-handlers.js:9 ~ function*handleGetCate ~ response:",
      response
    );

    if (response.status === 200) {
      yield put(updateData({ resultCateWithId: response.data.products }));
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

export { handleGetCateWithId };
