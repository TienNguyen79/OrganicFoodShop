import { all, fork } from "redux-saga/effects";
import authSaGa from "./auth/auth-saga";

export default function* rootSaga() {
  yield all([fork(authSaGa)]);
}
