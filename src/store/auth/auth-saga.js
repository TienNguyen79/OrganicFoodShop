import { takeEvery, takeLatest } from "redux-saga/effects";
import {
  authCheckToken,
  authFetchMe,
  authLogOut,
  authLogin,
  authLoginAdmin,
  authRegister,
} from "./auth-slice";
import handleAuthRegister, {
  handleAuthFetchMe,
  handleAuthLogin,
  handleAuthLoginAdmin,
  handleLogOut,
  handlecheckToken,
} from "./auth-handlers";

export default function* authSaGa() {
  yield takeLatest(authRegister.type, handleAuthRegister);
  yield takeLatest(authLogin.type, handleAuthLogin);
  yield takeLatest(authLoginAdmin.type, handleAuthLoginAdmin);
  yield takeLatest(authCheckToken.type, handlecheckToken);
  yield takeLatest(authLogOut.type, handleLogOut);
  // yield takeLatest(authFetchMe.type, handleAuthFetchMe);
}
