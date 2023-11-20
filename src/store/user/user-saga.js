import { takeLatest } from "redux-saga/effects";
import { UserChangePassword, UserUpdate } from "./user-slice";
import handleUpdateUser, { handleChangePasswordUser } from "./user-handlers";

export default function* userSaga() {
  yield takeLatest(UserUpdate.type, handleUpdateUser);
  yield takeLatest(UserChangePassword.type, handleChangePasswordUser);
}
