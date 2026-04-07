import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  token: string | null;
  role: "CUSTOMER" | "WORKER" | "ADMIN" | null;
  fullName: string | null;
};

const initialState: AuthState = {
  token: null,
  role: null,
  fullName: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<AuthState>) => {
      state.token = action.payload.token;
      state.role = action.payload.role;
      state.fullName = action.payload.fullName;
    },
    logout: (state) => {
      state.token = null;
      state.role = null;
      state.fullName = null;
    },
  },
});

export const { setAuth, logout } = authSlice.actions;
export default authSlice.reducer;
