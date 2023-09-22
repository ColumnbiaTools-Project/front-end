'use client'
import Link from "next/link";
import { usePaymentContext } from "@/context/PaymentContext";



export default function SetOrder() {
  const paymentContext = usePaymentContext();

  return(
    <>
      <div>
        <span>{paymentContext?.totalPrice}</span>
      </div>
      <div className={'mb-4 block'}>
        <Link href={'/cart/payments'}>
          <button
            className={`border border-1-solid rounded-[30px] p-2 bg-gray-75 disabled:opacity-75`}
          >주문하기</button>
        </Link>
      </div>
    </>

  )
}
