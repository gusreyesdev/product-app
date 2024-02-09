import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  isModalOpen: boolean;
}

const initialState: InitialState = {
  isModalOpen: false,
};

export const uiSlice = createSlice({
  name: "ui",

  initialState,
  reducers: {
    onOpenModal: (state) => {
      state.isModalOpen = true;
    },
    onCloseModal: (state) => {
      state.isModalOpen = false;
    },
  },
});

export const { onOpenModal, onCloseModal } = uiSlice.actions;
