import { all, fork } from "redux-saga/effects";
import authSaGa from "./auth/auth-saga";
import proSaga from "./product/pro-saga";
import cateSaga from "./category/cate-saga";
import cartSaga from "./cart/cart-saga";
import blogSaga from "./blog/blog-saga";

export default function* rootSaga() {
  yield all([
    fork(authSaGa),
    fork(proSaga),
    fork(cateSaga),
    fork(cartSaga),
    fork(blogSaga),
  ]);
}
