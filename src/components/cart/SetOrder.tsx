'use client'
import Link from "next/link";
import { usePaymentContext } from "@/context/PaymentContext";

export default function SetOrder() {
  const paymentContext = usePaymentContext()

  return(
    <div className={'mb-4'}>
        <Link href={'/cart/cartorder'}>
          <button
            className={`btn btn-primary mx-auto  ${paymentContext?.check ? 'flex': 'hidden'}`}
          >주문하기</button>
        </Link>
    </div>
  )
}
