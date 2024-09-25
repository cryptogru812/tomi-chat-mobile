import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  address: null,
  isConnected_: false,
  userName: null,
  userProfilePicture: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    connect: (state, action) => {
      state.address = action.payload.address;
      state.isConnected_ = true;
    },
    disconnect: (state) => {
      state.address = null;
      state.isConnected_ = false;
    },
  },
});

export const { connect, disconnect } = authSlice.actions;
export default authSlice.reducer;
