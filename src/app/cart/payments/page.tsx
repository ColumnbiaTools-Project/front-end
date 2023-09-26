"use client";
import PayList from "@/components/payment/PayList";
import OrderList from "@/components/payment/OrderList";
import { ChangeEvent, useEffect, useState } from "react";
import CheckOut from "@/components/payment/Checkout";
import useCart from "@/Hooks/useCart";
import OrderAddress from "@/components/payment/OrderAddress";

export default function Page() {
  const [orderPerson, setOrderPerson] = useState<OrderPersonInputType>({
    orderName: "",
    productName: "",
    orderEmail: "",
    orderTime: "",
    orderPhone: "",
  });
  const [orderAddress, setOrderAddress] = useState<OrderAddressType>({
    deliveryName: "",
    zipCode: "",
    address: "",
    detailAddress: "",
    phone: "",
    message: ""
  })

  const { cartQuery: { data: cart } } = useCart();
  const filter: CartProduct[] | undefined = cart && cart.filter((item) => item.checked);
  if (!filter) {
    return null;
  }

  useEffect(() => {
    if (filter.length > 1) {
      const count = filter.length - 1;
      setOrderPerson({ ...orderPerson, productName: `${filter[0].title} 외 ${count}` });
    } else {
      setOrderPerson({ ...orderPerson, productName: filter[0]?.title });
    }
  }, []);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setOrderPerson({ ...orderPerson, [name]: value });
  }
  function handleAddressChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setOrderAddress({ ...orderAddress, [name]: value });
  }
  console.log(orderAddress);

  return (
    <section className="container w-[1280px] block mx-auto">
      <div>
        <p className={"text-[40px] h-[210px] flex justify-start items-end "}>주문 결재</p>
        <div className={"divider mt-[30px]"} />
      </div>
      <div>
        <PayList filter={filter} />
        <div className={"border border-black mt-[100px]"} />
        <OrderList handleChange={handleChange} />
        <div className={"border border-1 border-black mt-[100px]"} />
        <OrderAddress handleChange={handleAddressChange}  />
      </div>
      <div className={"divider mt-[40px]"} />
      <CheckOut orderPerson={orderPerson} />
    </section>
  );
}