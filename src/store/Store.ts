import { configureStore } from "@reduxjs/toolkit";
import { productSlice, paymentSlice, uiSlice } from ".";

export const Store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    product: productSlice.reducer,
    payment: paymentSlice.reducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
