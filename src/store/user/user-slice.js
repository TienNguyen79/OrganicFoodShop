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
    CustomerDelete: (state, action) => ({ ...state, ...action.payload }),
    CustomerAdd: (state, action) => ({ ...state, ...action.payload }),
    CustomerRole: (state, action) => ({ ...state, ...action.payload }),
    CustomerSearch: (state, action) => ({ ...state, ...action.payload }),
    CustomerStatus: (state, action) => ({ ...state, ...action.payload }),
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
  CustomerDelete,
  CustomerAdd,
  CustomerRole,
  CustomerStatus,
  CustomerSearch,
} = userSlice.actions;
export default userSlice.reducer;
