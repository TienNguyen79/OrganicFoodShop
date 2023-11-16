import { call, put } from "redux-saga/effects";
import { requestUserUpdate } from "./user-request";
import { toast } from "react-toastify";
import { getToken } from "../../utils/auth";
import { requestAuthFetchMe } from "../auth/auth-requests";
import { authUpdateUser } from "../auth/auth-slice";

export default function* handleUpdateUser(action) {
  const { payload, type } = action;

  try {
    //   yield put(setLoading(true));
    const response = yield call(requestUserUpdate, payload);
    console.log(
      "🚀 ~ file: user-handlers.js:10 ~ function*handleUpdateUser ~ response:",
      response
    );
    if (response.status === 200) {
      const response = yield call(requestAuthFetchMe, getToken());

      yield put(authUpdateUser({ user: response.data }));
      toast.success("Update User successfully!");
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: user-handlers.js:15 ~ function*handleUpdateUser ~ error:",
      error
    );
  }
}
