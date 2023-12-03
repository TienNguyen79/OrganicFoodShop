import { takeLatest } from "redux-saga/effects";
import {
  CustomerAdd,
  CustomerDelete,
  CustomerDetails,
  CustomerGetAll,
  CustomerRole,
  CustomerSearch,
  CustomerStatus,
  UserChangePassword,
  UserUpdate,
  UserUpdateAddress,
} from "./user-slice";
import handleUpdateUser, {
  handleAddCustomer,
  handleChangePasswordUser,
  handleDeleteCustomer,
  handleGetAllCustomer,
  handleGetCustomerDetail,
  handleRoleCustomer,
  handleSearchCustomer,
  handleStatusCustomer,
  handleUpdateAddressUser,
} from "./user-handlers";

export default function* userSaga() {
  yield takeLatest(UserUpdate.type, handleUpdateUser);
  yield takeLatest(UserChangePassword.type, handleChangePasswordUser);
  yield takeLatest(UserUpdateAddress.type, handleUpdateAddressUser);
  yield takeLatest(CustomerGetAll.type, handleGetAllCustomer);
  yield takeLatest(CustomerDelete.type, handleDeleteCustomer);
  yield takeLatest(CustomerAdd.type, handleAddCustomer);
  yield takeLatest(CustomerRole.type, handleRoleCustomer);
  yield takeLatest(CustomerStatus.type, handleStatusCustomer);
  yield takeLatest(CustomerSearch.type, handleSearchCustomer);
  yield takeLatest(CustomerDetails.type, handleGetCustomerDetail);
}
