"use client";
import { getOrderList } from "@/services/paymentApi";
import { useEffect, useState } from "react";

type Props = {
  orderId: string;
  paymentType: string;
  paymentKey: string;
}
export default function AddPayment({ orderId,paymentType, paymentKey }: Props) {
  const [orderList, setOrderList] = useState<Payment | undefined>();
  useEffect(() => {
    function fetchOrderList() {
      getOrderList(orderId).then((res) => {
        setOrderList(res);
      });
    }
    fetchOrderList();
  }, []);

  return (
    <section>
      <h1>Add Payment</h1>
      <p>{orderId}로 결재 조회를 한다</p><br />
      <p>오더 아이디:{orderList?.orderId}</p>
      <p>결재시 사용된 상품 이름:{orderList?.orderName}</p>
      <p>결재 시간:{orderList?.requestedAt}</p>
      <p>결제 수단: {paymentType}</p>
      <p>페이먼트키 : 중요 {paymentKey}</p>
      <p>결재 transactionKey:{orderList?.lastTransactionKey}</p>
      <p>결재 금액 {orderList?.totalAmount.toLocaleString()}</p>
    </section>
  );
}
