import { call, put } from "redux-saga/effects";
import {
  requestAuthFetchMe,
  requestAuthLogOut,
  requestAuthLogin,
  requestAuthRegister,
} from "./auth-requests";
import { toast } from "react-toastify";
import { getToken, logOut, saveToken } from "../../utils/auth";
import { authUpdateUser, setLoading } from "./auth-slice";
import History from "../../utils/history";
import { userStatus } from "../../constants/global";
import { updateDataCart, updateDataWishList } from "../cart/cart-slice";
//xử lý đăng ký
export default function* handleAuthRegister(action) {
  const { payload, type } = action;

  try {
    yield put(setLoading(true));
    const response = yield call(requestAuthRegister, payload);

    if (response.status === 200) {
      toast.success("Create new Account successfully!");
      yield put(setLoading(false));
      History.push("/login");
      //đặt navigate vào đây
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: auth-handlers.js:34 ~ function*handleAuthRegister ~ error:",
      error
    );

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

    const encodeToken = btoa(response.data.token); //mã hóa base64

    const result = yield call(requestAuthFetchMe, encodeToken);

    if (result.data.status === userStatus.ACTIVE) {
      saveToken(encodeToken);
      yield put(setLoading(false));
      History.push("/");
    } else {
      toast.error("Your account has been banned");
      yield put(setLoading(false));
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: auth-handlers.js:66 ~ function*handleAuthLogin ~ error:",
      error
    );
    if (error.response.data.errors) {
      toast.error(error.response.data.errors);
    }
    yield put(setLoading(false));
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
  } catch (error) {
    console.log(
      "🚀 ~ file: auth-handlers.js:91 ~ function*handleAuthFetchMe ~ error:",
      error
    );
  }
}

//hàm có chức năng khi reload trang sẽ không bị mất thông tin
function* handlecheckToken() {
  if (getToken() != null) {
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

function* handleLogOut(action) {
  const { payload, type } = action;

  try {
    const response = yield call(requestAuthLogOut, payload);

    if (response.status === 200) {
      yield put(authUpdateUser({}));
      yield put(updateDataCart({ resultCartAll: [] }));
      yield put(updateDataWishList({ resultWishListAll: [] }));
      logOut();
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: auth-handlers.js:139 ~ function*handleLogOut ~ error:",
      error
    );
  }
  yield 1;
}

//xử lý logout Admin

function* handleLogOutAdmin(action) {
  const { payload, type } = action;

  try {
    const response = yield call(requestAuthLogOut, payload);

    if (response.status === 200) {
      yield put(authUpdateUser({}));
      logOut();
      History.push("/admin/login");
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: auth-handlers.js:174 ~ function*handleLogOutAdmin ~ error:",
      error
    );
  }
}

//login Admin

function* handleAuthLoginAdmin(action) {
  const { payload, type } = action;
  try {
    yield put(setLoading(true));
    const response = yield call(requestAuthLogin, payload); // trả về token

    const encodeToken = btoa(response.data.token); //mã hóa base64

    const result = yield call(requestAuthFetchMe, encodeToken);

    if (result.data.permission === 2) {
      saveToken(encodeToken);
      yield put(setLoading(false));
      History.push("/admin");
    } else {
      toast.error("Email or Password incorrect!");
      yield put(setLoading(false));
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: auth-handlers.js:181 ~ function*handleAuthLoginAdmin ~ error:",
      error
    );

    if (error.response.data.errors) {
      toast.error(error.response.data.errors);
    }
    yield put(setLoading(false));
  }
}

export {
  handleAuthLogin,
  handleAuthFetchMe,
  handlecheckToken,
  handleLogOut,
  handleAuthLoginAdmin,
  handleLogOutAdmin,
};
