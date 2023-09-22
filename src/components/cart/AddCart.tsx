"use client";
import { useQueryClient } from "@tanstack/react-query";
import useCart from "@/Hooks/useCart";

export default function AddCart() {
  const queryClient = useQueryClient();
  const { addOrUpdateItem } = useCart();
  const product: CartProduct = {
    productId: "secondproduct",
    id: "secondproduct",
    title: "작은사이즈의 바주카",
    price: 250,
    image: "https://res.cloudinary.com/dgbv7iwjx/image/upload/v1693809195/next-test/%EA%B3%A0%EC%9C%A4%EC%A0%95%EC%82%AC%EC%A7%84_sillvp.jpg",
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
