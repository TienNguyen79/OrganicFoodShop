import { takeLatest } from "redux-saga/effects";
import {
  CateAdd,
  CateDelete,
  CateGetDetails,
  CateSearch,
  CateUpdate,
  cateGetdataAll,
  cateGetdataWithId,
} from "./cate-slice";
import handleGetCate, {
  handleDeleteCategory,
  handleGetCateWithId,
  handleGetDetailCate,
  handlePostCategory,
  handleSearchCategory,
  handleUpdateCategory,
} from "./cate-handlers";

export default function* cateSaga() {
  yield takeLatest(cateGetdataAll.type, handleGetCate);
  yield takeLatest(cateGetdataWithId.type, handleGetCateWithId);
  // yield takeLatest(CateAdd.type, handlePostCategory);
  yield takeLatest(CateDelete.type, handleDeleteCategory);
  yield takeLatest(CateUpdate.type, handleUpdateCategory);
  yield takeLatest(CateGetDetails.type, handleGetDetailCate);
  yield takeLatest(CateSearch.type, handleSearchCategory);
}
