import { takeLatest } from "redux-saga/effects";
import { cartAddNew, cartGetAll } from "./cart-slice";
import handleGetCartAll, { handleCartAddNew } from "./cart-handler";

export default function* cartSaga() {
  yield takeLatest(cartGetAll.type, handleGetCartAll);
  yield takeLatest(cartAddNew.type, handleCartAddNew);
}
