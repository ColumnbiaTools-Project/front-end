'use client'
import { createContext, ReactNode, useContext, useState } from "react";
import { PaymentContextType } from "@/@types/paymentsType";

const PaymentContext = createContext<PaymentContextType | undefined>(undefined);
export default function PaymentContextProvider({ children }: { children: ReactNode }) {
  const [productId, setProductId] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [zipCode, setZipCode] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  return (
    <PaymentContext.Provider value={
      {
        productId,
        totalPrice,
        zipCode,
        setZipCode,
        address,
        setAddress,
        setProductId,
        setTotalPrice,
      }}>
      {children}
    </PaymentContext.Provider>
  );
}

export function usePaymentContext(): PaymentContextType | undefined {
  return useContext(PaymentContext);
}
