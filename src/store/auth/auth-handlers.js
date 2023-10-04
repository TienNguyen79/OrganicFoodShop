import { call, put } from "redux-saga/effects";
import {
  requestAuthFetchMe,
  requestAuthLogin,
  requestAuthRegister,
} from "./auth-requests";
import { toast } from "react-toastify";
import { getToken, logOut, saveToken } from "../../utils/auth";
import { authFetchMe, authUpdateUser, setLoading } from "./auth-slice";
//xử lý đăng ký
export default function* handleAuthRegister(action) {
  console.log(
    "🚀 ~ file: auth-handlers.js:13 ~ function*handleAuthRegister ~ action:",
    action
  );

  const { payload, type } = action;

  try {
    yield put(setLoading(true));
    const response = yield call(requestAuthRegister, payload);
    console.log(
      "🚀 ~ file: auth-handlers.js:21 ~ function*handleAuthRegister ~ response:",
      response
    );
    // console.log(btoa(response.data.token));
    const encodeToken = btoa(response.data.token); //mã hóa base64
    saveToken(encodeToken);

    if (response.status === 200) {
      toast.success("Create new Account successfully!");
      yield put(setLoading(false));
      window.location.href = "/login";
      //đặt navigate vào đây
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: auth-handlers.js:34 ~ function*handleAuthRegister ~ error:",
      error
    );

    // if (error.response.status === 422) {
    //   toast.error(error?.response?.data?.errors.email[0]);
    //   // toast.error(error?.response?.data?.errors.phone_number[0]);
    //   yield put(setLoading(false));
    //   return;
    // }
    if (error?.response?.data?.errors.email) {
      toast.error(error?.response?.data?.errors.email[0]);
      yield put(setLoading(false));
    }
    if (error?.response?.data?.errors.phone_number) {
      toast.error(error?.response?.data?.errors.phone_number[0]);
      yield put(setLoading(false));
    }
    yield put(setLoading(false));
  }
}
//xử lý đăng nhập
function* handleAuthLogin(action) {
  const { payload, type } = action;
  try {
    yield put(setLoading(true));
    const response = yield call(requestAuthLogin, payload);
    console.log(
      "🚀 ~ file: auth-handlers.js:55 ~ function*handleAuthLogin ~ response:",
      response
    );
    const encodeToken = btoa(response.data.token); //mã hóa base64

    if (encodeToken) {
      saveToken(encodeToken);
      yield call(handleAuthFetchMe, { payload: encodeToken });
    }

    if (response.status === 200) {
      toast.success("Login successfully!");
      yield put(setLoading(false));
      window.location.href = "/";
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: auth-handlers.js:82 ~ function*handleAuthLogin ~ error:",
      error
    );
    if (error.response.data.errors) {
      toast.error(error.response.data.errors);
    }
    yield put(setLoading(false));
    // toast.error("Email or Password incorrect!");
  }
}

//hàm call thông tin user về thông qua token
function* handleAuthFetchMe({ payload }) {
  try {
    const response = yield call(requestAuthFetchMe, payload); //trả về 1 object

    if (response.status === 200) {
      yield put(
        authUpdateUser({
          user: response.data.user,
          accessToken: payload,
        })
      );
    }
  } catch (error) {}
}

//hàm có chức năng khi reload trang sẽ không bị mất thông tin
function* handlecheckToken() {
  if (getToken() != null) {
    console.log(
      "🚀 ~ file: auth-handlers.js:89 ~ function*handlecheckToken ~ getToken():",
      getToken()
    );
    const response = yield call(requestAuthFetchMe, getToken());

    if (response.status === 200) {
      yield put(
        //update
        authUpdateUser({
          user: response.data,
        })
      );
    }
  }
}
//xử lý logout

function* handleLogOut() {
  yield put(authUpdateUser({}));
  logOut();
}

export { handleAuthLogin, handleAuthFetchMe, handlecheckToken, handleLogOut };
