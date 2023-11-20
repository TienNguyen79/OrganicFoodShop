import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    UserUpdate: (state, action) => ({ ...state, ...action.payload }),
    UserChangePassword: (state, action) => ({ ...state, ...action.payload }),
  },
});

export const { UserUpdate, UserChangePassword } = userSlice.actions;
export default userSlice.reducer;
