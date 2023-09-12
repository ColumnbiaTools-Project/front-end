'use client'
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

export interface PaymentContextProps {
  title: string;
  totalPrice: number;
  orderName: string;
  orderEmail: string;
  check: boolean;
  orderCellPhone: string,
  setTitle: Dispatch<SetStateAction<string>>;
  setTotalPrice: Dispatch<SetStateAction<number>>;
  // setOrderName: Dispatch<SetStateAction<string>>;
  // setOrderEmail: Dispatch<SetStateAction<string>>;
  setCheck: Dispatch<SetStateAction<boolean>>;
  setOrderCellPhone: Dispatch<SetStateAction<string>>;
}



const PaymentContext = createContext<PaymentContextProps | undefined>(undefined);

export default function PaymentContextProvider({ children }: { children: ReactNode }) {
  const [title, setTitle] = useState<string>("");
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [orderName, setOrderName] = useState<string>("");
  const [orderEmail, setOrderEmail] = useState<string>("");
  const [check, setCheck] = useState<boolean>(false);
  const [deliveryName, setDeliveryName] = useState<string>("");
  const [addressNumber, setAddressNumber] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [detailAddress, setDetailAddress] = useState<string>("");
  const [orderCellPhone, setOrderCellPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  return (
    <PaymentContext.Provider value={
      {
        title,
        totalPrice,
        orderName,
        orderEmail,
        check,
        orderCellPhone,
        setTitle,
        setTotalPrice,
        setCheck,
        // setOrderName,
        // setOrderEmail,
        setOrderCellPhone,
      }}>
      {children}
    </PaymentContext.Provider>
  );
}

export function usePaymentContext(): PaymentContextProps | undefined {
  return useContext(PaymentContext);
}
