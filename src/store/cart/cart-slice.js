const { createSlice, createAction } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    dataCartAll: [],
  },
  reducers: {
    cartGetAll: () => {},
    cartAddNew: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    updateDataCart: (state, action) => ({
      ...state,
      dataCartAll: action.payload.resultCartAll || state.dataCartAll,
    }),
  },
});

export const { cartGetAll, cartAddNew, updateDataCart } = cartSlice.actions;

export default cartSlice.reducer;
