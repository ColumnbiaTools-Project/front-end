"use client";
import PayList from "@/components/payment/PayList";
import OrderList from "@/components/payment/OrderList";
import { usePaymentContext } from "@/context/PaymentContext";
import { useEffect, useState } from "react";
import CheckOut from "@/components/payment/Checkout";
import { OrderPersonType } from "@/@types/paymentsType";


export default function Page() {
  const paymentContext = usePaymentContext();
  const totalPrice = paymentContext?.totalPrice;
  const [orderPerson, setOrderPerson] = useState<OrderPersonType>({
    orderName: "",
    orderEmail: "",
    orderTime: "",
    orderPhone: "",
    deliveryName: "",
    zipCode: "",
    address: "",
    detailAddress: "",
    phone: "",
    message: ""
  });
  return (
    <section className="container w-[1020px] block mx-auto">
      <div>
        <p className={"text-[40px] mt-4"}>주문 결재</p>
        <div className={"divider"} />
      </div>
      <div>
        <PayList />
        <OrderList orderPerson={orderPerson} setOrderPerson={setOrderPerson} />
        <div className={"divider"} />
      </div>
      <CheckOut orderPerson={orderPerson} />
    </section>
  );
}
