import { all, fork } from "redux-saga/effects";
import authSaGa from "./auth/auth-saga";
import proSaga from "./product/pro-saga";
import cateSaga from "./category/cate-saga";

export default function* rootSaga() {
  yield all([fork(authSaGa), fork(proSaga), fork(cateSaga)]);
}
