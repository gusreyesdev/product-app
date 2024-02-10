import { useAppDispatch, useAppSelector } from "@/store/Hooks";
import { Payment } from "@/interfaces";
import { onPaymentInitLoading, onSetPayment, onPay } from "@/store";

export const usePaymentStore = () => {
  const { payment, isLoading } = useAppSelector((state) => state.payment);

  const dispatch = useAppDispatch();

  const startInitLoading = () => {
    dispatch(onPaymentInitLoading());
  };

  const startSetPayment = (payment: Payment) => {
    dispatch(onSetPayment({ ...payment }));
  };

  const startPay = () => {
    const response = Math.floor(Math.random() * 2) + 1;

    if (response === 1) {
      const status = "approved";

      dispatch(onPay(status));
    } else {
      const status = "denied";

      dispatch(onPay(status));
    }
  };

  return {
    payment,
    isLoading,

    startInitLoading,
    startSetPayment,

    startPay,
  };
};
