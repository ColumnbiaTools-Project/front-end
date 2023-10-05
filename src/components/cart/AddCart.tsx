"use client";
import { useQueryClient } from "@tanstack/react-query";
import useCart from "@/Hooks/useCart";

export default function AddCart() {
  const queryClient = useQueryClient();
  const { addOrUpdateItem } = useCart();
  const product: CartProduct = {
    productId: "thirdproduct",
    id: "thirdproduct",
    title: "세번째사이즈의 바주카",
    price: 150,
    image: "https://res.cloudinary.com/dgbv7iwjx/image/upload/v1695383080/14FFBA_4_e9ygtr.png",
    description: "바주카 어중간한거입니다 정말 비싸요",
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
