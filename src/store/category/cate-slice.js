const { createSlice, createAction } = require("@reduxjs/toolkit");

const categorySlice = createSlice({
  name: "category",
  initialState: {
    dataCate: [],
    dataCateWithId: [],
  },
  reducers: {
    cateGetdataAll: () => {},
    cateGetdataWithId: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    updateData: (state, action) => ({
      ...state,
      dataCate: action.payload.resultCateAll || state.dataCate,
      dataCateWithId: action.payload.resultCateWithId || state.dataCateWithId,
    }),
  },
});

export const { cateGetdataAll, cateGetdataWithId, updateData } =
  categorySlice.actions;

export default categorySlice.reducer;
