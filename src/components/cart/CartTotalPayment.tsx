import { usePaymentContext } from "@/context/PaymentContext";

type Props ={
  totalPrice? : number;
}
export default function CartTotalPayment({totalPrice} :Props) {
  const paymentContext = usePaymentContext();
  return (
    <>

    </>
  );
}
