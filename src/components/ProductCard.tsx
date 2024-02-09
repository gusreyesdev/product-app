import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Product } from "@/interfaces/product";
import { DollarSign } from "lucide-react";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  return (
    <Card className="flex flex-col sm:flex-row m-2 p-2">
      <div className="self-center" >
        <img className="sm:max-w-40" src={product.image} alt={product.title} />
      </div>

      <div>
        <CardHeader>
          <CardTitle>{product.title} </CardTitle>
          <CardDescription>{product.description} </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-row">
            <DollarSign /> <p className="mx-1"> {product.price} </p>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};
