'use client'
import { createContext, ReactNode, useContext, useState } from "react";
import { OrderPersonType, PaymentContextType } from "@/@types/paymentsType";

const PaymentContext = createContext<PaymentContextType | undefined>(undefined);
export default function PaymentContextProvider({ children }: { children: ReactNode }) {
  const [productId, setProductId] = useState<string[]>([]);
  const [title, setTitle] = useState<string>("");
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [updateOrderPerson, setUpdateOrderPerson]
    = useState<OrderPersonType | undefined>(undefined);

  return (
    <PaymentContext.Provider value={
      {
        productId,
        title,
        totalPrice,
        updateOrderPerson,
        setUpdateOrderPerson,
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
