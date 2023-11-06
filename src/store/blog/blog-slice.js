const { createSlice, createAction } = require("@reduxjs/toolkit");

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    dataBlogAll: [],
    dataBlogWithParam: [],
    dataCommentBlog: [],
    loading: false,
  },
  reducers: {
    blogGetAll: () => {},
    blogGetWithParam: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    blogComment: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    blogAddCmtNew: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    blogDeleteCmt: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    blogUpdateCmt: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    updateDataBlog: (state, action) => ({
      ...state,
      dataBlogAll: action.payload.resultBlogAll || state.dataBlogAll,
      dataBlogWithParam:
        action.payload.resultBlogWithParam || state.dataBlogWithParam,
      dataCommentBlog:
        action.payload.resultCommentBlog || state.dataCommentBlog,
    }),

    setLoading: (state, action) => ({
      ...state,
      loading: action.payload,
    }),
  },
});

export const {
  blogGetAll,
  updateDataBlog,
  blogGetWithParam,
  blogComment,
  blogAddCmtNew,
  setLoading,
  blogDeleteCmt,
  blogUpdateCmt,
} = blogSlice.actions;

export default blogSlice.reducer;
