import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "./slices/authSlice";
import authReducer from "@/app/(page)/feature/auth/state/auth-slice";


export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});