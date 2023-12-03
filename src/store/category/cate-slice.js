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
    CateGetDetails: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    CateAdd: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    CateDelete: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    CateUpdate: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    CateSearch: (state, action) => ({
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

export const {
  cateGetdataAll,
  cateGetdataWithId,
  updateData,
  CateAdd,
  CateDelete,
  CateUpdate,
  CateGetDetails,
  CateSearch,
} = categorySlice.actions;

export default categorySlice.reducer;
