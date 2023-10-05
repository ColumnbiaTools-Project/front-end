import { useState, useEffect } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import {
  useQueryClient,
  useQuery,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";

export default function QuantityButton() {
  const [quantity, setQuantity] = useState<number>(1);

  const queryClient = useQueryClient();
  const quantityQuery = useQuery(["quantity"], () => quantity);
  const quantityMutation = useMutation<void, unknown, number>(
    async (newQuantity: number): Promise<void> => {
      setQuantity(newQuantity);
    },
    {
      mutationKey: ["quantity"],
    },
  ) as UseMutationResult<void, unknown, number, unknown>;

  useEffect(() => {
    queryClient.setQueryData(["quantity"], quantity);
  }, [quantity, queryClient]);

  const handleIncrease = () => {
    quantityMutation.mutateAsync(quantity + 1);
  };
  const handleDecrease = () => {
    if (quantity <= 1) return;
    quantityMutation.mutateAsync(quantity - 1);
  };

  console.log(quantityQuery.data);
  return (
    <div className="flex justify-between items-center border-whitegray border h-9">
      <button
        onClick={handleDecrease}
        className={`w-10 border-r h-full flex justify-center items-center ${
          quantity <= 1 ? "text-whitegray" : ""
        }`}
        disabled={quantity <= 1}
      >
        <AiOutlineMinus size={20} />
      </button>
      <div className="w-10 text-center align-middle">{quantity}</div>
      <button
        onClick={handleIncrease}
        className="w-10 border-l h-full flex justify-center items-center"
      >
        <AiOutlinePlus size={20} />
      </button>
    </div>
  );
}
