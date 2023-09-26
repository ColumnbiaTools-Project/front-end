"use client";
import PayList from "@/components/payment/PayList";
import OrderList from "@/components/payment/OrderList";
import { useEffect, useState } from "react";
import CheckOut from "@/components/payment/Checkout";
import { OrderPersonType } from "@/@types/paymentsType";
import useCart from "@/Hooks/useCart";
import { usePaymentContext } from "@/context/PaymentContext";
import DaumZipCode from "@/components/payment/DaumZipCode";


export default function Page() {
  const [orderPerson, setOrderPerson] = useState<OrderPersonType>({
    orderName: "",
    productName: "",
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
  const { cartQuery: { data: cart } } = useCart();
  const filter: CartProduct[] | undefined = cart && cart.filter((item) => item.checked);
  if (!filter) { return null;}

  useEffect(() => {
    if (filter.length > 1) {
      const count = filter.length - 1;
      setOrderPerson({...orderPerson, productName:`${filter[0].title} 외 ${count}`});
    } else {
      setOrderPerson({...orderPerson, productName:filter[0]?.title});
    }
  },[])

  return (
    <section className="container w-[1280px] block mx-auto">
      <div>
        <p className={"text-[40px] h-[210px] flex justify-start items-end "}>주문 결재</p>
        <div className={"divider mt-[30px]"} />
      </div>
      <div>
        <PayList filter={filter}/>
        <div className={'border border-black mt-[100px]'}/>
        <OrderList orderPerson={orderPerson} setOrderPerson={setOrderPerson} />
      </div>
      <div className={"divider mt-[40px]"} />
      <CheckOut orderPerson={orderPerson} />
    </section>
  );
}