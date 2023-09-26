import { useEffect, useRef, useState, useMemo } from "react";
import { useAsync } from "react-use";
import { loadPaymentWidget, PaymentWidgetInstance } from "@tosspayments/payment-widget-sdk";
import { nanoid } from "nanoid";
import { usePaymentContext } from "@/context/PaymentContext";
import { OrderPersonType } from "@/@types/paymentsType";
import usePayments from "@/Hooks/usePayments";
import getQueryClient from "@/app/getQueryClient";
import { uid } from "@/Constants/Constant";
import { addOrUpdateToPayment } from "@/services/firebase/payments";
import { useQueryClient } from "@tanstack/react-query";

const clientKey = process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY || "";
const customerKey = "YbX2HuSlsC9uVJW6NMRMj";

type Props = {
  orderPerson: OrderPersonType,
}

export default function CheckOut({ orderPerson }: Props) {
  // const queryClient = getQueryClient();
  const paymentContext = usePaymentContext();
  const paymentWidgetRef = useRef<PaymentWidgetInstance | null>(null);
  const paymentMethodsWidgetRef = useRef<ReturnType<PaymentWidgetInstance["renderPaymentMethods"]> | null>(null);
  const { addOrUpdatePayment } = usePayments();
  const [price, setPrice] = useState(0);
  // const title = paymentContext?.title;
  const totalPrice = paymentContext?.totalPrice;
  const orderId = nanoid(10);
  const productId = paymentContext?.productId;

  const updateOrderPerson = useMemo(() => ({
    ...orderPerson,
    // title: title,
    totalPrice: totalPrice,
    orderId: orderId,
    productId: productId
  }), [orderPerson,  totalPrice, orderId, productId]);


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
      const paymentMethodsWidget = paymentWidget.renderPaymentMethods("#payment-widget", { value: price });
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
        orderName: orderPerson.productName,
        customerName: orderPerson.orderName,
        customerEmail: orderPerson.orderEmail,
        successUrl: `${window.location.origin}/cart/payments/complete`,
        failUrl: `${window.location.origin}/fail`
      }).then(() => {
        addOrUpdatePayment.mutate(updateOrderPerson);
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div >
        <main className={"flex flex-col justify-center items-center"}>
          <div id="payment-widget" style={{ width: "100%" }} />
          <div id="agreement" style={{ width: "100%" }} />
        </main>
        <div className={'divider mt-[50px]'}/>
        <div className={'mt-[40px]'}>
          <span className={'text-[24px]'}>결재 전 확인사항</span>
          <div className={'mt-[40px]'}>
            <li className={'pb-2'}>고객의 단순한 변심으로 교환, 반품 및 환불을 요구할 때 수반되는 배송비는 고객님께서 부담하셔야합니다.</li>
            <li>상품을 개봉했거나 설치한 후에는 상품의 재판매가 불가능하므로 고객님의 변심에 대한 교환, 반품이 불가능함을 양지해 주시기 바랍니다</li>
          </div>
        </div>
        <div className={'divider mt-[40px]'}/>
        <div className={'flex justify-between items-center'}>
          <p className={'text-[24px] font-bold'}>총 결재금액</p>
          <p className={'text-[36px] font-bold'}>{totalPrice?.toLocaleString('kr-KR')} 원</p>
        </div>
        <div className={'mt-[100px] mb-[200px] flex justify-center items-center'}>
          <button
            className={'w-[444px] p-[23px] bg-black text-white text-[24px] flex justify-center items-center'}
            onClick={handleClick}>결제하기</button>
        </div>
      </div>
    </>
  );
}