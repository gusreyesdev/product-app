import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface CounterState {
  isModalOpen: boolean;
}

// Define the initial state using that type
const initialState: CounterState = {
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
