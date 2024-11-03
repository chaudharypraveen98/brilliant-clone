// src/slices/commonSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../../../types";

const initialState: UserState = {
  uid: null,
  displayName: null,
  email: null,
  photoURL: null,
};

const commonSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.uid = action.payload.uid;
      state.displayName = action.payload.displayName;
      state.email = action.payload.email;
      state.photoURL = action.payload.photoURL;
    },
    clearUser: (state) => {
      state.uid = null;
      state.displayName = null;
      state.email = null;
      state.photoURL = null;
    },
  },
});

export const { setUser, clearUser } = commonSlice.actions;
export default commonSlice.reducer;
