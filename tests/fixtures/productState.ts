export const products = [
  {
    id: 1,
    title: "product test title",
    price: 123,
    description: "product test description",
    category: "product test category",
    image: "product test image",
    rating: {
      rate: 1,
      count: 2,
    },
  },
  {
    id: 2,
    title: "product test title",
    price: 1234,
    description: "product test description",
    category: "product test category",
    image: "product test image",
    rating: {
      rate: 2,
      count: 4,
    },
  },
];

export const initialState = {
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

export const productWithProductsState = {
  products: [...products],
  isLoading: false,
};

export const productWithProductSelectedState = {
  product: {
    id: 2,
    title: "product test title",
    price: 1234,
    description: "product test description",
    category: "product test category",
    image: "product test image",
    rating: {
      rate: 2,
      count: 4,
    },
  },

  isLoading: false,
};
