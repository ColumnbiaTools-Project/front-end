import axios from "axios";
import { GetServerSidePropsContext } from "next";

import AddPayment from "@/components/payment/AddPayment";
import SuccessButton from "@/components/payment/SuccessButton";

interface Payment {
  paymentType: string,
  orderId: string;
  paymentKey: string;
  amount: number;
}

export default function SuccessPage(payment: any) {
  const { orderId, paymentKey, paymentType } = payment.searchParams;

  return (
    <section className={'container w-1020 block mx-auto mt-4'}>
      <div
        className={"flex flex-col items-center justify-center"}
      >
        <h1>결제 성공</h1>
        <AddPayment orderId={orderId} paymentKey={paymentKey} paymentType={paymentType} />
        <SuccessButton />
      </div>
    </section>
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

