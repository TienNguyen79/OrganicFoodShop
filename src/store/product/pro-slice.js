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
    dataQuickview: [],
    dataProDetails: [],
    loading: false,
    loadingSearchNamePro: false,
    loadings: {
      all: false,
      bestSeller: false,
      hotDeal: false,
      topRated: false,
      feauture: false,
      withFilter: false,
      search: false,
      quickview: false,
      details: false,
      searchNamePro: false,
    },
  },
  reducers: {
    proGetAll: () => {},
    proGetBestSeller: () => {},
    proGetHotDeal: () => {},
    proGetTopRated: () => {},
    proGetFeauture: () => {},
    proGetWithFilter: () => {},
    proGetSearch: () => {},
    proGetQuickview: () => {},
    proGetDetails: () => {},
    ProAdminGet: () => {},
    ProAdminAdd: (state, action) => ({
      ...state,
      ...action.payload,
    }),
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
      dataQuickview: action.payload.resultProQuickView || state.dataQuickview,
      dataProDetails: action.payload.resultProDetails || state.dataProDetails,
    }),
    setLoading: (state, action) => ({
      ...state,
      loading: action.payload,
    }),
    setLoadingSearchNamePro: (state, action) => ({
      ...state,
      loadingSearchNamePro: action.payload,
    }),

    setLoadings: (state, action) => ({
      ...state,
      loadings: {
        ...state.loadings,
        [action.payload.component]: action.payload.value,
      },
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
  proGetQuickview,
  proGetDetails,
  setLoading,
  setLoadingSearchNamePro,
  setLoadings,
  ProAdminGet,
  ProAdminAdd,
} = productSlice.actions;

export default productSlice.reducer;
