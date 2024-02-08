import { PaymentModal } from "@/components/PaymentModal";
import { Button } from "@/components/ui/button";

import { useUiStore } from "@/hooks";

export const DashboardPage = () => {
  const { openModal } = useUiStore();

  return (
    <>
      <Button onClick={openModal} variant="outline">
        Open Modal
      </Button>

      <PaymentModal />
    </>
  );
};
