import { call, put } from "redux-saga/effects";
import {
  requestAdminGetAllCustomer,
  requestUserChangePassword,
  requestUserUpdate,
  requestUserUpdateAddress,
} from "./user-request";
import { toast } from "react-toastify";
import { getToken } from "../../utils/auth";
import { requestAuthFetchMe } from "../auth/auth-requests";
import { authUpdateUser } from "../auth/auth-slice";
import { updateDataCustomer } from "./user-slice";

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

function* handleChangePasswordUser(action) {
  const { payload, type } = action;

  try {
    //   yield put(setLoading(true));
    const response = yield call(requestUserChangePassword, payload);
    console.log(
      "🚀 ~ file: user-handlers.js:39 ~ function*handleChangePasswordUser ~ response:",
      response
    );

    if (response.status === 200) {
      const response = yield call(requestAuthFetchMe, getToken());

      yield put(authUpdateUser({ user: response.data }));
      toast.success("Change Password successfully!");
    }
  } catch (error) {
    toast.error("Current password is incorrect");
    console.log(
      "🚀 ~ file: user-handlers.js:48 ~ function*handleChangePasswordUser ~ error:",
      error
    );
  }
}

function* handleUpdateAddressUser(action) {
  const { payload, type } = action;
  console.log(
    "🚀 ~ file: user-handlers.js:64 ~ function*handleUpdateAddressUser ~ payload:",
    payload
  );

  try {
    //   yield put(setLoading(true));
    const response = yield call(requestUserUpdateAddress, payload);
    console.log(
      "🚀 ~ file: user-handlers.js:68 ~ function*handleUpdateAddressUser ~ response:",
      response
    );

    if (response.status === 200) {
      const response = yield call(requestAuthFetchMe, getToken());

      yield put(authUpdateUser({ user: response.data }));
      toast.success("Update Address successfully!");
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: user-handlers.js:73 ~ function*handleUpdateAddressUser ~ error:",
      error
    );
  }
}
//ADMIN

function* handleGetAllCustomer(action) {
  const { payload, type } = action;

  try {
    //   yield put(setLoading(true));
    const response = yield call(requestAdminGetAllCustomer, payload);
    console.log(
      "🚀 ~ file: user-handlers.js:100 ~ function*handleGetAllCustomer ~ response:",
      response
    );

    if (response.status === 200) {
      yield put(updateDataCustomer({ resultDataCustomerAll: response.data }));
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: user-handlers.js:109 ~ function*handleGetAllCustomer ~ error:",
      error
    );
  }
}
export {
  handleChangePasswordUser,
  handleUpdateAddressUser,
  handleGetAllCustomer,
};
