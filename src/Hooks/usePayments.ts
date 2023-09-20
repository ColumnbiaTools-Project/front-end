'use client'
import { useMutation, useQuery,} from "@tanstack/react-query";
import { uid } from "@/Constants/Constant";
import getQueryClient from "@/app/getQueryClient";
import { addOrUpdateToPayment, getPayment, removeFromPayment } from "@/services/firebase/payments";
import { OrderPersonType, } from "@/@types/paymentsType";

export default function  usePayments() {
  const queryClient = getQueryClient();
  const paymentQuery
    = useQuery(["payment"], () => getPayment('pelican8118'), {
    staleTime: 10 * 60,
  });

  const addOrUpdatePayment = useMutation(
    (paymentData: OrderPersonType) => addOrUpdateToPayment(uid, paymentData),
    {
      onSuccess: () => {
        queryClient.refetchQueries(['payments', uid]);
      },
      onError: (error) => {
        console.error("카트 항목 업데이트 실패:", error);
      },
    }
  );

  const removePayment
    = useMutation((id: string) => removeFromPayment(uid, id), {
    onSuccess: () => {
      queryClient.refetchQueries(['payments', uid]);
    },
    onError: (error) => {
      console.error("카트 항목 제거 실패:", error);
    },
  });

  return { paymentQuery, addOrUpdatePayment, removePayment }
}