import authReducer from "./auth/auth-slice";
import proReducer from "./product/pro-slice";
import cateReducer from "./category/cate-slice";
const { combineReducers } = require("@reduxjs/toolkit");

export const reducer = combineReducers({
  auth: authReducer,
  product: proReducer,
  category: cateReducer,
});
