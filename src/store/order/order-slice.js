import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    dataOrderAll: [],
    dataOrderDetails: [],
    loadingOrder: false,
  },
  reducers: {
    orderGetDataAll: () => {},
    orderPost: (state, action) => ({ ...state, ...action.payload }),
    orderDetails: (state, action) => ({ ...state, ...action.payload }),
    orderUserCancel: (state, action) => ({ ...state, ...action.payload }),
    orderAdminFilter: (state, action) => ({ ...state, ...action.payload }),
    orderUserFilter: (state, action) => ({ ...state, ...action.payload }),
    orderAdminGet: (state, action) => ({ ...state, ...action.payload }),
    orderAdminGetDetails: (state, action) => ({ ...state, ...action.payload }),
    orderAdminCancel: (state, action) => ({ ...state, ...action.payload }),
    orderAdmiUpdateStatusOrder: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    updateDataOrder: (state, action) => ({
      ...state,
      dataOrderAll: action.payload.resultOrderAll || state.dataOrderAll,
      dataOrderDetails:
        action.payload.resultOrderDetails || state.dataOrderDetails,
    }),
    setLoadingOrder: (state, action) => ({
      ...state,
      loadingOrder: action.payload,
    }),
  },
});

export const {
  orderGetDataAll,
  updateDataOrder,
  orderPost,
  orderDetails,
  setLoadingOrder,
  orderAdminFilter,
  orderUserFilter,
  orderAdminGet,
  orderAdmiUpdateStatusOrder,
  orderAdminCancel,
  orderAdminGetDetails,
  orderUserCancel,
} = orderSlice.actions;

export default orderSlice.reducer;
