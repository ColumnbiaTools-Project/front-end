import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
export interface PaymentContextProps {
  title: string;
  totalPrice: number;
  orderName: string;
  orderEmail: string;
  check: boolean
  setTitle: Dispatch<SetStateAction<string>>;
  setTotalPrice: Dispatch<SetStateAction<number>>;
  setOrderName: Dispatch<SetStateAction<string>>;
  setOrderEmail: Dispatch<SetStateAction<string>>;
  setCheck: Dispatch<SetStateAction<boolean>>;
}

const PaymentContext = createContext<PaymentContextProps | undefined>(undefined);


export default function PaymentContextProvider({children}:{children:ReactNode}) {
  const [title, setTitle] = useState<string>("");
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [orderName, setOrderName] = useState<string>("");
  const [orderEmail, setOrderEmail] = useState<string>("");
  const [check, setCheck] = useState<boolean>(false);

  return (
    <PaymentContext.Provider value={
      {
        title, totalPrice, orderName, orderEmail, setTitle, setTotalPrice, setOrderName, setOrderEmail,check,setCheck
      }}>
      {children}
    </PaymentContext.Provider>
  );
}

export function usePaymentContext(): PaymentContextProps | undefined {
  return useContext(PaymentContext);
}
