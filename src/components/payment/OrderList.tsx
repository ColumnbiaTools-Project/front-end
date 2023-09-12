'use client'
import OrderPerson from "@/components/payment/OrderPerson";
import OrderAddress from "@/components/payment/OrderAddress";
import { ChangeEvent,} from "react";
import { useOrderAddress, useOrderPerson } from "@/Store/store";

export default function OrderList() {

  // @ts-ignore
  const {setOrderName, setOrderEmail,setOrderPhone,orderName, orderPhone, orderEmail} = useOrderPerson();
  // @ts-ignore
  const {setDeliveryName, setZipCode, setAddress, setDetailAddress, setPhone, setMessage,
    deliveryName, zipCode, address, detailAddress, phone,message}
    = useOrderAddress();


  function handleChange (e: ChangeEvent<HTMLInputElement>) {
    const {name, value} = e.target;
    if (name === 'orderName') {
      setOrderName(value);
    } else if (name === 'orderCellPhone'){
      setOrderPhone(value);
    } else if (name === 'orderEmail') {
      setOrderEmail(value);
    } else if (name === 'deliveryName') {
      setDeliveryName(value)
    } else if (name === 'postNumber'){
      setZipCode(value)
    } else if (name === 'address') {
      setAddress(value)
    } else if (name === 'detailAddress') {
      setDetailAddress(value)
    } else if (name === 'phone') {
      setPhone(value)
    } else if (name ==='message') {
      setMessage(value)
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
