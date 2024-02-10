import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { usePaymentStore, useProductStore, useUiStore } from "@/hooks";
import { Button } from "@/components/ui/button";
import { Loader } from "@/components/Loader";
import { PaymentModal } from "@/components/PaymentModal";
import { DollarSign, HashIcon, StarIcon } from "lucide-react";
import { Payment } from "@/interfaces";

export const ProductPage = () => {
  const { openModal } = useUiStore();

  const { state } = useLocation();

  const { isLoading, product, startLoadingProduct } = useProductStore();

  const { startSetPayment } = usePaymentStore();

  useEffect(() => {
    startLoadingProduct(state);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen ">
        <Loader />
      </div>
    );
  }

  const onOpenModal = () => {
    const payment: Payment = {
      amount: product.price,
      productName: product.title,
      reference: String(product.id),
    };

    startSetPayment(payment);

    openModal();
  };

  return (
    <>
      <div>
        <div className="flex justify-center py-3">
          <img
            className="max-h-60 sm:max-h-72"
            src={product.image}
            alt={product.title}
          />
        </div>

        <div className="flex justify-center">
          <h1 className="text-lg font-bold text-center">{product.title} </h1>
        </div>

        <div className="flex justify-center">
          <p className="px-3 text-base text-center ">{product.description}</p>
        </div>

        <div className="flex justify-center flex-row">
          <DollarSign /> <p className="pr-1"> {product.price} </p>
          <StarIcon /> <p className="mx-1"> {product.rating.rate} </p>
          <HashIcon /> <p className="">{product.category}</p>
        </div>

        <div className="flex justify-center mt-2 ">
          <Button onClick={onOpenModal} variant="default">
            Pay with credit card
          </Button>
        </div>
      </div>

      <PaymentModal />
    </>
  );
};
