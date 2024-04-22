// store.ts (or wherever you have defined your redux store)
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/slice/authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});

// Create and export RootState type based on the store's state shape
export type RootState = ReturnType<typeof store.getState>;

export default store;
