'use client'
import React, { useState, useEffect, ChangeEventHandler } from "react";
import PayList from "@/components/payment/PayList";
import OrderList from "@/components/payment/OrderList";
import CheckOut from "@/components/payment/Checkout";
import useCart from "@/Hooks/useCart";
import OrderAddress from "@/components/payment/OrderAddress";
import { usePaymentContext } from "@/context/PaymentContext";

// Import statements here...

export default function Page() {
  const [email, setEmail] = useState("");
  const [selectEmail, setSelectEmail] = useState("");
  const orderContext = usePaymentContext();
  const [orderPerson, setOrderPerson] = useState({
    orderName: "",
    productName: "",
    orderEmail: "",
    orderPhone: ""
  });
  const [orderAddress, setOrderAddress] = useState({
    deliveryName: "",
    detailAddress: "",
    phone: "",
    message: ""
  });

  const { cartQuery: { data: cart } } = useCart();
  const filter = cart && cart.filter((item) => item.checked);

  useEffect(() => {
    if (filter && filter.length > 0) {
      const count = filter.length - 1;
      const productName = count > 0 ? `${filter[0].title} 외 ${count}건` : filter[0].title;

      setOrderPerson((prevOrderPerson) => ({
        ...prevOrderPerson,
        productName
      }));

      const productIds = filter.map((item) => item.id).filter(Boolean);
      orderContext?.setProductId(productIds);
    }
  }, []);

  useEffect(() => {
    const Email = `${email}@${selectEmail}`;
    setOrderPerson((prevOrderPerson) => ({ ...prevOrderPerson, orderEmail: Email }));
  }, [email, selectEmail]);

  function handleChange(e:React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setOrderPerson((prevOrderPerson) => ({ ...prevOrderPerson, [name]: value }));
  }

  function handleAddressChange(e:React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setOrderAddress((prevOrderAddress) => ({ ...prevOrderAddress, [name]: value }));
  }

  return (
    <section className="container w-[1280px] block mx-auto">
      <div>
        <p className="text-[40px] h-[210px] flex justify-start items-end">주문 결제</p>
        <div className="divider mt-[30px]" />
      </div>
      <div>
        <PayList filter={filter} />
        <div className="border border-black mt-[100px]" />
        <OrderList
          handleChange={handleChange}
          setEmail={setEmail}
          setSelectEmail={setSelectEmail}
          selectEmail={selectEmail}
        />
        <div className="border border-1 border-black mt-[100px]" />
        <OrderAddress handleChange={handleAddressChange} />
      </div>
      <div className="divider mt-[40px]" />
      <CheckOut orderPerson={orderPerson} orderAddress={orderAddress} />
    </section>
  );
}
