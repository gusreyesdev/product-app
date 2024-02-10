import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useProductStore } from "@/hooks";
import { Loader } from "@/components/Loader";
import { ProductCard } from "@/components/ProductCard";
import { Product } from "@/interfaces";


export const DashboardPage = () => {
  const { isLoading, products, startLoadingProducts } = useProductStore();
  const navigate = useNavigate();

  useEffect(() => {
    startLoadingProducts();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen ">
        <Loader />
      </div>
    );
  }

  const onDetails = (product: Product) => {
    navigate("/dashboard/details/", { state: { id: product.id } });
  };

  return (
    <>
      <div className="flex flex-col">
        {products.map((product) => (
          <div onClick={() => onDetails(product)} key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>

    </>
  );
};
