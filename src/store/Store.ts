import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from ".";

export const Store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
