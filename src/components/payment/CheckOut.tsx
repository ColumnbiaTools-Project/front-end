'use client'
import { useRef, useState } from "react";
import {
  PaymentWidgetInstance,
  loadPaymentWidget,
} from "@tosspayments/payment-widget-sdk";
import { nanoid } from "nanoid";
import { useAsync } from "react-use";
import Guide from "@/components/Guide";
import { usePaymentContext } from "@/context/PaymentContext";

// 환경변수에 입력해야 하는 키
const clientKey = "test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq";
const customerKey = "YbX2HuSlsC9uVJW6NMRMj";

export default function CheckOut() {
  const paymentWidgetRef = useRef<PaymentWidgetInstance | null>(null);
  const paymentContext  = usePaymentContext();
  if(!paymentContext) return null
  const {title, totalPrice, orderName, orderEmail} = paymentContext;

  const paymentMethodsWidgetRef = useRef<ReturnType<
    PaymentWidgetInstance["renderPaymentMethods"]
  > | null>(null);

  const [price, setPrice] = useState(totalPrice);

  useAsync(async () => {
    const paymentWidget = await loadPaymentWidget(clientKey, customerKey); // 회원 결제
    const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
      "#payment-widget",
      { value: price }
    );
    paymentWidget.renderAgreement("#agreement");

    paymentWidgetRef.current = paymentWidget;
    paymentMethodsWidgetRef.current = paymentMethodsWidget;
  }, []);

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >

      <div id="payment-widget" style={{ width: "100%" }} />
      <div id="agreement" style={{ width: "100%" }} />
      <Guide />
      <button
        className={'btn btn-primary mb-4'}
        onClick={async () => {
          const paymentWidget = paymentWidgetRef.current;
          try {
            // ------ '결제하기' 버튼 누르면 결제창 띄우기 ------
            // https://docs.tosspayments.com/reference/widget-sdk#requestpayment결제-정보

            await paymentWidget?.requestPayment({
              orderId: nanoid(),
              orderName: title,
              customerName: orderName,
              customerEmail: orderEmail,
              successUrl: `${window.location.origin}/success`,
              failUrl: `${window.location.origin}/fail`,
            });
          } catch (error) {
            // 에러 처리하기
            console.error(error);
          }
        }}
      >
        결제하기
      </button>
    </main>
  );
}
