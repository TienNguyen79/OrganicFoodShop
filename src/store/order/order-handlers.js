import { call, put } from "redux-saga/effects";
import {
  requestGetOrderAll,
  requestGetOrderDetails,
  requestPostOrder,
} from "./order-requests";
import { updateDataOrder } from "./order-slice";
import { toast } from "react-toastify";

export default function* handleGetOrderAll(action) {
  const { payload, type } = action;

  try {
    //   yield put(setLoading(true));
    const response = yield call(requestGetOrderAll, payload);
    console.log(
      "🚀 ~ file: order-handlers.js:10 ~ function*handleGetCartAll ~ response:",
      response
    );

    if (response.status === 200) {
      yield put(updateDataOrder({ resultOrderAll: response.data }));
      // yield put(setLoading(false));
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: order-handlers.js:19 ~ function*handleGetCartAll ~ error:",
      error
    );

    //   yield put(setLoading(false));
  }
}

function* handlePostOrder(action) {
  const { payload, type } = action;

  try {
    //   yield put(setLoading(true));
    const response = yield call(requestPostOrder, payload);
    console.log(
      "🚀 ~ file: order-handlers.js:37 ~ function*handlePostOrder ~ response:",
      response
    );

    if (response.status === 200) {
      yield put(updateDataOrder({ resultOrderAll: response.data }));
      toast.success("Ordered successfully!");
      // yield put(setLoading(false));
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: order-handlers.js:45 ~ function*handlePostOrder ~ error:",
      error
    );

    //   yield put(setLoading(false));
  }
}

function* handleGetOrderDetails(action) {
  const { payload, type } = action;

  try {
    //   yield put(setLoading(true));
    const response = yield call(requestGetOrderDetails, payload);
    console.log(
      "🚀 ~ file: order-handlers.js:64 ~ function*handleGetOrderDetails ~ response:",
      response
    );

    if (response.status === 200) {
      yield put(updateDataOrder({ resultOrderDetails: response.data }));
      // yield put(setLoading(false));
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: order-handlers.js:73 ~ function*handleGetOrderDetails ~ error:",
      error
    );

    //   yield put(setLoading(false));
  }
}

export { handlePostOrder, handleGetOrderDetails };
