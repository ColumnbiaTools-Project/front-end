import { useEffect, useRef, useState } from "react";
import { useAsync } from "react-use";
import { loadPaymentWidget, PaymentWidgetInstance } from "@tosspayments/payment-widget-sdk";
import { nanoid } from "nanoid";
import { usePaymentContext } from "@/context/PaymentContext";
import { OrderPersonType } from "@/@types/paymentsType";
import usePayments from "@/Hooks/usePayments";
import getQueryClient from "@/app/getQueryClient";
import { uid } from "@/Constants/Constant";

const clientKey = process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY || "";
// const customerKey = process.env.NEXT_PUBLCI_TOSS_CUSTOMER_KEY || "";
const customerKey = "YbX2HuSlsC9uVJW6NMRMj";

type Props = {
  orderPerson: OrderPersonType,
}
export default function CheckOut({orderPerson} : Props) {
  const queryClient = getQueryClient();
  const paymentContext = usePaymentContext();
  const paymentWidgetRef = useRef<PaymentWidgetInstance | null>(null);
  const paymentMethodsWidgetRef = useRef<ReturnType<
    PaymentWidgetInstance["renderPaymentMethods"]
  > | null>(null);
  const {addOrUpdatePayment} = usePayments()
  const [price, setPrice] = useState(0);
  // context data 가져오기

  const title = paymentContext?.title
  const totalPrice = paymentContext?.totalPrice
  const orderId = nanoid(10);
  const productId = paymentContext?.productId
  const updateOrderPerson = {
    ...orderPerson,
    title:title,totalPrice:totalPrice,orderId:orderId,productId:productId
  }
  console.log(updateOrderPerson);

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
        orderId: orderId,
        orderName: orderPerson.orderName,
        customerName: orderPerson.deliveryName,
        customerEmail: orderPerson.orderEmail,
        successUrl: `${window.location.origin}/cart/payments/complete`,
        failUrl: `${window.location.origin}/fail`
      });
    } catch (error) {
      console.error(error);
    }
    addOrUpdatePayment.mutate(updateOrderPerson,{
      onSuccess: () => {
        queryClient.invalidateQueries(["payments",uid]);
      }
    });
  }
  return (
    <>
      <div>
        <main className={'flex flex-col justify-center items-center'}>
          <h1>주문서</h1>
          <div id="payment-widget" style={{ width: "100%" }} />
          <div id="agreement" style={{ width: "100%" }} />
          <button onClick={handleClick}>결제하기</button>
        </main>
      </div>
    </>
  );
}