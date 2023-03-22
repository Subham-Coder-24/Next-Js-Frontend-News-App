import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./actions/newsSlice";

export const store = configureStore({
  reducer: {
    news:newsReducer,
  },
});
