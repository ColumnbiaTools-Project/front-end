'use client'
import useCart from "@/Hooks/useCart";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { usePaymentContext } from "@/context/PaymentContext";

type Props = {
  cart: CartProduct[];
}
export default function AllChoice({ cart }: Props) {
  const [choice, setChoice] = useState(false);
  const PriceContext = usePaymentContext();
  const { addOrUpdateItem } = useCart();
  const queryClient = useQueryClient();
  if (!choice) { PriceContext?.setTotalPrice(0)}

  const handleChoice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChoice(e.target.checked);
    cart.forEach((item) => {
      addOrUpdateItem.mutate({ ...item, checked: e.target.checked }, {
        onSuccess: () => {
          queryClient.refetchQueries(["cart"]);
        }
      });
    });
  };

  return (
    <div className={"flex justify-start items-center gap-2"}>
      <input
        onChange={handleChoice}
        className={"box-content h-[24px] w-[24px]"}
        checked={choice}
        type="checkbox" />
      <span className={"text-[24px]"}>전체 선택</span>
    </div>
  );
}
