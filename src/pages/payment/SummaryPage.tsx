import { Navigate, useNavigate } from "react-router-dom";
import { usePaymentStore } from "@/hooks";
import { Button } from "@/components/ui/button";
import { Loader } from "@/components/Loader";
import Swal from "sweetalert2";

export const SummaryPage = () => {
  const navigate = useNavigate();

  const { isLoading, payment, startInitLoading, startPay } = usePaymentStore();

  if (payment.reference === "") {
    return <Navigate to="/dashboard" />;
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen ">
        <Loader />
      </div>
    );
  }

  const onPay = () => {
    startInitLoading();

    setTimeout(() => {
      startPay();
    }, 3000);

    if (payment.status === "approved") {
      navigate("/dashboard/payment/");
    } else {
      Swal.fire({
        title: "Something went wrong!",
        text: "Error when making payment",
        icon: "error",
      });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen flex-col ">
      <div className="flex flex-col">
        <h1 className="font-bold text-center">Referece</h1>
        <p className="text-center">{payment.reference}</p>
      </div>

      <div className="flex flex-col">
        <h1 className="font-bold text-center">Product</h1>
        <p className="text-center">{payment.productName}</p>
      </div>

      <div className="flex flex-col">
        <h1 className="font-bold text-center">Card Number</h1>
        <p className="text-center"> {payment.card?.number} </p>
      </div>

      <div className="flex flex-col">
        <h1 className="font-bold text-center">Price</h1>
        <p className="text-center"> {payment.amount} </p>
      </div>

      <div className="flex flex-col">
        <h1 className="font-bold text-center">Payment Method</h1>
        <p className="text-center"> {payment.payment_method_type} </p>
      </div>

      <div className="flex flex-col">
        <h1 className="font-bold text-center">Currency</h1>
        <p className="text-center"> {payment.currency} </p>
      </div>

      <div>
        <Button onClick={onPay} variant="default">
          Pay
        </Button>
      </div>
    </div>
  );
};
