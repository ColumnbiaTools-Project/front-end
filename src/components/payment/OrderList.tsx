'use client'
import OrderPerson from "@/components/payment/OrderPerson";
import OrderAddress from "@/components/payment/OrderAddress";
import { ChangeEvent, FormEvent } from "react";
import { usePaymentContext } from "@/context/PaymentContext";

export default function OrderList() {
  const paymentContext = usePaymentContext()
  if(!paymentContext) return null;
  const {setOrderName, setOrderEmail} = paymentContext;
  function handleChange (e: ChangeEvent<HTMLInputElement>) {
    if (e.target.name === 'orderName') {
      setOrderName(e.target.value);
    } else if (e.target.name === 'orderEmail') {
      setOrderEmail(e.target.value);
    }
  }

  return (
  <>
    <div>
      <OrderPerson handleChange={handleChange}/>
      <OrderAddress handleChange={handleChange}/>
    </div>
  </>
  )
}
