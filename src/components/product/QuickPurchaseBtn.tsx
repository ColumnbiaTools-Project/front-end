"use client";
import { useRouter } from "next/navigation";
import useCart from "@/Hooks/useCart";
import { useQueryClient, useQuery } from "@tanstack/react-query";

interface Props {
  product: Product;
}

export default function QuickPurchaseBtn({ product }: Props) {
  const { addOrUpdateItem } = useCart();
  const queryClient = useQueryClient();
  const quantityQuery = useQuery(["quantity"]);
  const router = useRouter();

  const addCartHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (product) {
      const cartProduct: CartProduct = {
        productId: product.id!,
        title: product.title,
        price: product.price,
        color: "black",
        id: product.id!,
        description: product.description,
        image: product.images[0],
        checked: false,
        category: product.category,
        quantity: quantityQuery.data as number,
      };
      addOrUpdateItem.mutate(cartProduct, {
        onSuccess: () => {
          queryClient.refetchQueries(["cart"]);
          router.push("/cart");
        },
      });
    }
  };
  return (
    <button className="btn_medium_1" onClick={addCartHandler}>
      구매하기
    </button>
  );
}
