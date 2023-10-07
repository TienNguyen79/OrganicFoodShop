import { takeLatest } from "redux-saga/effects";
import {
  proGetAll,
  proGetBestSeller,
  proGetFeauture,
  proGetHotDeal,
  proGetTopRated,
} from "./pro-slice";
import handleGetProBestSeller, {
  handleGetHotDeal,
  handleGetProAll,
  handleGetProFeature,
  handleGetProTopRated,
} from "./pro-handlers";

export default function* proSaga() {
  yield takeLatest(proGetBestSeller.type, handleGetProBestSeller);
  yield takeLatest(proGetHotDeal.type, handleGetHotDeal);
  yield takeLatest(proGetTopRated.type, handleGetProTopRated);
  yield takeLatest(proGetFeauture.type, handleGetProFeature);
  yield takeLatest(proGetAll.type, handleGetProAll);
}
