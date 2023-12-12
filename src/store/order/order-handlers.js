import { call, put } from "redux-saga/effects";
import {
  requestAdminCancelOrder,
  requestAdminGetOrder,
  requestAdminGetOrderDetail,
  requestAdminUpdateStatusOrder,
  requestGetFilterOrder,
  requestGetFilterOrderUser,
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

function* handleGetFilterOrder(action) {
  const { payload, type } = action;

  try {
    //   yield put(setLoading(true));
    const response = yield call(requestGetFilterOrder, payload);
    console.log(
      "🚀 ~ file: order-handlers.js:115 ~ function*handleGetFilterOrder ~ response:",
      response
    );

    if (response.status === 200) {
      yield put(updateDataOrder({ resultOrderAll: response.data }));
      // yield put(setLoading(false));
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: order-handlers.js:123 ~ function*handleGetFilterOrder ~ error:",
      error
    );

    //   yield put(setLoading(false));
  }
}

function* handleGetFilterUserOrder(action) {
  const { payload, type } = action;

  try {
    //   yield put(setLoading(true));
    const response = yield call(requestGetFilterOrderUser, payload);
    console.log(
      "🚀 ~ file: order-handlers.js:140 ~ function*handleGetFilterUserOrder ~ response:",
      response
    );

    if (response.status === 200) {
      yield put(updateDataOrder({ resultOrderAll: response.data }));
      // yield put(setLoading(false));
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: order-handlers.js:148 ~ function*handleGetFilterUserOrder ~ error:",
      error
    );

    //   yield put(setLoading(false));
  }
}

function* handleAdminGetOrder(action) {
  const { payload, type } = action;

  try {
    //   yield put(setLoading(true));
    const response = yield call(requestAdminGetOrder, payload);
    console.log(
      "🚀 ~ file: order-handlers.js:166 ~ function*handleAdminGetOrder ~ response:",
      response
    );

    if (response.status === 200) {
      yield put(updateDataOrder({ resultOrderAll: response.data }));
      // yield put(setLoading(false));
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: order-handlers.js:174 ~ function*handleAdminGetOrder ~ error:",
      error
    );

    //   yield put(setLoading(false));
  }
}

function* handleAdminGetOrderDetail(action) {
  const { payload, type } = action;

  try {
    //   yield put(setLoading(true));
    const response = yield call(requestAdminGetOrderDetail, payload);
    console.log(
      "🚀 ~ file: order-handlers.js:194 ~ function*handleAdminGetOrderDetail ~ response:",
      response
    );

    if (response.status === 200) {
      yield put(updateDataOrder({ resultOrderDetails: response.data }));
      // yield put(setLoading(false));
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: order-handlers.js:202 ~ function*handleAdminGetOrderDetail ~ error:",
      error
    );

    //   yield put(setLoading(false));
  }
}

function* handleAdminUpdateStastusOrder(action) {
  const { payload, type } = action;
  console.log(
    "🚀 ~ file: order-handlers.js:188 ~ function*handleAdminUpdateStastusOrder ~ payload:",
    payload
  );

  try {
    // yield put(setLoading(true));
    const response = yield call(requestAdminUpdateStatusOrder, payload);
    console.log(
      "🚀 ~ file: order-handlers.js:192 ~ function*handleAdminUpdateStastusOrder ~ response:",
      response
    );
    if (response.status === 200) {
      const response2 = yield call(requestGetFilterOrder, {
        status: payload.status || "0",
        page: payload.page,
      });
      yield put(updateDataOrder({ resultOrderAll: response2.data }));
      if (payload.status === "1") {
        Swal.fire(
          "Processing!",
          `OrderID ${payload.id} is being processed!`,
          "success"
        );
      } else if (payload.status === "2") {
        Swal.fire(
          "On the Way!",
          `OrderID ${payload.id} on the way to delivery!`,
          "success"
        );
      } else if (payload.status === "3") {
        Swal.fire(
          "Delivered!",
          `OrderID ${payload.id} delivered successfully!`,
          "success"
        );
      } else {
        Swal.fire(
          "Confirmed!",
          `OrderID ${payload.id} has been confirmed!`,
          "success"
        );
      }

      // yield put(setLoading(false));
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: order-handlers.js:202 ~ function*handleAdminUpdateStastusOrder ~ error:",
      error
    );

    //   yield put(setLoading(false));
  }
}

function* handleAdminCancelOrder(action) {
  const { payload, type } = action;
  console.log(
    "🚀 ~ file: order-handlers.js:222 ~ function*handleAdminCancelOrder ~ payload:",
    payload
  );

  try {
    // yield put(setLoading(true));
    const response = yield call(requestAdminCancelOrder, payload);
    console.log(
      "🚀 ~ file: order-handlers.js:229 ~ function*handleAdminCancelOrder ~ response:",
      response
    );

    if (response.status === 200) {
      const response2 = yield call(requestGetFilterOrder, {
        status: payload.status || "0",
        page: payload.page,
      });
      yield put(updateDataOrder({ resultOrderAll: response2.data }));
      Swal.fire(
        "Canceled!",
        `OrderID ${payload.id} has been Canceled!`,
        "success"
      );
      // yield put(setLoading(false));
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: order-handlers.js:271 ~ function*handleAdminCancelOrder ~ error:",
      error
    );

    //   yield put(setLoading(false));
  }
}

export {
  handlePostOrder,
  handleGetOrderDetails,
  handleGetFilterOrder,
  handleGetFilterUserOrder,
  handleAdminGetOrder,
  handleAdminUpdateStastusOrder,
  handleAdminCancelOrder,
  handleAdminGetOrderDetail,
};
