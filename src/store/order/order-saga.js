import { takeLatest } from "redux-saga/effects";
import {
  orderAdmiUpdateStatusOrder,
  orderAdminCancel,
  orderAdminFilter,
  orderAdminGet,
  orderAdminGetDetails,
  orderDetails,
  orderGetDataAll,
  orderPost,
  orderUserCancel,
  orderUserFilter,
} from "./order-slice";
import handleGetOrderAll, {
  handleAdminCancelOrder,
  handleAdminGetOrder,
  handleAdminGetOrderDetail,
  handleAdminUpdateStastusOrder,
  handleCancelOrder,
  handleGetFilterOrder,
  handleGetFilterUserOrder,
  handleGetOrderDetails,
  handlePostOrder,
} from "./order-handlers";
import { CateAdd } from "../category/cate-slice";
import { handlePostCategory } from "../category/cate-handlers";

export default function* orderSaga() {
  yield takeLatest(orderGetDataAll.type, handleGetOrderAll);
  yield takeLatest(orderPost.type, handlePostOrder);
  yield takeLatest(orderDetails.type, handleGetOrderDetails);
  yield takeLatest(CateAdd.type, handlePostCategory);
  yield takeLatest(orderAdminFilter.type, handleGetFilterOrder);
  yield takeLatest(orderUserFilter.type, handleGetFilterUserOrder);
  yield takeLatest(orderAdminGet.type, handleAdminGetOrder);
  yield takeLatest(orderAdminGetDetails.type, handleAdminGetOrderDetail);
  yield takeLatest(orderAdminCancel.type, handleAdminCancelOrder);
  yield takeLatest(orderUserCancel.type, handleCancelOrder);
  yield takeLatest(
    orderAdmiUpdateStatusOrder.type,
    handleAdminUpdateStastusOrder
  );
}
