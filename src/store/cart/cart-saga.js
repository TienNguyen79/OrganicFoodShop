import { takeLatest } from "redux-saga/effects";
import {
  cartAddNew,
  cartDelete,
  cartGetAll,
  cartUpdate,
  wishListAddNew,
  wishListDelete,
  wishListGetAll,
} from "./cart-slice";
import handleGetCartAll, {
  handleCartAddNew,
  handleCartDelete,
  handleCartUpdate,
  handleGetWishListAll,
  handleWishListAddNew,
  handlewishListDelete,
} from "./cart-handler";

export default function* cartSaga() {
  yield takeLatest(cartGetAll.type, handleGetCartAll);
  yield takeLatest(cartAddNew.type, handleCartAddNew);
  yield takeLatest(cartDelete.type, handleCartDelete);
  yield takeLatest(cartUpdate.type, handleCartUpdate);
  yield takeLatest(wishListGetAll.type, handleGetWishListAll);
  yield takeLatest(wishListAddNew.type, handleWishListAddNew);
  yield takeLatest(wishListDelete.type, handlewishListDelete);
}
