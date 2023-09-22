"use client";
import OrderPerson from "@/components/payment/OrderPerson";
import OrderAddress from "@/components/payment/OrderAddress";
import { ChangeEvent,} from "react";
import { OrderPersonProps } from "@/@types/paymentsType";



export default function OrderList({orderPerson, setOrderPerson} : OrderPersonProps) {

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    if (name === "orderName") {
      setOrderPerson({ ...orderPerson, orderName: value });
    } else if (name === "orderCellPhone") {
      setOrderPerson({ ...orderPerson, orderPhone: value });
    } else if (name === "orderEmail") {
      setOrderPerson({ ...orderPerson, orderEmail: value });
    } else if (name === "deliveryName") {
      setOrderPerson({ ...orderPerson, deliveryName: value });
    } else if (name === "postNumber") {
      setOrderPerson({ ...orderPerson, zipCode: value });
    } else if (name === "address") {
      setOrderPerson({ ...orderPerson, address: value });
    } else if (name === "detailAddress") {
      setOrderPerson({ ...orderPerson, detailAddress: value });
    } else if (name === "phone") {
      setOrderPerson({ ...orderPerson, phone: value });
    } else if (name === "message") {
      setOrderPerson({ ...orderPerson, message: value });
    }
  }

  return (
    <>
      <div>
        <OrderPerson handleChange={handleChange} />
        <OrderAddress handleChange={handleChange} />
      </div>
    </>
  );
}
