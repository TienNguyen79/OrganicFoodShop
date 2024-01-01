import { call, put } from "redux-saga/effects";
import {
  requestAdminAddCustomer,
  requestAdminCustomerDetails,
  requestAdminDashBoard,
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
import { setLoading, updateDataCustomer } from "./user-slice";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import History from "../../utils/history";

//cập nhật thông tin user
export default function* handleUpdateUser(action) {
  const { payload, type } = action;

  try {
    //   yield put(setLoading(true));
    const response = yield call(requestUserUpdate, payload);

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
//thay đổi mật khẩu
function* handleChangePasswordUser(action) {
  const { payload, type } = action;

  try {
    //   yield put(setLoading(true));
    const response = yield call(requestUserChangePassword, payload);

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

//cập nhật địa chỉ user
function* handleUpdateAddressUser(action) {
  const { payload, type } = action;

  try {
    //   yield put(setLoading(true));
    const response = yield call(requestUserUpdateAddress, payload);

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
//----------------ADMIN------------------

//lấy tất cả thông tin của khách hàng
function* handleGetAllCustomer(action) {
  const { payload, type } = action;

  try {
    //   yield put(setLoading(true));
    const response = yield call(requestAdminGetAllCustomer, payload);

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

//xóa khách hàng
function* handleDeleteCustomer(action) {
  const { payload, type } = action;

  try {
    const response = yield call(requestAdminDeleteCustomer, payload);

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

//thêm user
function* handleAddCustomer(action) {
  yield put(setLoading(true));
  const { payload, type } = action;

  try {
    const response = yield call(requestAdminAddCustomer, payload);

    if (response.status === 200) {
      const customerAll = yield call(requestAdminGetAllCustomer);
      yield put(
        updateDataCustomer({ resultDataCustomerAll: customerAll.data })
      );
      History.push("/admin/customers");
      toast.success("Add Customer successfully!");
      yield put(setLoading(false));
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: user-handlers.js:162 ~ function*handleAddCustomer ~ error:",
      error
    );
    toast.error(error?.response?.data?.errors?.email[0]);
    yield put(setLoading(false));
  }
}

//cập nhật role user
function* handleRoleCustomer(action) {
  const { payload, type } = action;

  try {
    const response = yield call(requestAdminRoleCustomer, payload);

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

//cập nhật trạng thái active hay Ban
function* handleStatusCustomer(action) {
  const { payload, type } = action;

  try {
    const response = yield call(requestAdminStatusCustomer, payload);

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

//tìm kiếm theo tên user
function* handleSearchCustomer(action) {
  const { payload, type } = action;

  try {
    const response = yield call(requestAdminSearchCustomer, payload);

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

//xem thông tin chi tiết User
function* handleGetCustomerDetail(action) {
  const { payload, type } = action;

  try {
    const response = yield call(requestAdminCustomerDetails, payload);

    if (response.status === 200) {
      yield put(updateDataCustomer({ resultDataCustomerAll: response.data }));
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: user-handlers.js:282 ~ function*handleGetCustomerDetail ~ error:",
      error
    );
  }
}

//dashboard admin
function* handleAdminDashBoard(action) {
  const { payload, type } = action;

  try {
    const response = yield call(requestAdminDashBoard, payload);

    if (response.status === 200) {
      yield put(
        updateDataCustomer({ resultDataAdminDashBoard: response.data })
      );
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: user-handlers.js:303 ~ function*handleAdminDashBoard ~ error:",
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
  handleGetCustomerDetail,
  handleAdminDashBoard,
};
