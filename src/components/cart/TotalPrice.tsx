'use client'

import { usePaymentContext } from "@/context/PaymentContext";
export default function TotalPrice() {
  const PriceContext = usePaymentContext();

  return (
    <>
      <div className={"flex justify-between items-center"}>
        <span className={"text-[26px] font-bold"}>총 결재금액</span>
        <span className={'text-[36px] font-bold'}>{PriceContext?.totalPrice.toLocaleString('ko-KR')}원</span>
      </div>
    </>
  )
}
