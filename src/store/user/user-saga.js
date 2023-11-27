import { takeLatest } from "redux-saga/effects";
import {
  CustomerGetAll,
  UserChangePassword,
  UserUpdate,
  UserUpdateAddress,
} from "./user-slice";
import handleUpdateUser, {
  handleChangePasswordUser,
  handleGetAllCustomer,
  handleUpdateAddressUser,
} from "./user-handlers";

export default function* userSaga() {
  yield takeLatest(UserUpdate.type, handleUpdateUser);
  yield takeLatest(UserChangePassword.type, handleChangePasswordUser);
  yield takeLatest(UserUpdateAddress.type, handleUpdateAddressUser);
  yield takeLatest(CustomerGetAll.type, handleGetAllCustomer);
}
