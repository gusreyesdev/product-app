import {
  onLoadProduct,
  onLoadProducts,
  productSlice,
} from "../../../src/store";
import {
  initialState,
  productWithProductSelectedState,
  products,
} from "../../fixtures/productState";

describe("product Slice test", () => {
  test("Must return state default ", () => {
    const state = productSlice.getInitialState();

    expect(state).toEqual(initialState);
  });

  test("onLoadProducts test", () => {
    const state = productSlice.reducer(initialState, onLoadProducts(products));

    expect(state.products).toEqual(products);

    const newState = productSlice.reducer(
      initialState,
      onLoadProducts(products)
    );

    expect(newState.products.length).toBe(products.length);
  });

  test("onLoadProduct test", () => {
    const state = productSlice.reducer(
      initialState,
      onLoadProduct(productWithProductSelectedState)
    );

    expect(state.product).toEqual(productWithProductSelectedState);
  });
});
