"use client";
import CalTotalMoney from "@/components/payment/CalTotalMoney";
import PaymentItem from "@/components/payment/Paymentitem";
import { useCart } from "@/Hooks/useCart";

type Props = {
 setTotalPrice: React.Dispatch<React.SetStateAction<number>>
}

export default function PayList({ setTotalPrice } : Props) {
  const { cartQuery: { data: cart } } = useCart();
  const filter:CartProduct[] | undefined = cart && cart.filter((item) => item.checked);

  return (
    <div>
      <PaymentItem filter={filter} />
      <div className={"divider"} />
      <CalTotalMoney setTotalPrice={setTotalPrice}/>
    </div>
  );
}
