import { takeLatest } from "redux-saga/effects";
import {
  authCheckToken,
  authLogOut,
  authLogOutAdmin,
  authLogin,
  authLoginAdmin,
  authRegister,
} from "./auth-slice";
import handleAuthRegister, {
  handleAuthLogin,
  handleAuthLoginAdmin,
  handleLogOut,
  handleLogOutAdmin,
  handlecheckToken,
} from "./auth-handlers";

export default function* authSaGa() {
  yield takeLatest(authRegister.type, handleAuthRegister);
  yield takeLatest(authLogin.type, handleAuthLogin);
  yield takeLatest(authLoginAdmin.type, handleAuthLoginAdmin);
  yield takeLatest(authCheckToken.type, handlecheckToken);
  yield takeLatest(authLogOut.type, handleLogOut);
  yield takeLatest(authLogOutAdmin.type, handleLogOutAdmin);
}
