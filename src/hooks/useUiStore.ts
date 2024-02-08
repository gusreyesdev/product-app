import { useAppDispatch, useAppSelector } from "@/store/Hooks";
import { onCloseModal, onOpenModal } from "@/store";

export const useUiStore = () => {
  const { isModalOpen } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  const openModal = () => {
    dispatch( onOpenModal() );
  };

  const closeModal = () => {
    dispatch( onCloseModal() )
  }

  return {
    isModalOpen,

    openModal,
    closeModal
  };
};
