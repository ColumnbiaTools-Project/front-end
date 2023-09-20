"use client";
import { useQueryClient } from "@tanstack/react-query";
import useCart from "@/Hooks/useCart";

export default function AddCart() {
  const queryClient = useQueryClient();
  const { addOrUpdateItem } = useCart();
  const product: CartProduct = {
    productId: "firstproduct",
    id: "firstproduct",
    title: "바주카250",
    price: 250,
    image: "https://res.cloudinary.com/dgbv7iwjx/image/upload/v1685510648/samples/animals/kitten-playing.gif",
    description: "바주카 작은거입니다 정말 비싸요",
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
