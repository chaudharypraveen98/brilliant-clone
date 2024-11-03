// src/slices/CommonSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ErrorState } from "../../../types";

const initialState: ErrorState = {
  location: null,
  errorMessage: null,
  loading: false
};

const CommonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    startCall: (state, action: PayloadAction<{location:string}>) => {
        state.loading = true;
        state.location = action.payload.location;
    },
    setError: (state, action: PayloadAction<{location:string, errorMessage:string}>) => {
      state.location = action.payload.location;
      state.errorMessage = action.payload.errorMessage;
      state.loading =  false
    },
    finishCall: (state, action: PayloadAction<{location:string}>) => {
        state.loading = false;
        state.location = action.payload.location;
    },
  },
});

export const { startCall, setError,finishCall } = CommonSlice.actions;
export default CommonSlice.reducer;
