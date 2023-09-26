"use client";
import OrderPerson from "@/components/payment/OrderPerson";
import OrderAddress from "@/components/payment/OrderAddress";
import { ChangeEvent,} from "react";
import { OrderPersonProps } from "@/@types/paymentsType";

export default function OrderList({orderPerson, setOrderPerson} : OrderPersonProps) {

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setOrderPerson({...orderPerson, [name]: value });
  }

  return (
    <>
      <div>
        <OrderPerson handleChange={handleChange} />
        <div className={'border border-1 border-black mt-[100px]'} />
        <OrderAddress handleChange={handleChange} />
      </div>
    </>
  );
}