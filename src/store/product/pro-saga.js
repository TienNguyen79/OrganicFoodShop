import { takeLatest } from "redux-saga/effects";
import {
  proGetAll,
  proGetBestSeller,
  proGetDetails,
  proGetFeauture,
  proGetHotDeal,
  proGetQuickview,
  proGetSearch,
  proGetTopRated,
  proGetWithFilter,
} from "./pro-slice";
import handleGetProBestSeller, {
  handleGetHotDeal,
  handleGetProAll,
  handleGetProDetails,
  handleGetProFeature,
  handleGetProQuickView,
  handleGetProSearch,
  handleGetProTopRated,
  handleGetProWithFilter,
} from "./pro-handlers";

export default function* proSaga() {
  yield takeLatest(proGetBestSeller.type, handleGetProBestSeller);
  yield takeLatest(proGetHotDeal.type, handleGetHotDeal);
  yield takeLatest(proGetTopRated.type, handleGetProTopRated);
  yield takeLatest(proGetFeauture.type, handleGetProFeature);
  yield takeLatest(proGetAll.type, handleGetProAll);
  yield takeLatest(proGetWithFilter.type, handleGetProWithFilter);
  yield takeLatest(proGetSearch.type, handleGetProSearch);
  yield takeLatest(proGetQuickview.type, handleGetProQuickView);
  yield takeLatest(proGetDetails.type, handleGetProDetails);
}
