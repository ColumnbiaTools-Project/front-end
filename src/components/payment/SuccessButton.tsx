'use client'
import { removeOrderList } from "@/services/localStoreApi";
import { useRouter } from 'next/navigation'
import usePayments from "@/Hooks/usePayments";
import { usePaymentContext } from "@/context/PaymentContext";
import { uid } from "@/Constants/Constant";
import getQueryClient from "@/app/getQueryClient";
import Link from "next/link";

export default function SuccessButton() {
  const queryClient = getQueryClient();
  const {addOrUpdatePayment} = usePayments();

  const router = useRouter()
  /*function handleClick() {
    addOrUpdatePayment.mutate( paymentContext?.updateOrderPerson, {
      onSuccess: () => {
        queryClient.invalidateQueries(['payment',uid]);
      }
    })
    router.push('/')
  }*/
  return (
    <>
      <Link href={'/'}>
      <button
        // onClick={handleClick}
      >결재 확인
      </button>
      </Link>
    </>
  );
}
