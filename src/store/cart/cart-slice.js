const { createSlice, createAction } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    dataCartAll: [],
    dataWishListAll: [],
    loadingCart: false,
  },
  reducers: {
    cartGetAll: () => {},
    wishListGetAll: () => {},
    cartAddNew: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    cartDelete: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    cartUpdate: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    updateDataCart: (state, action) => ({
      ...state,
      dataCartAll: action.payload.resultCartAll || state.dataCartAll,
    }),
    wishListDelete: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    wishListAddNew: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    updateDataWishList: (state, action) => ({
      ...state,
      dataWishListAll:
        action.payload.resultWishListAll || state.dataWishListAll,
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
  cartUpdate,
  updateDataCart,
  updateDataWishList,
  wishListGetAll,
  wishListAddNew,
  wishListDelete,
  setLoading,
} = cartSlice.actions;

export default cartSlice.reducer;
