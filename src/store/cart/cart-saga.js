import { takeLatest } from "redux-saga/effects";
import { cartAddNew, cartDelete, cartGetAll } from "./cart-slice";
import handleGetCartAll, {
  handleCartAddNew,
  handleCartDelete,
} from "./cart-handler";

export default function* cartSaga() {
  yield takeLatest(cartGetAll.type, handleGetCartAll);
  yield takeLatest(cartAddNew.type, handleCartAddNew);
  yield takeLatest(cartDelete.type, handleCartDelete);
}
