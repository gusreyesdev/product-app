import { productsApi } from "@/api";
import { useAppDispatch, useAppSelector } from "@/store/Hooks";
import { onProductInitLoading, onLoadProducts, onLoadProduct } from "@/store";
import Swal from "sweetalert2";
import { AxiosError } from "axios";
import { Product } from "@/interfaces";


export const useProductStore = () => {
  const { products, product, isLoading } = useAppSelector(
    (state) => state.product
  );
  
  const dispatch = useAppDispatch();

  const startLoadingProducts = async () => {
    dispatch(onProductInitLoading());

    try {
      const { data } = await productsApi.get("products");
      dispatch(onLoadProducts(data));
    } catch (error) {
      console.log("error loading data", error);

      if (error instanceof AxiosError) {
        Swal.fire({
          title: "Something went wrong!",
          text: error.response?.data,
          icon: "error",
        });
      }
    }
  };

  const startLoadingProduct = async (product: Product) => {
    const { id } = product;

    dispatch(onProductInitLoading());

    try {
      const { data } = await productsApi.get(`products/${id}`);

      dispatch(onLoadProduct(data));
    } catch (error) {
      if (error instanceof AxiosError) {
        Swal.fire({
          title: "Something went wrong!",
          text: error.response?.data,
          icon: "error",
        });
      }
    }
  };



  return {
    products,
    product,
    isLoading,
    startLoadingProducts,
    startLoadingProduct,
  };
};
