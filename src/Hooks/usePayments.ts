'use client'
import { useMutation, useQuery,} from "@tanstack/react-query";
import { uid } from "@/Constants/Constant";
import getQueryClient from "@/app/getQueryClient";
import { addOrUpdateToPayment, getPayment, removeFromPayment } from "@/services/firebase/payments";
import { UpdateOrderPersonType } from "@/@types/paymentsType";
import dayjs from "dayjs";

// 날짜 조건
const today = dayjs().format('YYYY-MM-DD');

export default function  usePayments() {
  const queryClient = getQueryClient();

  const paymentQuery
    = useQuery(["payment"], () => getPayment(uid), {
    staleTime: 10 * 60,
  });

  const addOrUpdatePayment = useMutation(
    (paymentData: UpdateOrderPersonType) => addOrUpdateToPayment(uid, paymentData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['payments', uid]);
      },
      onError: (error) => {
        console.error("카트 항목 업데이트 실패:", error);
      },
    }
  );
  /*const addOrUpdatePayment = useMutation(
    (paymentData: string) => addOrUpdateToPayment(uid, paymentData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['payments', uid]);
      },
      onError: (error) => {
        console.error("카트 항목 업데이트 실패:", error);
      },
    }
  );*/

  const removePayment
    = useMutation((id: string) => removeFromPayment(uid, id), {
    onSuccess: () => {
      queryClient.invalidateQueries(['payments', uid]);
    },
    onError: (error) => {
      console.error("카트 항목 제거 실패:", error);
    },
  });

  return { paymentQuery, addOrUpdatePayment, removePayment }
}