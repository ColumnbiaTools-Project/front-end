'use client'
import OrderPerson from "@/components/payment/OrderPerson";
import OrderAddress from "@/components/payment/OrderAddress";
import { ChangeEvent, ChangeEventHandler } from "react";
import CheckOut from "@/components/payment/CheckOut";

export default function OrderList() {
  function handleChange (e: ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
  }
  return (
  <>
    <section>
      <OrderPerson handleChange={handleChange}/>
      <OrderAddress handleChange={handleChange}/>
    </section>
  </>
  )
}
