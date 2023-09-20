'use client'
import { createContext, ReactNode, useContext, useState } from "react";
import { PaymentContextType } from "@/@types/paymentsType";

const PaymentContext = createContext<PaymentContextType | undefined>(undefined);
export default function PaymentContextProvider({ children }: { children: ReactNode }) {
  const [productId, setProductId] = useState<string[]>([]);
  const [title, setTitle] = useState<string>("");
  const [totalPrice, setTotalPrice] = useState<number>(0);

  return (
    <PaymentContext.Provider value={
      {
        productId,
        title,
        totalPrice,
        setProductId,
        setTitle,
        setTotalPrice,
      }}>
      {children}
    </PaymentContext.Provider>
  );
}

export function usePaymentContext(): PaymentContextType | undefined {
  return useContext(PaymentContext);
}
