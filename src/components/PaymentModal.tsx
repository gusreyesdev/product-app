import { Dialog, DialogContent } from "@/components/ui/dialog";

import { useUiStore } from "@/hooks";
import { CreditCardForm } from "./CreditCardForm";

export const PaymentModal = () => {
  const { isModalOpen, closeModal } = useUiStore();

  return (
    <Dialog open={isModalOpen} onOpenChange={closeModal}>
      <DialogContent className="sm:max-w-[425px]">
        <div className="grid gap-4 py-4">
          <CreditCardForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};
