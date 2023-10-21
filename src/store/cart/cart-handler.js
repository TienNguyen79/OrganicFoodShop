import { call, put } from "redux-saga/effects";
import { requestCartAddnew, requestCartAll } from "./cart-requests";
import { updateDataCart } from "./cart-slice";
import { toast } from "react-toastify";

export default function* handleGetCartAll(action) {
  const { payload, type } = action;

  try {
    //   yield put(setLoading(true));
    const response = yield call(requestCartAll, payload);
    console.log(
      "🚀 ~ file: cart-handler.js:10 ~ function*handleGetCartAll ~ response:",
      response
    );

    if (response.status === 200) {
      yield put(updateDataCart({ resultCartAll: response.data.cart }));
      // yield put(setLoading(false));
    }
  } catch (error) {
    //   yield put(setLoading(false));
    console.log(
      "🚀 ~ file: pro-handlers.js:14 ~ function*handleGetProBestSeller ~ error:",
      error
    );
  }
}

function* handleCartAddNew(action) {
  const { payload, type } = action;
  console.log(
    "🚀 ~ file: cart-handler.js:32 ~ function*handleCartAddNew ~ payload:",
    payload
  );

  try {
    //   yield put(setLoading(true));
    const response = yield call(requestCartAddnew, payload);
    console.log(
      "🚀 ~ file: cart-handler.js:36 ~ function*handleGetCartAddNew ~ response:",
      response
    );
    if (response.status === 200) {
      toast.success("Add to cart successfully!");
      // yield put(setLoading(false));
    }
  } catch (error) {
    //   yield put(setLoading(false));
    console.log(
      "🚀 ~ file: pro-handlers.js:14 ~ function*handleGetProBestSeller ~ error:",
      error
    );
  }
}

export { handleCartAddNew };
