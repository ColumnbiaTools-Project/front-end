"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useCart from "@/Hooks/useCart";
import { useQueryClient, useQuery } from "@tanstack/react-query";

interface Props {
  product: Product;
}

export default function CartBtn({ product }: Props) {
  const { addOrUpdateItem } = useCart();
  const queryClient = useQueryClient();
  const quantityQuery = useQuery(["quantity"]);

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
          const modal = document.getElementById(
            "cart-modal",
          ) as HTMLDialogElement;
          if (modal) {
            modal.showModal();
          }
        },
      });
    }
  };

  return (
    <button
      className="w-20 h-20 border border-whitegray flex justify-center items-center"
      onClick={addCartHandler}
    >
      <Image
        src="/images/shopping-bag.png"
        width={40}
        height={40}
        alt="shopping-bag"
      />
    </button>
  );
}
