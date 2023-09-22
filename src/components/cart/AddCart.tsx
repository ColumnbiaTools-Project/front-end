"use client";


import { useCart } from "@/hooks/useCart";
import { useQueryClient } from "@tanstack/react-query";

export default function AddCart() {
  const queryClient = useQueryClient();
  const { addOrUpdateItem } = useCart();
  const product: CartProduct = {
    id: "secondproduct",
    title: "바주카550",
    price: 3500000,
    image: "https://res.cloudinary.com/dgbv7iwjx/image/upload/v1685510637/samples/food/pot-mussels.jpg",
    description: "바주카 큰것입니다 정말 무거워요",
    category: "바주카",
    quantity: 1,
    checked: false,
    color: "black"
  };

  function handleClick() {
    addOrUpdateItem.mutate(product, {
      onSuccess: () => {
        queryClient.refetchQueries(["cart"]);
      }
    })
  }

  return (
    <>
      <button onClick={handleClick}>add</button>
    </>
  );
}
