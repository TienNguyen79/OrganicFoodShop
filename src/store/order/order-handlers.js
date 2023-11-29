import { call, put } from "redux-saga/effects";
import {
  requestGetOrderAll,
  requestGetOrderDetails,
  requestPostOrder,
} from "./order-requests";
import { setLoadingOrder, updateDataOrder } from "./order-slice";
import { toast } from "react-toastify";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import History from "../../utils/history";
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

  yield put(setLoadingOrder(true));
  try {
    const response = yield call(requestPostOrder, payload);
    console.log(
      "🚀 ~ file: order-handlers.js:37 ~ function*handlePostOrder ~ response:",
      response
    );
    if (response.status === 200) {
      Swal.fire({
        title: "Your order has been placed!",
        text: "Thank you for your order 😍",
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#FF8A00",
        confirmButtonText: "Continue shopping",
        cancelButtonText: "Back Home",
        reverseButtons: true, // Đảo ngược vị trí của các nút
      }).then(async (result) => {
        if (result.isConfirmed) {
          // Thực hiện hành động khi nhấn "Mua Tiếp"
          History.push("/shop");
          // payload.onSuccess();
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          // Thực hiện hành động khi nhấn "Về Trang Chủ"
          History.push("/");
          // Redirect về trang chủ, bạn có thể sử dụng window.location.href = "url_trang_chu";
        }
      });
      yield put(updateDataOrder({ resultOrderAll: response.data }));
      yield put(setLoadingOrder(false));
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: order-handlers.js:45 ~ function*handlePostOrder ~ error:",
      error
    );

    yield put(setLoadingOrder(false));
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
