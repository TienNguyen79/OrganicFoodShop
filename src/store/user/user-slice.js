import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    dataAllCustomer: [],
  },
  reducers: {
    UserUpdate: (state, action) => ({ ...state, ...action.payload }),
    UserUpdateAddress: (state, action) => ({ ...state, ...action.payload }),
    UserChangePassword: (state, action) => ({ ...state, ...action.payload }),
    CustomerGetAll: () => {},
    updateDataCustomer: (state, action) => ({
      ...state,
      dataAllCustomer:
        action.payload.resultDataCustomerAll || state.dataAllCustomer,
    }),
  },
});

export const {
  UserUpdate,
  UserChangePassword,
  UserUpdateAddress,
  updateDataCustomer,
  CustomerGetAll,
} = userSlice.actions;
export default userSlice.reducer;
