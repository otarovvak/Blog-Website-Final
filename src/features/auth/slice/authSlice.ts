import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  accessToken: string;
  refreshToken: string;
}
const loadToken = () => {
  const token = localStorage.getItem("access_token");
  return token || "";
};

const initialState: AuthState = {
  accessToken: loadToken(),
  refreshToken: "",
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setTokens: (
      state,
      action: PayloadAction<{ accessToken: string; refreshToken: string }>
    ) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;

      localStorage.setItem("access_token", action.payload.accessToken);
      localStorage.setItem("refresh_token", action.payload.refreshToken);
    },
    clearTokens: (state) => {
      state.accessToken = "";
      state.refreshToken = "";
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
    },
    initializeAuth: (state) => {
      state.accessToken = loadToken();
    },
  },
});

export const { setTokens, clearTokens, initializeAuth } = authSlice.actions;
export default authSlice.reducer;
