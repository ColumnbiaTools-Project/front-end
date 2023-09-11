'use client'
import PayList from "@/components/payment/PayList";
import OrderList from "@/components/payment/OrderList";
import CheckOut from "@/components/payment/CheckOut";
import { useState } from "react";

export default function Page() {

  const [totalPrice,setTotalPrice] = useState<number>(0);
  return (
    <>
      <div>
        <p className={"text-[40px] mt-4"}>주문 결재</p>
        <div className={"divider"} />
      </div>
      <PayList setTotalPrice={setTotalPrice}/>
      <OrderList />
      <div className={'divider'} />
      <CheckOut totalPrice={totalPrice} />
    </>
  );
}
