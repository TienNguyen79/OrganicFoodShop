const { createSlice, createAction } = require("@reduxjs/toolkit");

const productSlice = createSlice({
  name: "product",
  initialState: {
    dataPro: [],
    dataBestSeller: [],
    dataHotDeal: [],
    dataTopRated: [],
    dataFeauture: [],
    dataProWithFilter: [],
    dataProSearch: [],
    loading: false,
  },
  reducers: {
    proGetAll: () => {},
    proGetBestSeller: () => {},
    proGetHotDeal: () => {},
    proGetTopRated: () => {},
    proGetFeauture: () => {},
    proGetWithFilter: () => {},
    proGetSearch: () => {},

    updateData: (state, action) => ({
      ...state,
      dataBestSeller: action.payload.resultBestSellers || state.dataBestSeller,
      dataHotDeal: action.payload.resultHotDeal || state.dataHotDeal,
      dataTopRated: action.payload.resultTopRated || state.dataTopRated,
      dataFeauture: action.payload.resultFeauture || state.dataFeauture,
      dataPro: action.payload.resultProAll || state.dataPro,
      dataProWithFilter:
        action.payload.resultProWithFilter || state.dataProWithFilter,
      dataProSearch: action.payload.resultProSearch || state.dataProSearch,
    }),
    setLoading: (state, action) => ({
      ...state,
      loading: action.payload,
    }),
    // updateData2: (state, action) => ({
    //   ...state,
    //   dataHotDeal: action.payload.data2,
    // }),
  },
});

export const {
  proGetBestSeller,
  updateData,
  proGetHotDeal,
  proGetTopRated,
  proGetFeauture,
  updateData2,
  proGetAll,
  proGetWithFilter,
  proGetSearch,
  setLoading,
} = productSlice.actions;

export default productSlice.reducer;
