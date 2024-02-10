import { Button } from "@/components/ui/button";
import { usePaymentStore } from "@/hooks";
import { useNavigate } from "react-router-dom";

export const PaymentPage = () => {
  const navigate = useNavigate();

  const { payment } = usePaymentStore();

  const onDone = () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center h-screen flex-col ">
      <div className="flex flex-col">
        <h1 className="font-bold text-center mb-5">
          Payment has been made successfully
        </h1>
      </div>

      <div className="flex flex-col">
        <h1 className="font-bold text-center">Product</h1>
        <p className="text-center">{payment.productName}</p>
      </div>

      <div className="flex flex-col">
        <h1 className="font-bold text-center">Price</h1>
        <p className="text-center"> {payment.amount} </p>
      </div>

      <div>
        <Button onClick={onDone} variant="default">
          Accept
        </Button>
      </div>
    </div>
  );
};
