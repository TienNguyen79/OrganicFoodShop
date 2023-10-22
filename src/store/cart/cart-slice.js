const { createSlice, createAction } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    dataCartAll: [],
    loadingCart: false,
  },
  reducers: {
    cartGetAll: () => {},
    cartAddNew: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    cartDelete: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    updateDataCart: (state, action) => ({
      ...state,
      dataCartAll: action.payload.resultCartAll || state.dataCartAll,
    }),
    setLoading: (state, action) => ({
      ...state,
      loadingCart: action.payload,
    }),
  },
});

export const {
  cartGetAll,
  cartAddNew,
  cartDelete,
  updateDataCart,
  setLoading,
} = cartSlice.actions;

export default cartSlice.reducer;
