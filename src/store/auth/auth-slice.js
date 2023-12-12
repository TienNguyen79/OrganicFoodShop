const { createSlice, createAction } = require("@reduxjs/toolkit");
// export const otherAction = createAction("navigateSuccess");
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    accessToken: null,
    loading: false,
  },
  reducers: {
    authRegister: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    authLogin: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    authLoginAdmin: (state, action) => ({
      ...state,
      ...action.payload,
    }),

    authUpdateUser: (state, action) => ({
      ...state,
      user: action.payload.user,
      accessToken: action.payload.accessToken,
    }),
    authFetchMe: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    authCheckToken: () => {},
    authLogOut: (state, action) => ({ ...state, ...action.payload }),
    setLoading: (state, action) => ({
      ...state,
      loading: action.payload,
    }),
    // authGetStatus: (state, action) => ({
    //   ...state,
    //   statusErrorMess: action.payload,
    // }),
  },
  // extraReducers: (builder) => {
  //   builder.addCase(otherAction, (state, action) => {
  //     state.navigateSuccess = action.payload;
  //   });
  // },
});

export const {
  authRegister,
  authLogin,
  authUpdateUser,
  authFetchMe,
  authCheckToken,
  authLogOut,
  authGetStatus,
  setLoading,
  authLoginAdmin,
} = authSlice.actions;
export default authSlice.reducer;
