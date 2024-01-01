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
    authLogOutAdmin: (state, action) => ({ ...state, ...action.payload }),
    setLoading: (state, action) => ({
      ...state,
      loading: action.payload,
    }),
  },
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
  authLogOutAdmin,
} = authSlice.actions;
export default authSlice.reducer;
