"use client";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export default function QuantityButton() {
  const [quantity, setQuantity] = useState<number>(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrease = () => {
    if (quantity <= 1) return;
    setQuantity(quantity - 1);
  };
  return (
    <div className="flex justify-between items-center border-whitegray border h-9">
      <button
        onClick={handleDecrease}
        className={`w-10 border-r h-full flex justify-center items-center ${
          quantity <= 1 ? "text-whitegray" : ""
        }`}
        disabled={quantity <= 1 ? true : false}
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
