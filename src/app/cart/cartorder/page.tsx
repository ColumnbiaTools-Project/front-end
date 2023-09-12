"use client";
import PayList from "@/components/payment/PayList";
import OrderList from "@/components/payment/OrderList";
import CheckOut from "@/components/payment/CheckOut";
import { usePaymentContext } from "@/context/PaymentContext";

export default function Page() {
  const paymentContext = usePaymentContext();
  if (!paymentContext) return null;
  const { title, totalPrice, orderName, orderEmail } = paymentContext;
  console.log(title, totalPrice, orderName, orderEmail);

  return (
    <>
        <div>
          <p className={"text-[40px] mt-4"}>주문 결재</p>
          <div className={"divider"} />
        </div>
        <div>
          {/*// 주문상품과 가격 표시*/}
          <PayList />
          {/*//주문자의 인적사항 표시*/}
          <OrderList />
          <div className={"divider"} />
          {/*결재 처리*/}
          <CheckOut />
        </div>
    </>
  )
}
