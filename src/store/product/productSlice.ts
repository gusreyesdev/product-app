import { createSlice } from "@reduxjs/toolkit";
import { Product, ProductsResponse } from "@/interfaces";

interface InitialState {
  products: ProductsResponse[];
  product: Product;
  isLoading: boolean;
}

const initialState: InitialState = {
  products: [],
  product: {
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
      rate: 0,
      count: 0,
    },
  },
  isLoading: true,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    onProductInitLoading: (state) => {
      state.isLoading = true;
    },

    onLoadProducts: (state, { payload }) => {
      state.isLoading = false;

      payload.forEach((product: ProductsResponse) => {
        const exists = state.products.some(
          (apiProduct) => apiProduct.id === product.id
        );

        if (!exists) {
          state.products.push(product);
        }
      });
    },

    onLoadProduct: (state, { payload }) => {
      state.isLoading = false;
      state.product = payload;
    },
  },
});

export const { onProductInitLoading, onLoadProducts, onLoadProduct } =
  productSlice.actions;
