import { takeLatest } from "redux-saga/effects";
import { cateGetdataAll, cateGetdataWithId } from "./cate-slice";
import handleGetCate, { handleGetCateWithId } from "./cate-handlers";

export default function* cateSaga() {
  yield takeLatest(cateGetdataAll.type, handleGetCate);
  yield takeLatest(cateGetdataWithId.type, handleGetCateWithId);
}
