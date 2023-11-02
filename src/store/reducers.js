import authReducer from "./auth/auth-slice";
import proReducer from "./product/pro-slice";
import cateReducer from "./category/cate-slice";
import cartReducer from "./cart/cart-slice";
import blogReducer from "./blog/blog-slice";
const { combineReducers } = require("@reduxjs/toolkit");

export const reducer = combineReducers({
  auth: authReducer,
  product: proReducer,
  category: cateReducer,
  cart: cartReducer,
  blog: blogReducer,
});
