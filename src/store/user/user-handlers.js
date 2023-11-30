import { call, put } from "redux-saga/effects";
import {
  requestAdminAddCustomer,
  requestAdminDeleteCustomer,
  requestAdminGetAllCustomer,
  requestAdminRoleCustomer,
  requestAdminSearchCustomer,
  requestAdminStatusCustomer,
  requestUserChangePassword,
  requestUserUpdate,
  requestUserUpdateAddress,
} from "./user-request";
import { toast } from "react-toastify";
import { getToken } from "../../utils/auth";
import { requestAuthFetchMe } from "../auth/auth-requests";
import { authUpdateUser } from "../auth/auth-slice";
import { updateDataCustomer } from "./user-slice";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import History from "../../utils/history";
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

function* handleDeleteCustomer(action) {
  const { payload, type } = action;

  try {
    const response = yield call(requestAdminDeleteCustomer, payload);
    console.log(
      "🚀 ~ file: user-handlers.js:123 ~ function*handleDeleteCustomer ~ response:",
      response
    );

    if (response.status === 200) {
      const customerAll = yield call(requestAdminGetAllCustomer);
      yield put(
        updateDataCustomer({ resultDataCustomerAll: customerAll.data })
      );
      Swal.fire("Deleted!", `${payload.name} has been deleted.`, "success");
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: user-handlers.js:137 ~ function*handleDeleteCustomer ~ error:",
      error
    );
    toast.error(error?.response?.data?.Message);
  }
}

function* handleAddCustomer(action) {
  const { payload, type } = action;
  console.log(
    "🚀 ~ file: user-handlers.js:147 ~ function*handleAddCustomer ~ payload:",
    payload
  );

  try {
    const response = yield call(requestAdminAddCustomer, payload);
    console.log(
      "🚀 ~ file: user-handlers.js:149 ~ function*handleAddCustomer ~ response:",
      response
    );
    if (response.status === 200) {
      const customerAll = yield call(requestAdminGetAllCustomer);
      yield put(
        updateDataCustomer({ resultDataCustomerAll: customerAll.data })
      );
      History.push("/admin/customer");
      toast.success("Add Customer successfully!");
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: user-handlers.js:162 ~ function*handleAddCustomer ~ error:",
      error
    );
    toast.error(error?.response?.data?.errors?.email[0]);
  }
}

function* handleRoleCustomer(action) {
  const { payload, type } = action;
  console.log(
    "🚀 ~ file: user-handlers.js:176 ~ function*handleRoleCustomer ~ payload:",
    payload
  );

  try {
    const response = yield call(requestAdminRoleCustomer, payload);
    console.log(
      "🚀 ~ file: user-handlers.js:182 ~ function*handleRoleCustomer ~ response:",
      response
    );

    if (response.status === 200) {
      const customerAll = yield call(requestAdminGetAllCustomer, payload.page);
      yield put(
        updateDataCustomer({ resultDataCustomerAll: customerAll.data })
      );
      Swal.fire("Success!", `User roles have been updated.`, "success");
      // toast.success("Update Role Customer successfully!");
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: user-handlers.js:192 ~ function*handleRoleCustomer ~ error:",
      error
    );
    toast.error(error?.response?.data?.message);
  }
}

function* handleStatusCustomer(action) {
  const { payload, type } = action;
  console.log(
    "🚀 ~ file: user-handlers.js:207 ~ function*handleStatusCustomer ~ payload:",
    payload
  );

  try {
    const response = yield call(requestAdminStatusCustomer, payload);
    console.log(
      "🚀 ~ file: user-handlers.js:213 ~ function*handleStatusCustomer ~ requestAdminStatusCustomer:",
      requestAdminStatusCustomer
    );

    if (response.status === 200) {
      const customerAll = yield call(requestAdminGetAllCustomer, payload.page);
      yield put(
        updateDataCustomer({ resultDataCustomerAll: customerAll.data })
      );
      Swal.fire("Success!", `User Status have been updated.`, "success");

      // toast.success("Update Status Customer successfully!");
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: user-handlers.js:227 ~ function*handleStatusCustomer ~ error:",
      error
    );
    toast.error(error?.response?.data?.message);
  }
}

function* handleSearchCustomer(action) {
  const { payload, type } = action;
  console.log(
    "🚀 ~ file: user-handlers.js:238 ~ function*handleSearchCustomer ~ payload:",
    payload
  );

  try {
    const response = yield call(requestAdminSearchCustomer, payload);
    console.log(
      "🚀 ~ file: user-handlers.js:244 ~ function*handleSearchCustomer ~ response:",
      response
    );

    if (response.status === 200) {
      yield put(updateDataCustomer({ resultDataCustomerAll: response.data }));
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: user-handlers.js:254 ~ function*handleSearchCustomer ~ error:",
      error
    );
  }
}

export {
  handleChangePasswordUser,
  handleUpdateAddressUser,
  handleGetAllCustomer,
  handleDeleteCustomer,
  handleAddCustomer,
  handleRoleCustomer,
  handleStatusCustomer,
  handleSearchCustomer,
};
