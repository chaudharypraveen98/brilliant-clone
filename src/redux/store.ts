// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import commonReducer from './slices/commonSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    common: commonReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
