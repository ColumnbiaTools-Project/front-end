import axios from "axios";
import { GetServerSidePropsContext } from "next";

import AddPayment from "@/components/payment/AddPayment";
import SuccessButton from "@/components/payment/SuccessButton";
import dayjs from "dayjs";

interface Payment {
  paymentType: string,
  orderId: string;
  paymentKey: string;
  amount: number;
}

// 마무리되면 cart에서  data를 삭제한다. check 된 상품

export default function SuccessPage(payment: any) {
  const { orderId, paymentKey, paymentType, } = payment.searchParams;

  return (
    <>
      <p className={'h-[260px] mx-auto flex justify-center items-end text-[40px] font-bold'}>주문완료</p>
      <section className={'container w-[1280px] mx-auto mt-[100px]'}>
          <div className={'flex justify-start items-center'}>
            <span className={'h-[16px] font-normal'}>{dayjs().format("YYYY-MM-DD HH")} </span>
          </div>
        <div className={'border border-b-2px border-black mt-[17px]'} />
          <div className={'mt-[55px]'}>
            <AddPayment orderId={orderId} paymentKey={paymentKey} paymentType={paymentType}  />
            <SuccessButton />
          </div>
      </section>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const {
    query: { paymentKey, orderId, amount }
  } = context;

  try {
    const { data: payment } = await axios.post<Payment>(
      "https://api.tosspayments.com/v1/payments/confirm",
      {
        paymentKey,
        orderId,
        amount
      },
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${process.env.TOSS_PAYMENTS_SECRET_KEY}:`
          ).toString("base64")}`
        }
      }
    );
    return {
      props: { payment }
    };
  } catch (err: any) {
    console.error("err", err);
    return {
      redirect: {
        destination: `/fail?code=${err.code}&message=${err.message}`,
        permanent: false
      }
    };
  }
}