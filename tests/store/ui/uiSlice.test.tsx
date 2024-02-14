import { onCloseModal, onOpenModal, uiSlice } from "../../../src/store";

describe("Ui Slice test", () => {
  test("Must return state default ", () => {
    expect(uiSlice.getInitialState().isModalOpen).toBeFalsy();
  });

  test("Must to change isModalOpen ", () => {
    let state = uiSlice.getInitialState();

    state = uiSlice.reducer(state, onOpenModal());
    expect(state.isModalOpen).toBeTruthy();

    state = uiSlice.reducer(state, onCloseModal());
    expect(state.isModalOpen).toBeFalsy();
  });
});
