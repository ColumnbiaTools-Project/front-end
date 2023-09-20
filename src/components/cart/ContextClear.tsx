'use client'
import { usePaymentContext } from "@/context/PaymentContext";

export default function ContextClear() {
  const paymentContext = usePaymentContext();
  paymentContext?.setMessage("");
  paymentContext?.setPhone("");
  paymentContext?.setDetailAddress("");
  paymentContext?.setAddress("");
  paymentContext?.setZipCode("");
  paymentContext?.setOrderId("");
  paymentContext?.setProductId([]);
  paymentContext?.setOrderTime("");
  paymentContext?.setTitle("");
  paymentContext?.setTotalPrice(0);
  paymentContext?.setOrderName("");
  paymentContext?.setOrderEmail("");
  paymentContext?.setOrderPhone("");
  paymentContext?.setDeliveryName("");
  paymentContext?.setCheck(false);
}
