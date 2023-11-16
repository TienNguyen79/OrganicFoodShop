import { takeLatest } from "redux-saga/effects";
import { UserUpdate } from "./user-slice";
import handleUpdateUser from "./user-handlers";

export default function* userSaga() {
  yield takeLatest(UserUpdate.type, handleUpdateUser);
}
