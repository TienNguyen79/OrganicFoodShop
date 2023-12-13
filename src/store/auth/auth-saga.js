import { takeEvery, takeLatest } from "redux-saga/effects";
import {
  authCheckToken,
  authFetchMe,
  authLogOut,
  authLogin,
  authLoginAdmin,
  authLoginShip,
  authRegister,
  authRegisterShip,
} from "./auth-slice";
import handleAuthRegister, {
  handleAuthFetchMe,
  handleAuthLogin,
  handleAuthLoginAdmin,
  handleAuthLoginShip,
  handleAuthRegisterShip,
  handleLogOut,
  handlecheckToken,
} from "./auth-handlers";

export default function* authSaGa() {
  yield takeLatest(authRegister.type, handleAuthRegister);
  yield takeLatest(authRegisterShip.type, handleAuthRegisterShip);
  yield takeLatest(authLogin.type, handleAuthLogin);
  yield takeLatest(authLoginAdmin.type, handleAuthLoginAdmin);
  yield takeLatest(authLoginShip.type, handleAuthLoginShip);
  yield takeLatest(authCheckToken.type, handlecheckToken);
  yield takeLatest(authLogOut.type, handleLogOut);
  // yield takeLatest(authFetchMe.type, handleAuthFetchMe);
}
