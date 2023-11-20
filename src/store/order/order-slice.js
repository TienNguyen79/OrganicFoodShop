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
} = orderSlice.actions;

export default orderSlice.reducer;
