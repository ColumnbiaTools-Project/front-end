"use client";
import { useSearchParams, useRouter } from "next/navigation";
import AddPayment from "@/components/payment/AddPayment";
import SuccessButton from "@/components/payment/SuccessButton";
import dayjs from "dayjs";
import { useEffect } from "react";
import axios from "axios";
import useCart from "@/Hooks/useCart";

export default function SuccessPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const paymentKey = searchParams.get("paymentKey");
  const amount = searchParams.get("amount");
  const paymentType = searchParams.get("paymentType");
  const { cartQuery, removeItem } = useCart();
  const checkedCartItem =
    cartQuery?.data && cartQuery?.data.filter(item => item.checked);

  async function fetchTossConfirm() {
    try {
      const res = await axios.post("/api/toss", {
        paymentKey,
        amount,
        orderId,
      });
      if (res && res.status === 200) {
        const data = res.data;
        checkedCartItem &&
          checkedCartItem.forEach(item => {
            removeItem.mutate(item.id);
          });
        console.log("결제 승인 성공!", data);
      } else {
        console.error("토스 결제승인에 오류가 났습니다!", res);
        alert("결제 승인에 오류가 났습니다.");
        router.push("/cart");
      }
    } catch (error) {
      console.error("토스 결제 승인 오류", error);
      alert("결제 승인에 오류가 났습니다.");
      router.push("/cart");
    }
  }

  useEffect(() => {
    fetchTossConfirm();
  }, []);

  return (
    <>
      <p
        className={
          "h-[260px] mx-auto flex justify-center items-end text-[40px] font-bold"
        }
      >
        주문완료
      </p>
      <section className={"container w-[1280px] mx-auto mt-[100px]"}>
        <div className={"flex justify-start items-center"}>
          <span className={"h-[16px] font-normal"}>
            {dayjs().format("YYYY-MM-DD HH")}{" "}
          </span>
        </div>
        <div className={"border border-b-2px border-black mt-[17px]"} />
        <div className={"mt-[55px]"}>
          <AddPayment
            orderId={orderId as string}
            paymentKey={paymentKey as string}
            paymentType={paymentType as string}
          />
          <SuccessButton />
        </div>
      </section>
    </>
  );
}
