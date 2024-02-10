import { createSlice } from "@reduxjs/toolkit";
import { Payment } from "@/interfaces";

interface InitialState {
  payment: Payment;
  isLoading: boolean;
}

const initialState: InitialState = {
  payment: {
    amount: 0,
    productName: "",
    reference: "",
    payment_method_type: "",
    currency: "",
    status: "initial",
    card: {
      number: 0,
      name: "",
      expiry: 0,
      cvc: 0,
    },
  },
  isLoading: false,
};

export const paymentSlice = createSlice({
  name: "payment",
  initialState,

  reducers: {
    onPaymentInitLoading: (state) => {
      state.isLoading = true;
    },

    onSetPayment: (state, { payload }) => {
      state.payment = { ...state.payment, ...payload };
    },

    onPay: (state, { payload }) => {
      state.isLoading = false;
      state.payment.status = payload;
    },
  },
});

export const { onPaymentInitLoading, onSetPayment, onPay } =
  paymentSlice.actions;
