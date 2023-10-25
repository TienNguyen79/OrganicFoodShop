import { call, put } from "redux-saga/effects";
import {
  requestCartAddnew,
  requestCartAll,
  requestCartDelete,
  requestWishListAddnew,
  requestWishListAll,
  requestwishListDelete,
} from "./cart-requests";
import {
  cartGetAll,
  setLoading,
  updateDataCart,
  updateDataWishList,
} from "./cart-slice";
import { toast } from "react-toastify";
import { getToken } from "../../utils/auth";

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
    console.log(
      "🚀 ~ file: cart-handler.js:27 ~ function*handleGetCartAll ~ error:",
      error
    );
    //   yield put(setLoading(false));
  }
}

function* handleCartAddNew(action) {
  const { payload, type } = action;
  console.log(
    "🚀 ~ file: cart-handler.js:32 ~ function*handleCartAddNew ~ payload:",
    payload
  );

  try {
    yield put(setLoading(true));
    const response = yield call(requestCartAddnew, payload);

    if (response.status === 200) {
      //khi thành công update luôn giỏ hàng
      const cartResponse = yield call(requestCartAll, getToken());
      yield put(updateDataCart({ resultCartAll: cartResponse.data.cart }));
      yield put(setLoading(false));
      toast.success("Add to cart successfully!");
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: cart-handler.js:54 ~ function*handleCartAddNew ~ error:",
      error
    );
    yield put(setLoading(false));
  }
}

function* handleCartDelete(action) {
  const { payload, type } = action;
  console.log(
    "🚀 ~ file: cart-handler.js:32 ~ function*handleCartAddNew ~ payload:",
    payload
  );

  try {
    //   yield put(setLoading(true));
    const response = yield call(requestCartDelete, payload);

    if (response.status === 200) {
      //khi thành công update luôn giỏ hàng
      const cartResponse = yield call(requestCartAll, getToken());
      yield put(updateDataCart({ resultCartAll: cartResponse.data.cart }));
      toast.success("Delete Product successfully!");
      // yield put(setLoading(false));
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: cart-handler.js:77 ~ function*handleCartDelete ~ error:",
      error
    );
    //   yield put(setLoading(false));
  }
}

function* handleGetWishListAll() {
  try {
    //   yield put(setLoading(true));
    const response = yield call(requestWishListAll);
    console.log(
      "🚀 ~ file: cart-handler.js:96 ~ function*handleGetWishListAll ~ response:",
      response
    );

    if (response.status === 200) {
      yield put(
        updateDataWishList({ resultWishListAll: response.data.wishList })
      );
      // yield put(setLoading(false));
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: cart-handler.js:104 ~ function*handleGetWishListAll ~ error:",
      error
    );

    //   yield put(setLoading(false));
  }
}

function* handleWishListAddNew(action) {
  const { payload, type } = action;
  console.log(
    "🚀 ~ file: cart-handler.js:123 ~ function*handleWishListAddNew ~ payload:",
    payload
  );

  try {
    yield put(setLoading(true));
    const response = yield call(requestWishListAddnew, payload);

    if (response.status === 200) {
      //khi thành công update luôn wishList
      const wishListResponse = yield call(requestWishListAll);
      yield put(
        updateDataWishList({
          resultWishListAll: wishListResponse.data.wishList,
        })
      );
      yield put(setLoading(false));
      toast.success("Add wishList successfully!");
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: cart-handler.js:142 ~ function*handleWishListAddNew ~ error:",
      error
    );

    yield put(setLoading(false));
  }
}

function* handlewishListDelete(action) {
  const { payload, type } = action;
  console.log(
    "🚀 ~ file: cart-handler.js:156 ~ function*handlewishListDelete ~ payload:",
    payload
  );

  try {
    //   yield put(setLoading(true));
    const response = yield call(requestwishListDelete, payload);
    if (response.status === 200) {
      //khi thành công update luôn wishList
      const wishListResponse = yield call(requestWishListAll);
      yield put(
        updateDataWishList({
          resultWishListAll: wishListResponse.data.wishList,
        })
      );
      yield put(setLoading(false));
      toast.success("Delete wishList successfully!");
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: cart-handler.js:77 ~ function*handleCartDelete ~ error:",
      error
    );
    //   yield put(setLoading(false));
  }
  yield 1;
}

export {
  handleCartAddNew,
  handleCartDelete,
  handleGetWishListAll,
  handleWishListAddNew,
  handlewishListDelete,
};
