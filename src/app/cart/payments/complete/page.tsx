import axios from "axios";
import { useRouter } from "next/router";
import AddPayment from "@/components/payment/AddPayment";
import SuccessButton from "@/components/payment/SuccessButton";
import dayjs from "dayjs";

interface Payment {
  paymentType: string;
  orderId: string;
  paymentKey: string;
  amount: number;
}

export default function SuccessPage(payment: any) {
  const router = useRouter();
  const { orderId, paymentKey, paymentType } = router.query;

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

SuccessPage.getInitialProps = async (context: any) => {
  const {
    query: { paymentKey, orderId, amount },
  } = context;

  try {
    const { data: payment } = await axios.post<Payment>(
      "https://api.tosspayments.com/v1/payments/confirm",
      {
        paymentKey,
        orderId,
        amount,
      },
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${process.env.TOSS_PAYMENTS_SECRET_KEY}:`,
          ).toString("base64")}`,
        },
      },
    );

    return {
      payment,
    };
  } catch (err: any) {
    console.error("err", err);
    return {
      redirect: {
        destination: `/fail?code=${err.code}&message=${err.message}`,
        permanent: false,
      },
    };
  }
};
