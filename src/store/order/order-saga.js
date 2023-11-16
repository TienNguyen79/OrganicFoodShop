import { takeLatest } from "redux-saga/effects";
import { orderDetails, orderGetDataAll, orderPost } from "./order-slice";
import handleGetOrderAll, {
  handleGetOrderDetails,
  handlePostOrder,
} from "./order-handlers";

export default function* orderSaga() {
  yield takeLatest(orderGetDataAll.type, handleGetOrderAll);
  yield takeLatest(orderPost.type, handlePostOrder);
  yield takeLatest(orderDetails.type, handleGetOrderDetails);
}
