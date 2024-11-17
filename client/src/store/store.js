import { configureStore } from "@reduxjs/toolkit";
import authReduces from "./auth-slice/index";

export const store = configureStore({
  reducer: {
    auth: authReduces,
  },
});
