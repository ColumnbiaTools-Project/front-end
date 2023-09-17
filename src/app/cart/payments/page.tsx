"use client";
import PayList from "@/components/payment/PayList";
import OrderList from "@/components/payment/OrderList";
import { usePaymentContext } from "@/context/PaymentContext";
import { useEffect, useRef, useState } from "react";
import { loadPaymentWidget, PaymentWidgetInstance } from "@tosspayments/payment-widget-sdk";
import { useAsync } from "react-use";
import { nanoid } from "nanoid";

const clientKey = process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY || "";
const customerKey = process.env.NEXT_PUBLCI_TOSS_CUSTOMER_KEY || "";

export default function Page() {
  // 이부분을 개선하여야 한다.
  const paymentContext = usePaymentContext();
  if (!paymentContext) return null;
  const {
    title,
    orderName,
    totalPrice,
    orderEmail,
  } = paymentContext;
  console.log(title, orderName, totalPrice, orderEmail);


  const paymentWidgetRef = useRef<PaymentWidgetInstance | null>(null);
  const paymentMethodsWidgetRef = useRef<ReturnType<
    PaymentWidgetInstance["renderPaymentMethods"]
  > | null>(null);

  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (totalPrice) {
      setPrice(totalPrice);
    }
  }, [totalPrice]);

  useAsync(async () => {
    if (!clientKey || !customerKey) {
      console.error("Client key 또는 customer key가 누락되었습니다.");
      return;
    }
    try {
      const paymentWidget = await loadPaymentWidget(clientKey, customerKey);
      if (!paymentWidget) {
        console.error("Payment widget을 로드하지 못했습니다.");
        return;
      }
      const paymentMethodsWidget
        = paymentWidget.renderPaymentMethods("#payment-widget", { value: price });
      paymentWidget.renderAgreement("#agreement");
      paymentWidgetRef.current = paymentWidget;
      paymentMethodsWidgetRef.current = paymentMethodsWidget;
    } catch (error) {
      console.error(error);
    }
  }, [clientKey, customerKey, price]);

  useEffect(() => {
    const paymentMethodsWidget = paymentMethodsWidgetRef.current;
    if (paymentMethodsWidget == null) {
      return;
    }
    paymentMethodsWidget.updateAmount(price, paymentMethodsWidget.UPDATE_REASON.COUPON);
  }, [price]);


  async function handleClick() {
    const paymentWidget = paymentWidgetRef.current;
    try {
      await paymentWidget?.requestPayment({
        orderId: nanoid(10),
        orderName: title,
        customerName: orderName,
        customerEmail: orderEmail,
        successUrl: `${window.location.origin}/cart/payments/complete`,
        failUrl: `${window.location.origin}/fail`
      });

      // 이부분에 주문정보를 db에 저장한다.
      // 주문 정보 : orderId, productId,totalPrice


    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section className="container w-[1020px] block mx-auto">
      <div>
        <p className={"text-[40px] mt-4"}>주문 결재</p>
        <div className={"divider"} />
      </div>
      <div>
        <PayList />
        <OrderList />
        <div className={"divider"} />
      </div>
      <div>
        <main className={'flex flex-col justify-center items-center'}>
          <h1>주문서</h1>
          <div id="payment-widget" style={{ width: "100%" }} />
          <div id="agreement" style={{ width: "100%" }} />
          <button onClick={handleClick}>결제하기</button>
        </main>
      </div>
    </section>
  );
}
